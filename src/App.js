import randomColor from 'randomcolor';
import { useState } from 'react';

export default function App() {
  const [color, setColor] = useState('#00ccf0');

  return (
    <div
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        margin: 0,
      }}
    >
      <div
        style={{
          padding: 100,
        }}
      >
        <h1
          style={{
            textAlign: 'center',
          }}
        >
          Random Color Generator
        </h1>
      </div>
      <br />
      <div
        style={{
          backgroundColor: color,
          textAlign: 'center',
        }}
      >
        <h1>ColorHex: {color}</h1>
      </div>
      <div
        style={{
          textAlign: 'center',
        }}
      >
        <button
          style={{
            padding: 10,
            fontSize: 18,
          }}
          onClick={() => {
            const newHex = randomColor();
            setColor(newHex);
          }}
        >
          Generate New ColorHex
        </button>
      </div>
    </div>
  );
}
