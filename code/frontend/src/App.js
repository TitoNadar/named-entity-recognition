import React, { useState } from 'react';
import { animated, useSpring } from 'react-spring';

import AnimatedList from './AnimatedList';
import './App.css';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [algorithm, setAlgorithm] = useState('BERT + CRF');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if(algorithm === 'BERT + CRF') {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "text": inputText
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5000/bert_crf ", requestOptions)
        .then(response => response.text())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));
    }
    else if(algorithm === 'BiLSTM + CRF') {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "text": inputText
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/bilstm_crf", requestOptions)
  .then(response => response.text())
  .then(result => setResult(result))
  .catch(error => console.log('error', error));
    }
    else if(algorithm === 'Flair') {
      var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "text": inputText
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("http://localhost:5000/flair", requestOptions)
  .then(response => response.text())
  .then(result => setResult(result))
  .catch(error => console.log('error', error));
    }
    else {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      
      var raw = JSON.stringify({
        "text": inputText
      });
      
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };
      
      fetch("http://localhost:5000/ace", requestOptions)
        .then(response => response.text())
        .then(result => setResult(result))
        .catch(error => console.log('error', error));
    }

    // Call API with inputText and algorithm
    // const response = await fetch(apiUrl);
    // const resultData = await response.json();

    // const resultData = {};
    // resultData.result = [
    //   {
    //     "entity": "PER",
    //     "text": "Barack Obama"
    //   },
    //   {
    //     "entity": "LOC",
    //     "text": "United  States"
    //   },
    //   {
    //     "entity": "PER",
    //     "text": "Michelle Obama"
    //   },
    //   {
    //     "entity": "PER",
    //     "text": "Sasha"
    //   },
    //   {
    //     "entity": "PER",
    //     "text": "Malia"
    //   }
    // ]

    // setResult(resultData.result);
    setLoading(false);
  };

  const inputBoxAnimation = useSpring({
    from: { transform: 'translateX(-50%)', opacity: 0 },
    to: { transform: 'translateX(0)', opacity: 1 },
    delay: 500,
    config: { duration: 500 },
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 1000,
    config: { duration: 500 },
  });

  const resultAnimation = useSpring({
    from: { transform: 'translateY(-50%)', opacity: 0 },
    to: { transform: 'translateY(0)', opacity: 1 },
    delay: 1500,
    config: { duration: 500 },
  });

  return (
    <div className="container">
      <animated.form onSubmit={handleSubmit} className="element1" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F8F8F8', padding: '40px', boxShadow: '0px 3px 15px rgba(0,0,0,0.2)', ...inputBoxAnimation }}>
        <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '20px' }}>Named Entity Recognition</h1>
        <label htmlFor="inputText" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
          Input Text
          <textarea id="inputText" name="inputText" rows="6" style={{ padding: '10px', width: '100%', borderRadius: '10px', border: 'none', marginTop: '10px', fontSize: '20px', resize: 'none', outline: 'none',height:'430px' }} value={inputText} onChange={(e) => setInputText(e.target.value)} required />
        </label>
        <label htmlFor="algorithm" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
          Algorithm
          <select id="algorithm" name="algorithm" style={{ padding: '10px', width: '100%', borderRadius: '10px', border: 'none', marginTop: '10px', fontSize: '20px', outline: 'none' }} value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
            {['BERT + CRF', 'BiLSTM + CRF', 'Flair', 'ACE'].map((algorithmOption) => (
              <option key={algorithmOption} value={algorithmOption}>
                {algorithmOption}
              </option>
            ))}
          </select>
        </label>
        <animated.button type="submit" style={{ padding: '10px 30px', backgroundColor: '#4CAF50', color: 'white', fontSize: '24px', fontWeight: 'bold', borderRadius: '30px', border: 'none', marginTop: '20px', cursor: 'pointer', ...buttonAnimation }}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </animated.button>
      </animated.form>
      {result && (
        <AnimatedList className="element2"
        inputEntity={JSON.parse(result)}
        />
      )}

        
    </div>
  );
};

export default App;
