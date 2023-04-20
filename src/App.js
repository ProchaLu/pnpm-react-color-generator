import './Styles.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState(randomColor());
  return (
    <div>
      <div>
        <h1>Random Color Generator</h1>
      </div>
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          alignItems: 'center',
          backgroundColor: color,
          borderRadius: 10,
          width: 800,
          height: 500,
          transition: 'background-color 0.5s ease in ease out',
        }}
      >
        Generated Color: {color}
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 10,
        }}
      >
        <button
          onClick={() => {
            setColor(randomColor());
          }}
        >
          Generate
        </button>
      </div>
    </div>
  );
}
