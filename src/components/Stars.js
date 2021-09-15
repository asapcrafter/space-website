import React, {Suspense, useMemo} from 'react';
import circleImage from '../assets/circle.png';
import {Canvas, useLoader} from '@react-three/fiber';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'

const Points = () => {
    const imgTexture = useLoader(THREE.TextureLoader, circleImage);
	const count = 3000

	const positions = useMemo(() => {
		let positions = []
        // Position values are randomized from -100 to 100
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 200 - 100 ;
            const y = Math.random() * 300 - 150;
            const z = Math.random() * 600 - 300;
            positions.push(x, y, z)
        }
		return new Float32Array(positions);
	}, [count])

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
				size={0.5}
				transparent={false}
				alphaTest={0.5}
				opacity={1.0}
			/>
		</points>
    );
}

const Stars = () => {
    return (
      <Canvas
          colorManagement={false}
          camera={{position: [100, 10, 0], fov: 75}}
      >
          <Points />
          <gridHelper args={[200, 50]} />
          <OrbitControls/>
      </Canvas>
    )
  }

export default Stars;
