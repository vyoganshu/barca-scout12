const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017';
const DB_NAME = 'barcaScout';
const COLLECTION_NAME = 'players';

let db, playersCollection;

async function connectToDB() {
  const client = new MongoClient(MONGO_URI);
  await client.connect();
  db = client.db(DB_NAME);
  playersCollection = db.collection(COLLECTION_NAME);
  console.log("✅ Connected to MongoDB");
}

// GET: Fetch 30 players
app.get('/players', async (req, res) => {
  try {
    const players = await playersCollection
      .find({})
      .sort({ Barca_Probability: -1 })
      .limit(30)
      .toArray();
    res.json(players);
  } catch (error) {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Failed to fetch players" });
  }
});

// POST: Vote for player
app.post('/vote/:id', async (req, res) => {
  try {
    const playerId = req.params.id;
    const result = await playersCollection.updateOne(
      { _id: new ObjectId(playerId) },
      { $inc: { votes: 1 } }
    );

    if (result.modifiedCount === 1) {
      res.json({ success: true, message: "Vote counted!" });
    } else {
      res.status(404).json({ success: false, message: "Player not found" });
    }
  } catch (error) {
    console.error("Error voting:", error);
    res.status(500).json({ error: "Failed to vote" });
  }
});

// Start server
connectToDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error("❌ Failed to connect to DB:", err);
});
