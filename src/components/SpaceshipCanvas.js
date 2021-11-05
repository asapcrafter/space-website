import React from 'react';
import Spaceship from './Spaceship';
import { Canvas } from '@react-three/fiber';

const SpaceshipCanvas = () => {
    return (
        <div id='spaceship'>
            <Canvas >
                <Spaceship />
            </Canvas >
        </div>
    );
}

export default SpaceshipCanvas;
