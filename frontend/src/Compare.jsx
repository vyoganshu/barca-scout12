import React, { useState } from 'react';
import imp_features from './images/imp_features.png';

import pedvfraBar from './images/pedri v frattesi bar.png';
import pedvfraScatter from './images/pedri v frattesi scatter.png';

import lewaTammyBar from './images/lewa v tammy bar.png';
import lewaTammyScatter from './images/lewa v tammy scatter.png';

import jongvbelliBar from './images/jong v jude bar.png';
import jongvbelliScatter from './images/jong v jude scatter.png';

import harryvraphinhaBar from './images/harry v raph bar.png';
import harryvraphinhaScatter from './images/harry v raph scatter.png';

import mbappevyamalBar from './images/mbappe v yamal bar.png';
import mbappevyamalScatter from './images/mbappe v yamal scatter.png';

import yamal from './images/yamalImg.jpg';
import mbappe from './images/mbappeImg.jpg';

import lewa from './images/lewaImg.jpg';
import tammy from './images/tammyImg.jpg';

import pedri from './images/pedriImg.jpg';
import frattesi from './images/frattesiImg.jpg';

import jong from './images/jongImg.jpg';
import bellingham from './images/judeImg.jpg';

import kane from './images/kaneImg.jpg';
import raph from './images/raphImg.jpg';


import Navbar from "./Navbar";

const imageMap = {
  imp: {
    cover: imp_features,
  },
  pedvfra: {
    bar: pedvfraBar,
    scatter: pedvfraScatter
  },
  lewvabraham: {
    bar: lewaTammyBar,
    scatter: lewaTammyScatter
  },
  jongvbelli: {
    bar: jongvbelliBar,
    scatter: jongvbelliScatter
  },
  harryvraphinha: {
    bar: harryvraphinhaBar,
    scatter: harryvraphinhaScatter
  },
  mbappevyamal: {
    bar: mbappevyamalBar,
    scatter: mbappevyamalScatter
  }
  

};

const playerInfo = {
  pedvfra: [
    {
      name: "Pedri",
      team: "FC Barcelona",
      position: "Central Midfielder",
      color: "#EA580C",
      bg: "#FED7AA",
      initial: "P",
      image: pedri
    },
    {
      name: "Davide Frattesi",
      team: "Inter Milan",
      position: "Central Midfielder",
      color: "#2563EB",
      bg: "#DBEAFE",
      initial: "F",
      image: frattesi
    }
  ],
  lewvabraham: [
  {
    name: "Robert Lewandowski",
    team: "FC Barcelona",
    position: "Striker",
    color: "#DC2626",
    bg: "#FECACA",
    initial: "L",
    image: lewa
  },
  {
    name: "Tammy Abraham",
    team: "AS Roma",
    position: "Striker",
    color: "#7C3AED",
    bg: "#DDD6FE",
    initial: "T",
    image: tammy
  }
],
jongvbelli: [
  {
    name: "Frenkie de Jong",
    team: "FC Barcelona",
    position: "Central Midfielder",
    color: "#2563EB",
    bg: "#DBEAFE",
    initial: "F",
    image: jong
  },
  {
    name: "Jude Bellingham",
    team: "Real Madrid",
    position: "Attacking Midfielder",
    color: "#16A34A",
    bg: "#DCFCE7",
    initial: "B",
    image: bellingham
  }
],
harryvraphinha: [
  {
    name: "Harry Kane",
    team: "Bayern Munich",
    position: "Striker",
    color: "#F59E0B",
    bg: "#FEF3C7",
    initial: "K",
    image: kane 
  },
  {
    name: "Raphinha",
    team: "FC Barcelona",
    position: "Winger",
    color: "#F472B6",
    bg: "#F7D2E4",
    initial: "R",
    image: raph 
  }
],
mbappevyamal: [
  {
    name: "Kylian Mbappé",
    team: "Real Madrid",
    position: "Forward",
    color: "#2563EB",
    bg: "#DBEAFE",
    initial: "M",
    image: mbappe
  },
  {
    name: "Lamine Yamal",
    team: "FC Barcelona",
    position: "Winger",
    color: "#FBBF24",
    bg: "#FEF3C7",
    initial: "Y",
    image: yamal
  }
]
};

