import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';
import axios from 'axios';

function VotePage() {
  const [players, setPlayers] = useState([]);
  const [topVoted, setTopVoted] = useState([]);
  const [voteCount, setVoteCount] = useState(0);

  useEffect(() => {
    const storedCount = parseInt(localStorage.getItem('voteCount')) || 0;
    setVoteCount(storedCount);
    fetchPlayers();
  }, []);

  const fetchPlayers = async () => {
    try {
      const res = await axios.get('http://localhost:5000/players');
      setPlayers(res.data);
      calculateTopVoted(res.data);
    } catch (error) {
      console.error('Error fetching players:', error);
    }
  };

  const handleVote = async (playerId) => {
    if (voteCount >= 5) return;

    try {
      await axios.post(`http://localhost:5000/vote/${playerId}`);
      const updatedPlayers = players.map((player) =>
        player._id === playerId ? { ...player, votes: player.votes + 1 } : player
      );
      setPlayers(updatedPlayers);
      calculateTopVoted(updatedPlayers);

      const newCount = voteCount + 1;
      setVoteCount(newCount);
      localStorage.setItem("voteCount", newCount);
    } catch (error) {
      console.error('Error voting:', error);
    }
  };

  const calculateTopVoted = (list) => {
    const sorted = [...list].sort((a, b) => b.votes - a.votes).slice(0, 5);
    setTopVoted(sorted);
  };

  return (
    <>
      <Navbar />
      <div className="background-wrapper">
        <div className="container">
          <div className="hero">
            <h1>Who Fits Barça?</h1>
            <p>Vote for the players you think deserve a spot in the squad</p>
            <p style={{ marginTop: '10px', color: '#ffd700', fontWeight: 'bold' }}>
              Votes used: {voteCount}/5
            </p>
          </div>

          {/* Voting Cards */}
          <div className="legend-cards">
            {players.map((player) => (
              <div key={player._id} className="vote-card">
                <h3>{player.Player}</h3>
                <p>{player.Squad} • {player.Pos} • Age: {player.Age}</p>
                <p className="probability-shown">
                  Barça Fit: {(player.Barca_Probability * 100).toFixed(0)}%
                </p>
                <p style={{ fontWeight: 'bold', color: '#63ffe0' }}>
                  Votes: {player.votes}
                </p>
                <button
                  className="btn-primary"
                  onClick={() => handleVote(player._id)}
                  disabled={voteCount >= 5}
                >
                  {voteCount >= 5 ? "Vote Limit Reached" : "Vote"}
                </button>
              </div>
            ))}
          </div>

          {/* Top 5 Voted Players */}
          <div className="club-legends" style={{ marginTop: '5rem' }}>
            <h2>Top 5 Voted Players</h2>
            <div className="legend-cards">
              {Array.isArray(topVoted) && topVoted.map((player, index) => (
                <div key={player._id} className="vote-card">
                  <h3>#{index + 1} {player.Player}</h3>
                  <p>{player.Squad} • {player.Pos} • Age: {player.Age}</p>
                  <p className="probability-shown">
                    Barça Fit: {(player.Barca_Probability * 100).toFixed(0)}%
                  </p>
                  <p style={{ fontWeight: 'bold', fontSize: '1.2rem', color: '#63ffe0' }}>
                    Votes: {player.votes}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default VotePage;
