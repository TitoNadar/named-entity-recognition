import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// import React, { useState } from 'react';
// import { useSpring, animated } from 'react-spring';

// import './App.css';

// const App = () => {
//   const [inputText, setInputText] = useState('');
//   const [algorithm, setAlgorithm] = useState('algorithm1');
//   const [result, setResult] = useState('');
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setLoading(true);

//     // Call API with inputText and algorithm
//     const apiUrl = `https://my-api-url.com?inputText=${inputText}&algorithm=${algorithm}`;
//     const response = await fetch(apiUrl);
//     const resultData = await response.json();

//     setResult(resultData.result);
//     setLoading(false);
//   };

//   const inputBoxAnimation = useSpring({
//     from: { transform: 'translateX(-50%)', opacity: 0 },
//     to: { transform: 'translateX(0)', opacity: 1 },
//     delay: 500,
//     config: { duration: 500 },
//   });

//   const buttonAnimation = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: 1 },
//     delay: 1000,
//     config: { duration: 500 },
//   });

//   const resultAnimation = useSpring({
//     from: { transform: 'translateY(-50%)', opacity: 0 },
//     to: { transform: 'translateY(0)', opacity: 1 },
//     delay: 1500,
//     config: { duration: 500 },
//   });

//   return (
//     <div className="container">
//       <animated.form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F8F8F8', padding: '40px', boxShadow: '0px 3px 15px rgba(0,0,0,0.2)', ...inputBoxAnimation }}>
//         <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '20px' }}>Named Entity Recognition</h1>
//         <label htmlFor="inputText" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
//           Input Text
//           <textarea id="inputText" name="inputText" rows="6" style={{ padding: '10px', width: '100%', borderRadius: '10px', border: 'none', marginTop: '10px', fontSize: '20px', resize: 'none', outline: 'none' }} value={inputText} onChange={(e) => setInputText(e.target.value)} required />
//         </label>
//         <label htmlFor="algorithm" style={{ fontSize: '24px', fontWeight: 'bold', color: 'black', marginBottom: '20px' }}>
//           Algorithm
//           <select id="algorithm" name="algorithm" style={{ padding: '10px', width: '100%', borderRadius: '10px', border: 'none', marginTop: '10px', fontSize: '20px', outline: 'none' }} value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
//             {['algorithm1', 'algorithm2', 'algorithm3', 'algorithm4'].map((algorithmOption) => (
//               <option key={algorithmOption} value={algorithmOption}>
//                 {algorithmOption}
//               </option>
//             ))}
//           </select>
//         </label>
//         <animated.button type="submit" style={{ padding: '10px 30px', backgroundColor: '#4CAF50', color: 'white', fontSize: '24px', fontWeight: 'bold', borderRadius: '30px', border: 'none', marginTop: '20px', cursor: 'pointer', ...buttonAnimation }}
//           disabled={loading}
//         >
//           {loading ? 'Loading...' : 'Submit'}
//         </animated.button>
//       </animated.form>
//       {result && (
//         <animated.div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', borderRadius: '10px', backgroundColor: '#F8F8F8', padding: '40px', boxShadow: '0px 3px 15px rgba(0,0,0,0.2)', marginTop: '40px', ...resultAnimation }}>
//           <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#4CAF50', marginBottom: '20px' }}>Result</h2>
//           <p style={{ fontSize: '24px', color: 'black', whiteSpace: 'pre-wrap' }}>{result}</p>
//         </animated.div>
//       )}
//     </div>
//   );
// };

// export default App;
