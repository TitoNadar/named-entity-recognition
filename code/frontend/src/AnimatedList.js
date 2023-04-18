// import React from 'react';
// import {  animated } from 'react-spring';
// import './AnimatedList.css';

// const data = [
//   { entity: 'PER', text: 'Barack Obama' },
//   { entity: 'LOC', text: 'United States' },
//   { entity: 'PER', text: 'Michelle Obama' },
//   { entity: 'PER', text: 'Sasha' },
//   { entity: 'PER', text: 'Malia' },
// ];

// const Item = ({ item, index }) => {
//   return (
//     <>
//         <animated.div key={index} className="animated-item">
//           <div className="entity">{item.entity}</div>
//           <div className="text">{item.text}</div>
//         </animated.div>
//     </>
//   );
// };

// const AnimatedList = () => {
//   return (
//     <div className="animated-list">
//       {data.map((item, index) => (
//         <Item key={index} item={item} index={index} />
//       ))}
//     </div>
//   );
// };

// export default AnimatedList;
import React from 'react';
import { animated } from 'react-spring';
import './AnimatedList.css';

const data = [
  { entity: 'PER', text: 'Barack Obama' },
  { entity: 'LOC', text: 'United States' },
  { entity: 'PER', text: 'Michelle Obama' },
  { entity: 'PER', text: 'Sasha' },
  { entity: 'PER', text: 'Malia' },
];

const Item = ({ item, index }) => {
  if(item === null || item.entity === 'O') {
    return null;
  }
  return (
    <animated.tr key={index} className="animated-item">
      <td className="entity">{item.entity}</td>
      <td className="text">{item.text}</td>
    </animated.tr>
  );
};

const AnimatedList = ({inputEntity}) => {
  console.log("entitu ", typeof inputEntity);
  return (
    <div className="animated-list">
      <table>
        <thead>
          <tr>
            <th>Entity</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {inputEntity.map((item, index) => (
            <Item key={index} item={item} index={index} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AnimatedList;
