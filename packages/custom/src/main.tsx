import Lottie from 'lottie-react';
import * as React from 'react';
import anime from '../assets/anime.json';
import { useHelloWorld } from './sayHello';

export interface MainProps {
  message: string;
}

export function Main({ message }: MainProps) {
  const helloWorld = useHelloWorld(message);
  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        display: 'grid',
        gridTemplateRows: '1fr 1fr',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: '"cell00 cell01" "cell10 cell11"',
      }}
    >
      <div
        style={{
          gridArea: 'cell00',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {helloWorld}
      </div>
      <div style={{ gridArea: 'cell01' }}>
        <Lottie animationData={anime} loop={true} />
      </div>
      <div style={{ gridArea: 'cell10' }}>{helloWorld}</div>
      <div style={{ gridArea: 'cell11' }}>{helloWorld}</div>
    </div>
  );
}
