import React, { useState, useEffect } from 'react';
import romaImage from './pictures/roma.png';
import milanImage from './pictures/milan.png';
import lazioImage from './pictures/lazio.png';
import atalantaImage from './pictures/Atalanta.png';
import napoliImage from './pictures/Napoli.png';
import veronaImage from './pictures/verona.png';

const LotteryGame = () => {
  const [userPredictions, setUserPredictions] = useState(['', '', '']);
  const [winningPredictions, setWinningPredictions] = useState([]);
  const [message, setMessage] = useState('');
  const [showWinningPredictions, setShowWinningPredictions] = useState(false);
  const [displayedPredictions, setDisplayedPredictions] = useState([]);

  useEffect(() => {
    generateWinningPredictions();
  }, []);

  const generateWinningPredictions = () => {
    const predictions = [];
    while (predictions.length < 3) {
      const randomPrediction = Math.floor(Math.random() * 3);
      predictions.push(randomPrediction === 0 ? '1' : (randomPrediction === 1 ? 'X' : '2'));
    }
    setWinningPredictions(predictions);
  };

  const checkWinningPredictions = () => {
    const correctPredictions = userPredictions.filter((prediction, index) => prediction === winningPredictions[index]);
    if (correctPredictions.length === 3) {
      setTimeout(() => {
        setMessage('Congratulations! You won the lottery!');
      }, 5000);
    } else {
      setTimeout(() => {
        setMessage('Sorry, you did not win. Try again!');
      }, 7000);
    }
    setShowWinningPredictions(true);
  };

  const handlePredictionChange = (e, index) => {
    const newPredictions = [...userPredictions];
    newPredictions[index] = e.target.value;
    setUserPredictions(newPredictions);
  };

  const handleStartGame = () => {
    setUserPredictions(['', '', '']);
    setWinningPredictions([]);
    setMessage('');
    setShowWinningPredictions(false);
    setDisplayedPredictions([]);
    generateWinningPredictions();
  };

  useEffect(() => {
    if (showWinningPredictions) {
      const timer = setTimeout(() => {
        if (displayedPredictions.length < winningPredictions.length) {
          setDisplayedPredictions(prevPredictions => [...prevPredictions, winningPredictions[displayedPredictions.length]]);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [showWinningPredictions, displayedPredictions, winningPredictions]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Football Prediction Lottery</h1>
      <div className="row mb-3">
        {[
          { home: 'Roma', away: 'Minal', homeImage: romaImage, awayImage: milanImage },
          { home: 'Lazio', away: 'Atalanta', homeImage: lazioImage, awayImage: atalantaImage },
          { home: 'Napoli', away: 'Verona', homeImage: napoliImage, awayImage: veronaImage }
        ].map((match, index) => (
          <div key={index} className="col">
            <label className="mr-2 form-label">
              <img src={match.homeImage} alt={match.home} className="team-image" />
              {match.home}
            </label>
            <label className="mr-2 form-label">
              <img src={match.awayImage} alt={match.away} className="team-image" />
              {match.away}:
            </label><br />
            <select
              className="form-select"
              value={userPredictions[index]}
              onChange={(e) => handlePredictionChange(e, index)}
            >
              <option value="">Select Prediction</option>
              <option value="1">1 (Home Team Win)</option>
              <option value="X">X (Draw)</option>
              <option value="2">2 (Away Team Win)</option>
            </select>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-primary mx-2" onClick={checkWinningPredictions}>Check Predictions</button>
        <button className="btn btn-secondary mx-2" onClick={handleStartGame}>Start New Game</button>
      </div>
      <div className="mt-4">
        {showWinningPredictions && (
          <p className="text-center h4">Winning Predictions: <span className='text-success h3'>{displayedPredictions.join(', ')}</span></p>
        )}
        <p className={`text-center h4 ${message.includes('Congratulations') ? 'text-success' : 'text-danger'}`}>{message}</p>
      </div>
    </div>
  );
};

export default LotteryGame;
