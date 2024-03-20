import React, { useState, useEffect } from 'react';
import romaImage from './pictures/roma.png';
import torinoImage from './pictures/torino.png';
import lazioImage from './pictures/lazio.png';
import napoliImage from './pictures/Napoli.png';
import veronaImage from './pictures/verona.png';
import leccheImage from './pictures/lecce.png';
import atalantaImage from './pictures/Atalanta.png';
import salernitana from './pictures/salernitana.png';
import fiorentinaImage from './pictures/fiorentina.png';
import monzaImage from './pictures/monza.png';
import sampImage from './pictures/samp.png';
import chievoImage from './pictures/chievo.png';
import interImage from './pictures/inter.png';
import milanImage from './pictures/milan.png';
import juventusImage from './pictures/juventus.png';
import sassImage from './pictures/sassouolo.png';
import genoaImage from './pictures/genoa.png';
import frosinoneImagine from './pictures/frisione.png';
import bolonqImage from './pictures/bolonq.png';
import udineseImagine from './pictures/udinese.png';

function MatchPrediction() {
  const teamImageStyle = {
    height: '50px',
    marginRight: '10px'
  };

  const selectStyle = {
    width: '130px'
  };

  const [selectedPredictions, setSelectedPredictions] = useState({
    match1: '',
    match2: '',
    match3: '',
    match4: '',
    match5: '',
    match6: '',
    match7: '',
    match8: '',
    match9: '',
    match10: ''
  });

  const [randomResults, setRandomResults] = useState({
    match1: '',
    match2: '',
    match3: '',
    match4: '',
    match5: '',
    match6: '',
    match7: '',
    match8: '',
    match9: '',
    match10: ''
  });

  const [matchedPredictions, setMatchedPredictions] = useState(0);
  const [showTable, setShowTable] = useState(false);
  const [bettingAmount, setBettingAmount] = useState(0); // Moved outside the functions

  useEffect(() => {
    const newRandomResults = {
      match1: getRandomResult(),
      match2: getRandomResult(),
      match3: getRandomResult(),
      match4: getRandomResult(),
      match5: getRandomResult(),
      match6: getRandomResult(),
      match7: getRandomResult(),
      match8: getRandomResult(),
      match9: getRandomResult(),
      match10: getRandomResult()
    };
    setRandomResults(newRandomResults);
  }, []);

  function getRandomResult() {
    const randomNumber = Math.random();

    if (randomNumber < 0.65) {
      return '1';
    } else if (randomNumber < 0.85) {
      return 'X';
    } else {
      return '2';
    }
  }

  function handlePredictionSelect(event) {
    const { id, value } = event.target;
    setSelectedPredictions({ ...selectedPredictions, [id]: value });
  }

  function checkPredictions() {
    const updatedRandomResults = {
      match1: getRandomResult(),
      match2: getRandomResult(),
      match3: getRandomResult(),
      match4: getRandomResult(),
      match5: getRandomResult(),
      match6: getRandomResult(),
      match7: getRandomResult(),
      match8: getRandomResult(),
      match9: getRandomResult(),
      match10: getRandomResult()
    };

    setRandomResults(updatedRandomResults);
    setShowTable(true);


    let count = 0;
    for (const match in selectedPredictions) {
      if (selectedPredictions[match] === updatedRandomResults[match]) {
        count++;
      }
    }
    setMatchedPredictions(count);
  }

  function startNewGame() {
    setSelectedPredictions({
      match1: '',
      match2: '',
      match3: '',
      match4: '',
      match5: '',
      match6: '',
      match7: '',
      match8: '',
      match9: '',
      match10: ''
    });
    setMatchedPredictions(0);
    setShowTable(false);
    setBettingAmount(0);
  }

  function handleBettingAmountChange(event) {
    setBettingAmount(Number(event.target.value));
  }
  function calculateProfit(matchedPredictions, bettingAmount) {
    let profitMultiplier = 1;
    
    switch (matchedPredictions) {

      
      case 7:
        profitMultiplier = 2;
        break;
      case 8:
        profitMultiplier = 3;
        break;
      case 9:
        profitMultiplier = 4;
        break;
      case 10:
        profitMultiplier = 5;
        break;
      default:
        profitMultiplier = 0;
    }
    
    return bettingAmount * profitMultiplier;
  }
  const profit = calculateProfit(matchedPredictions, bettingAmount);  
  
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 bg-danger text-light">Make Prediction</h2>
      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="border p-3">
            <label className="form-label" htmlFor="match1">Roma  <img src={romaImage}  style={teamImageStyle}  /> vs <img src={salernitana}  style={teamImageStyle}  /> Salernitana </label>
            <select className="form-select form-select-sm" id="match1" style={selectStyle} value={selectedPredictions.match1} onChange={handlePredictionSelect}>
              <option value="">Prediction</option>
              <option value="1">1</option>
              <option value="X">X</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="border p-3">
            <label className="form-label" htmlFor="match2">Fiorentina <img src={fiorentinaImage} style={teamImageStyle}  /> vs <img src={monzaImage} style={teamImageStyle}  /> Monza</label>
            <select className="form-select form-select-sm" id="match2" style={selectStyle} value={selectedPredictions.match2} onChange={handlePredictionSelect}>
              <option value="">Prediction</option>
              <option value="1">1</option>
              <option value="X">X</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div className="border p-3">
            <label className="form-label" htmlFor="match3">Atalanta <img src={atalantaImage}  style={teamImageStyle}  /> vs <img src={sampImage}  style={teamImageStyle}  /> Sampdoria</label>
            <select className="form-select form-select-sm" id="match3" style={selectStyle} value={selectedPredictions.match3} onChange={handlePredictionSelect} >
              <option value="">Prediction</option>
              <option value="1">1</option>
              <option value="X">X</option>
              <option value="2">2</option>
            </select>
          </div>
        </div>
        <div className="col-md-6 mb-3">
          <div

className="border p-3">
<label className="form-label" htmlFor="match4">Inter <img src={interImage}  style={teamImageStyle}  /> vs <img src={torinoImage}  style={teamImageStyle}  /> Torino</label>
<select className="form-select form-select-sm" id="match4" style={selectStyle} value={selectedPredictions.match4} onChange={handlePredictionSelect}>
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>
<div className="col-md-6 mb-3">
<div className="border p-3">
<label className="form-label" htmlFor="match5">Milan <img src={milanImage}  style={teamImageStyle}  /> vs <img src={chievoImage}  style={teamImageStyle} /> Chievo</label>
<select className="form-select form-select-sm" id="match5" style={selectStyle} value={selectedPredictions.match5} onChange={handlePredictionSelect}>
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>
<div className="col-md-6 mb-3">
<div className="border p-3">
<label className="form-label" htmlFor="match6">Juventus <img src={juventusImage}  style={teamImageStyle}  /> vs <img src={leccheImage}  style={teamImageStyle}  /> Lecce</label>
<select className="form-select form-select-sm" id="match6" style={selectStyle} value={selectedPredictions.match6} onChange={handlePredictionSelect}>
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>
<div className="col-md-6 mb-3">
<div className="border p-3">
<label className="form-label" htmlFor="match7">Lazio <img src={lazioImage}  style={teamImageStyle}  /> vs <img src={veronaImage}  style={teamImageStyle}  /> Verona</label>
<select className="form-select form-select-sm" id="match7" style={selectStyle} value={selectedPredictions.match7} onChange={handlePredictionSelect}>
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>
<div className="col-md-6 mb-3">
<div className="border p-3">
<label className="form-label" htmlFor="match8">Napoli <img src={napoliImage} style={teamImageStyle} /> vs <img src={sassImage}  style={teamImageStyle}  /> Sassuolo</label>
<select className="form-select form-select-sm" id="match8" style={selectStyle} value={selectedPredictions.match8} onChange={handlePredictionSelect}>
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>
<div className="col-md-6 mb-3">
<div className="border p-3">
<label className="form-label" htmlFor="match9">Genoa <img src={genoaImage} style={teamImageStyle} /> vs  <img src={frosinoneImagine}  style={teamImageStyle}  /> Frosinone</label>
<select className="form-select form-select-sm" id="match9" style={selectStyle} value={selectedPredictions.match9} onChange={handlePredictionSelect}>
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>
<div className="col-md-6 mb-3">
<div className="border p-3">
<label className="form-label" htmlFor="match10">Bologna <img src={bolonqImage} style={teamImageStyle} /> vs  <img src={udineseImagine}  style={teamImageStyle}  /> Udinese</label>
<select className="form-select form-select-sm" id="match10" style={selectStyle} value={selectedPredictions.match10} onChange={handlePredictionSelect} >
  <option value="">Prediction</option>
  <option value="1">1</option>
  <option value="X">X</option>
  <option value="2">2</option>
</select>
</div>
</div>

</div>
<div className="mb-3 col-3 mx-auto d-flex justify-content-center text-center">
  <label htmlFor="bettingAmount" className="form-label h4 text-success">Betting: </label>
  <input
    type="number"
    id="bettingAmount"
    className="form-control"
    value={bettingAmount}
    onChange={handleBettingAmountChange}
  />
</div>


<div className="d-flex justify-content-center mb-4">

<button className='btn btn-primary mx-1' onClick={checkPredictions}>Check predictions</button> 
<button className='btn btn-secondary mx-1' onClick={startNewGame}>New game</button>
</div>
{showTable && (
<div className="text-center">
<p className='h4'>  <span className='text-warning'>Number of matched predictions: {matchedPredictions}</span></p>
<p className='h4'>  
        <span className='text-success'>Profit: {profit}</span>
      </p>
<table className="table table-bordered table-striped">
<thead className="table-dark">
  <tr>
    <th>Match</th>
    <th>Result</th>
  </tr>
</thead>
<tbody>
  {Object.keys(randomResults).map((match, index) => (
    <tr key={index}>
      <td>{match}</td>
      <td>{randomResults[match]}</td>
    </tr>
  ))}
</tbody>
</table>
</div>
)}
</div>
);
}

export default MatchPrediction;
