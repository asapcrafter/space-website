import React from 'react';
import ReactDOM from 'react-dom';
import * as THREE from 'three';
import {Canvas} from '@react-three/fiber';
import circleImg from './assets/circle.png'

const App = () => {
  return (
      <div id="canvas-container">
        <Canvas />
      </div>
  );
}

export default App;

