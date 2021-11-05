import React from 'react';
import * as THREE from 'three';
import { useThree, useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';
import {MTLLoader} from 'three/examples/jsm/loaders/MTLLoader.js';
import spacevox from '../assets/spacevox.obj';

const Spaceship = () => {
    const {scene} = useThree();

    const obj = useLoader(OBJLoader, spacevox)
    const mtl = useLoader(MTLLoader, '../assets/spacevox.mtl')

    const ambientLight = new THREE.AmbientLight(0x213371, 0.00005)
	scene.add(ambientLight)

    return (
        <primitive object={obj} material={mtl} />
    );
}

export default Spaceship;
