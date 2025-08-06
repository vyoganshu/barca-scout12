import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../src/images/campnou.jpg";
import "./App.css"; 

const Home = () => {
  return (
  <div className="background-wrapper">
    <div className="container">
      {/* Hero Section */}
      <section className="hero">
        <h1>Discover the next Barça legend.</h1>
        <p>Welcome to Barça Scout</p>
        <Link to="/view-players" className="btn-primary">
          View Players
        </Link>
        <div className="hero-image">
          <img src={heroImage} alt="Camp Nou stadium" />
        </div>
      </section>

      
      <section className="features">
        <div className="feature">
          <span role="img" aria-label="data">📊</span>
          <h3>Data-driven scouting</h3>
        </div>
        <div className="feature">
          <span role="img" aria-label="compare">🆚</span>
          <h3>Player comparisons</h3>
        </div>
        <div className="feature">
          <span role="img" aria-label="barca style">⚽</span>
          <h3>Barça style fit analysis</h3>
        </div>
      </section>

      
      <section className="club-legends">
        <h2>Barça Legends</h2>
        <div className="legend-cards">
          {[
            { name: "Luis Suárez", img: "../src/images/suarez.jpg" },
            { name: "Neymar Jr.", img: "../src/images/neymar2.jpg" },
            { name: "Leo Messi", img: "../src/images/messi2.jpg" },
            { name: "Andrés Iniesta", img: "../src/images/iniesta.jpg" },
            { name: "Carles Puyol", img: "../src/images/puyol.jpg" },
            { name: "Sergi Roberto", img: "../src/images/roberto.jpg" },
            { name: "Johan Cruyff", img: "../src/images/cruyff.jpg" },
            { name: "Sergio Busquets", img: "../src/images/busquets2.jpg" },
            { name: "Gerard Piqué", img: "../src/images/pique.jpg" },
            { name: "Xavi Hernández", img: "../src/images/xavi2.jpg" },
            { name: "Ivan Rakitić", img: "../src/images/rakitic.jpg" },
            { name: "David Villa", img: "../src/images/villa.jpg" },
          ].map((legend, idx) => (
            <div key={idx} className="legend-card">
              <img src={legend.img} alt={legend.name} />
              <p>{legend.name}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="achievements">
        <h2 className="achievements-title">Club Achievements</h2>
        <div className="achievements-grid">
          
          <div className="achievement-row">
            <img src="../src/images/sextuple2.jpg" alt="Club world cup" />
            <h3>1</h3>
            <p>Sextuple</p>
          </div>

          <div className="achievement-row">
            <img src="../src/images/laliga.jpg" alt="La Liga Trophy" />
            <h3>27</h3>
            <p>La Liga Titles</p>
          </div>

          <div className="achievement-row">
            <img src="../src/images/cdr2.jpg" alt="Copa del rey" />
            <h3>31</h3>
            <p>Copa Del Rey</p>
          </div>

          <div className="achievement-row">
            <img src="../src/images/ucl2.jpg" alt="UCL" />
            <h3>5</h3>
            <p>UCL</p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default Home;
