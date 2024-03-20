import React from 'react';

const Prediction = ({ betAmount, possibleProfit, onBetAmountChange, onCheckPredictions, onStartNewGame }) => {
  return (
    <div className="col-md-6 d-flex align-items-center justify-content-center">
      <div>
        <div className="mb-3 d-flex justify-content-center align-items-center">
          <label className="form-label mr-2 text-warning">Enter Bet Amount:</label>
          <input type="number" className="form-control form-control-sm" value={betAmount} onChange={onBetAmountChange} />
        </div>
        <p className="text-center h4 bg-info">Possible Profit: {possibleProfit.toFixed(2)} BGN</p>
        <button className="btn btn-primary mx-2" onClick={onCheckPredictions}>Check Predictions</button>
        <button className="btn btn-secondary mx-2" onClick={onStartNewGame}>Start New Game</button>
      </div>
    </div>
  );
};

export default Prediction;
