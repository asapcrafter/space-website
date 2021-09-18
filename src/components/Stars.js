import React, {useMemo, useRef} from 'react';
import circleImage from '../assets/circle.png';
import {Canvas, extend, useFrame, useLoader, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Twinkle from './Twinkle.js'
import Nebula from './Nebula.js';

extend({OrbitControls});

// Renders non-animated star objects in the scene
const Points = () => {
    const imgTexture = useLoader(THREE.TextureLoader, circleImage);
	const count = 1500
    
	const positions = useMemo(() => {
        let positions = []
        
        // Position values are randomized 
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 200 - 150;
            const y = Math.random() * 320 - 160;
            const z = Math.random() * 500 - 250;
            positions.push(x, y, z)
        }
		return new Float32Array(positions);
	}, [count]);
        
        return (
            <points>
			<bufferGeometry attach='geometry'>
				<bufferAttribute 
					attachObject={['attributes', 'position']}
					array={positions}
					count={positions.length / 3}
					itemSize={3}
				/>
			</bufferGeometry>
			<pointsMaterial
				attach='material'
				map={imgTexture}
				color={0xFFFFFF}
				size={0.6}
				transparent={false}
				alphaTest={0.5}
				opacity={1.0}
			/>
		</points>
    );
}

const ScrollCamera = () => {
    const {camera} = useThree()
    
    let speed = 0
    let position = 0
    let initialPosition = 0
    let finalPosition 
    let deltaPosition
    
    window.addEventListener('scroll', (e) => {
        const scrollDistance = document.body.getBoundingClientRect().top;

        finalPosition = scrollDistance

        // Returns how many pixels were scrolled
        deltaPosition = (finalPosition - initialPosition)

        // Speed is used for 'inertia' effect when scrolling
        speed += (deltaPosition * 0.0005)
        
        if (initialPosition !== finalPosition) {
            initialPosition = scrollDistance
        }
    })

    const raf = () => {
        position += speed
        speed *= 0.954321
        camera.position.y = position
        window.requestAnimationFrame(raf)
    }
    
    raf();

    return null;
}

const MouseCamera = () => {
    const {camera} = useThree()

    document.addEventListener('mousemove', (e) => {
        const centerX = window.innerWidth * 0.5;
        const centerY = window.innerHeight * 0.5;

        // Controls side-to-side movement
        camera.position.z = (e.clientX - centerX) * 0.003 

        // Controls inward-outward movement
        camera.position.x = (e.clientY - centerY) * 0.005 + 90
    })

    return null;
}

// Adds a dark blue-black background color
const SkyBox = () => {
    const {scene} = useThree();
    scene.background = new THREE.Color('#0c0f18')
    
    return null;
}

const Stars = () => {
    return (
      <Canvas
          colorManagement={true}
          camera={{position: [100, 10, 0], fov: 75}}
      >
          <Nebula />
          <Points />
          <SkyBox />
          <Twinkle />
          <Twinkle />
          <Twinkle />
          <ScrollCamera />
          <MouseCamera />
      </Canvas>
    )
  }

export default Stars;
