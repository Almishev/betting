import React, { useState, useEffect } from 'react';
import Match from './Match';
import Prediction from './Prediction';
import romaImage from './pictures/roma.png';
import torinoImage from './pictures/torino.png';
import lazioImage from './pictures/lazio.png';
import napoliImage from './pictures/Napoli.png';
import veronaImage from './pictures/verona.png';
import leccheImage from './pictures/lecce.png'

const LotteryGameX = () => {
  const [userPredictions, setUserPredictions] = useState(['', '', '']);
  const [winningPredictions, setWinningPredictions] = useState([]);
  const [message, setMessage] = useState('');
  const [showWinningPredictions, setShowWinningPredictions] = useState(false);
  const [displayedPredictions, setDisplayedPredictions] = useState([]);
  const [coefficients, setCoefficients] = useState([
    { home: 1.6, draw: 3.1, away: 4.1 },
    { home: 1.5, draw: 2.5, away: 3.5 },
    { home: 1.4, draw: 2.8, away: 3.8 }
  ]);
  const [betAmount, setBetAmount] = useState(0);
  const [possibleProfit, setPossibleProfit] = useState(0);

  useEffect(() => {
    generateWinningPredictions();
  }, []);

  const generateWinningPredictions = () => {
    const predictions = [];
    while (predictions.length < 3) {
      const randomNumber = Math.random();
      if (randomNumber < 0.70) {
        // 70% chance of home team win
        predictions.push('1');
      } else if (randomNumber < 0.85) {
        // 15% chance of draw
        predictions.push('X');
      } else {
        // 15% chance of away team win
        predictions.push('2');
      }
    }
    setWinningPredictions(predictions);
  };
  

  const calculateProfit = () => {
    let profit = 0;
    for (let i = 0; i < 3; i++) {
      const prediction = userPredictions[i];
      if (prediction === winningPredictions[i]) {
        switch (prediction) {
          case '1':
            profit += betAmount * coefficients[i].home;
            break;
          case 'X':
            profit += betAmount * coefficients[i].draw;
            break;
          case '2':
            profit += betAmount * coefficients[i].away;
            break;
          default:
            break;
        }
      }
    }
    return profit;
  };

  const calculatePossibleProfit = (betAmount, predictions) => {
    let profit = 0;
    for (let i = 0; i < 3; i++) {
      const prediction = predictions[i];
      if (prediction) {
        switch (prediction) {
          case '1':
            profit += betAmount * coefficients[i].home;
            break;
          case 'X':
            profit += betAmount * coefficients[i].draw;
            break;
          case '2':
            profit += betAmount * coefficients[i].away;
            break;
          default:
            break;
        }
      }
    }
    return profit;
  };

  const checkWinningPredictions = () => {
    const correctPredictions = userPredictions.filter((prediction, index) => prediction === winningPredictions[index]);
    if (correctPredictions.length === 3) {
      const profit = calculateProfit();
      setTimeout(() => {
        setMessage(`Congratulations! You won the lottery and your profit is ${profit.toFixed(2)} BGN`);
      }, 4000);
    } else {
      setTimeout(() => {
        setMessage('Sorry, you did not win. Try again!');
      }, 4000);
    }
    setShowWinningPredictions(true);
  };

  const handlePredictionChange = (e, index) => {
    const newPredictions = [...userPredictions];
    newPredictions[index] = e.target.value;
    setUserPredictions(newPredictions);
    setPossibleProfit(calculatePossibleProfit(betAmount, newPredictions));
  };

  const handleBetAmountChange = (e) => {
    const newBetAmount = parseFloat(e.target.value);
    setBetAmount(newBetAmount);
    setPossibleProfit(calculatePossibleProfit(newBetAmount, userPredictions));
  };

  const handleStartGame = () => {
    setUserPredictions(['', '', '']);
    setWinningPredictions([]);
    setMessage('');
    setShowWinningPredictions(false);
    setDisplayedPredictions([]);
    setBetAmount(0); // Reset bet amount
    setPossibleProfit(0);
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
    <div className="container mt-1">
      <h1 className="text-center mb-4">Seria A lottery</h1>
      <div className="row">
        <div className="col-md-6">
          {[
            { home: 'Roma', away: 'Torino', homeImage: romaImage, awayImage: torinoImage },
            { home: 'Lazio', away: 'Lecce', homeImage: lazioImage, awayImage: leccheImage },
            { home: 'Napoli', away: 'Verona', homeImage: napoliImage, awayImage: veronaImage },
           
          ].map((match, index) => (
            <Match
              key={index}
              home={match.home}
              away={match.away}
              homeImage={match.homeImage}
              awayImage={match.awayImage}
              prediction={userPredictions[index]}
              coefficients={coefficients[index]}
              onPredictionChange={(e) => handlePredictionChange(e, index)}
            />
          ))}
        </div>

        <Prediction
          betAmount={betAmount}
          possibleProfit={possibleProfit}
          onBetAmountChange={handleBetAmountChange}
          onCheckPredictions={checkWinningPredictions}
          onStartNewGame={handleStartGame}
        />
      </div>
      <div className="text-center mb-5">
        {showWinningPredictions && (
          <p className="text-center h4">Football results: <span className='text-success h3'>{displayedPredictions.join(', ')}</span></p>
        )}
        <p className={`text-center h4 ${message.includes('Congratulations') ? 'text-success' : 'text-danger'}`}>{message}</p>
      </div>
    </div>
  );
};

export default LotteryGameX;
