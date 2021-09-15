import React, {Suspense, useMemo, useRef} from 'react';
import circleImage from '../assets/circle.png';
import {Canvas, extend, useFrame, useLoader, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {CubeTextureLoader} from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';

extend({OrbitControls});

const Points = () => {
    const imgTexture = useLoader(THREE.TextureLoader, circleImage);
	const count = 5000

	const positions = useMemo(() => {
		let positions = []
        // Position values are randomized 
        for (let i = 0; i < count; i++) {
            const x = Math.random() * 200 - 150 ;
            const y = Math.random() * 300 - 150;
            const z = Math.random() * 500 - 250;
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
				size={0.6}
				transparent={false}
				alphaTest={0.5}
				opacity={1.0}
			/>
		</points>
    );
}

const CameraControls = () => {
    const {camera, gl: {domElement},} = useThree()

    const controls = useRef();
    useFrame(() => controls.current.update());

    return (
        <orbitControls
            ref={controls}
            args={[camera, domElement]}
            autoRotate={false}
            enableZoom={false}
        />
    );
}

const SkyBox = () => {
    const {scene} = useThree();
    // const loader = new THREE.CubeTextureLoader()
    // const loaderTwo = new THREE.TextureLoader();
    // const texture = loader.load([
    //     '/assets/milkyway.jpg',
    //     '/assets/milkyway.jpg',
    //     '/assets/milkyway.jpg',
    //     '/assets/milkyway.jpg',
    //     '/assets/milkyway.jpg',
    //     '/assets/milkyway.jpg',
    // ]);

    // scene.background = new THREE.TextureLoader()
    //     .load('/assets/space.jpg')
    scene.background = new THREE.Color('#21282a')
    
    return null;
}

const Nebula = () => {
    const loader = new THREE.TextureLoader();
    const {scene} = useThree();

    loader.load('/assets/smoke.png', function(texture) {
        const cloudGeo = new THREE.PlaneBufferGeometry(100, 100);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            map: texture,
            transparent: true
        })
        for (let i= 0; i < 50; i++) {
            const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            let cloudParticles = [];

            cloud.position.set(
              Math.random() * 100 - 400,
              Math.random() * 400 - 200,
              Math.random() * 1000 - 400,
            );
            // cloud.rotation.x = 1.16;
            cloud.rotation.x = 60;
            // cloud.rotation.y = -0.12;
            cloud.rotation.y = 20;
            cloud.rotation.z = Math.random()*2*Math.PI;
            cloud.material.opacity = 0.55;
            cloudParticles.push(cloud);
            scene.add(cloud);
          };
    })

    let orangeLight = new THREE.PointLight(0xcc6600,50,450,1.7);
    orangeLight.position.set(200,300,100);
    scene.add(orangeLight);

    let redLight = new THREE.PointLight(0xd8547e,50,450,1.7);
    redLight.position.set(100,300,100);
    scene.add(redLight);

    let blueLight = new THREE.PointLight(0x3677ac,50,450,1.7);
    blueLight.position.set(300,300,200);
    scene.add(blueLight);

    return null;
}

const Stars = () => {
    return (
      <Canvas
          colorManagement={false}
          camera={{position: [100, 10, 0], fov: 75}}
      >
          <CameraControls />
          <Points />
          <gridHelper args={[200, 50]} />
          <SkyBox />
          <Nebula />
      </Canvas>
    )
  }

export default Stars;