const comparisonLabels = {
  imp: "important features",
  pedvfra: "Pedri v Frattesi",
  lewvabraham: "Lewandowski v Tammy",
  jongvbelli: "De Jong v Bellingham",
  harryvraphinha: "Harry Kane v Raphinha",
  mbappevyamal: "Mbappé v Yamal"
};

const plotTypes = [
  { key: 'bar', label: 'Per 90 Stats' },
  { key: 'scatter', label: 'Scatter Analysis' }
];

function Compare() {
  const [currentComparison, setCurrentComparison] = useState('imp');
  const [currentPlot, setCurrentPlot] = useState('bar');

  const currentImages = imageMap[currentComparison];
  const players = playerInfo[currentComparison];

  return (
    <>
      <Navbar />
      <div className="background-wrapper">
        <div className="container">

          {/* Header */}
          <div className="hero">
            <h1>Statistical comparison and performance insights</h1>
          </div>

          {/* Comparison Selector */}
          <div className="tabContainer">
            <div className="tabGroup">
              {Object.keys(imageMap).map((key) => (
                <button
                  key={key}
                  onClick={() => setCurrentComparison(key)}
                  className={`tabButton ${currentComparison === key ? 'activeTab' : 'inactiveTab'}`}
                >
                  {comparisonLabels[key] || key}
                </button>
              ))}
            </div>
          </div>

          {/* Plot Type Selector */}
          {currentComparison !== 'imp' && (
            <div className="tabContainer">
              <div className="tabGroup">
                {plotTypes.map(({ key, label }) => (
                  <button
                    key={key}
                    onClick={() => setCurrentPlot(key)}
                    className={`tabButton ${currentPlot === key ? 'activeTab' : 'inactiveTab'}`}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chart Display */}
          <div className="chartContainer">
            <div className="chartCard">
              <img
                src={currentComparison === 'imp' ? currentImages.cover : currentImages[currentPlot]}
                className="chartImage"
              />
            </div>
          </div>

          {/* Player Info Cards */}
          {players && (
            <div className="playerGrid">
              {players.map((player, index) => (
                <div key={index} className="playerCard">
                  <div className="playerIcon" style={{ backgroundColor: player.bg }}>
                    {player.image ? (
                      <img 
                        src={player.image} 
                        alt={player.name}
                        style={{
                          width: '100%',
                          height: '100%',
                          borderRadius: '50%',
                          objectFit: 'cover'
                        }}
                      />
                    ) : (
                      <span className="playerInitial" style={{ color: player.color }}>{player.initial}</span>
                    )}
                  </div>
                  <h3 className="playerName">{player.name}</h3>
                  <p className="playerTeam">{player.team}</p>
                  <p className="playerPosition">{player.position}</p>
                </div>
              ))}
            </div>
          )}

          {/* Chart Type Info */}
          {currentComparison !== 'imp' && (
            <div className="infoContainer">
              <div className="infoCard">
                <h3 className="infoTitle">Chart Types</h3>
                <div className="infoGrid">
                  <div className="infoItem" style={{ backgroundColor: '#EFF6FF' }}>
                    <div className="infoLabel" style={{ color: '#2563EB' }}>Bar</div>
                    <div className="infoDesc">Per 90 minute stats</div>
                  </div>
                  <div className="infoItem" style={{ backgroundColor: '#F0FDF4' }}>
                    <div className="infoLabel" style={{ color: '#16A34A' }}>Scatter</div>
                    <div className="infoDesc">Performance correlation</div>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>
      </div>
    </>
  );
}

export default Compare;