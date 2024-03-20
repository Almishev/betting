import React from 'react';

const Match = ({ home, away, homeImage, awayImage, prediction, coefficients, onPredictionChange }) => {
  return (
    <div className='border mb-3'>
      <div className="row mb-3">
        <div className="col mb-2">
          <label className="mr-2 form-label">
            <img src={homeImage} alt={home} className="team-image" />
            {home}
          </label>
        </div>
        <div className="col">
          <label className="mr-2 form-label">
            <img src={awayImage} alt={away} className="team-image" />
            {away}:
          </label>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <select
            className="form-select"
            value={prediction}
            onChange={onPredictionChange}
          >
            <option value="">Select Prediction</option>
            <option value="1">1 (Home Team Win) - {coefficients.home}</option>
            <option value="X">X (Draw) - {coefficients.draw}</option>
            <option value="2">2 (Away Team Win) - {coefficients.away}</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Match;
