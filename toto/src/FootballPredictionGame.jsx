import React, { useState } from 'react';

const FootballPredictionGame = () => {
  // Sample list of matches (you can replace it with your actual match data)
  const [matches] = useState([
    { id: 1, homeTeam: 'Team A', awayTeam: 'Team B' },
    { id: 2, homeTeam: 'Team C', awayTeam: 'Team D' },
    { id: 3, homeTeam: 'Team E', awayTeam: 'Team F' }
  ]);

  // State to store user's predictions
  const [predictions, setPredictions] = useState([]);

  // Function to handle prediction changes for a match
  const handlePredictionChange = (e, matchId) => {
    const newPredictions = { ...predictions };
    newPredictions[matchId] = e.target.value;
    setPredictions(newPredictions);
  };

  // Function to submit predictions
  const handleSubmitPredictions = () => {
    // Here you can process the user's predictions
    console.log('User predictions:', predictions);
  };

  return (
    <div>
      <h1>Football Prediction Game</h1>
      <form onSubmit={handleSubmitPredictions}>
        {matches.map(match => (
          <div key={match.id}>
            <p>{match.homeTeam} vs {match.awayTeam}</p>
            <select value={predictions[match.id] || ''} onChange={e => handlePredictionChange(e, match.id)}>
              <option value="">Select Prediction</option>
              <option value="1">Home Team Win</option>
              <option value="X">Draw</option>
              <option value="2">Away Team Win</option>
            </select>
          </div>
        ))}
        <button type="submit">Submit Predictions</button>
      </form>
    </div>
  );
};

export default FootballPredictionGame;

