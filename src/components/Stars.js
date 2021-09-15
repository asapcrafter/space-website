import React, {Suspense, useMemo} from 'react';
import circleImage from '../assets/circle.png';
import {Canvas, useLoader} from '@react-three/fiber';
import * as THREE from 'three';

const Points = () => {
    const imgTexture = useLoader(THREE.TextureLoader, circleImage);
	const count = 100
	const sep = 3 

	let positions = useMemo(() => {
		let positions = []
		for(let xi = 0; xi < count; xi++ ){
			for(let zi = 0; zi < count; zi++ ){
				let x = sep * (xi - count / 2);
				let z = sep * (zi - count / 2);
				let y = 0;
				positions.push(x, y, z)
			} 
		}

		return new Float32Array(positions);
	}, [count, sep])

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
      </Canvas>
    )
  }

export default Stars;
