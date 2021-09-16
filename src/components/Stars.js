import React, {Suspense, useMemo, useRef} from 'react';
import circleImage from '../assets/circle.png';
import {Canvas, extend, useFrame, useLoader, useThree, render} from '@react-three/fiber';
import * as THREE from 'three';
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

    // Dark blue-black background color
    scene.background = new THREE.Color('#0c0f18')

    // White ambient lighting color
    // scene.add(new THREE.AmbientLight(0x555555));
    
    return null;
}

const Nebula = () => {
    const loader = new THREE.TextureLoader();
    const {scene} = useThree();
    
    // Array contains all clouds for later reference
    let cloudParticles = [];

    // Nebula cloud texture 
    loader.load('/assets/smoke.png', function(texture) {
        const cloudGeo = new THREE.PlaneBufferGeometry(170, 170);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            transparent: true,
            map: texture,
        });

        for (let i= 0; i < 40; i++) {
            const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);

            cloud.position.set(
            //   Math.random() * 150 - 300, // -300 ~ -150
              -300 + (i * 3), 
              Math.random() * 260 - 150, // 200 ~ 350
              Math.random() * 700 - 300, // -300 ~ 400
            );

            cloud.rotation.x = 1.16;
            // cloud.rotation.x = 2;
            // cloud.rotation.y = -0.12;
            cloud.rotation.y = (Math.PI / 180) * 90
            cloud.rotation.z = Math.random() * 2 * Math.PI;

            cloud.material.opacity = 0.45
            cloud.renderOrder = 0.5
            cloud.material.polygonOffset= true
            cloud.material.polygonOffsetFactor= -4
            cloud.material.depthTest = false

            cloudParticles.push(cloud);
            scene.add(cloud);
        };
    });  

    // Animates cloud rotation
    useFrame(() => {
        cloudParticles.forEach(p => p.rotation.z -= 0.0011);
    })

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0x1e326f);
    directionalLight.position.set(0,0,1);
    scene.add(directionalLight);

    const orangeLight = new THREE.PointLight(0x2334a9, 50, 100, 1.7);
    orangeLight.position.set( -230, 20, 280);
    scene.add(orangeLight);

    const redLight = new THREE.PointLight(0x36336a, 30, 100, 1.7);
    redLight.position.set( -200, 30, -100);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x1a2e69, 40, 100, 1.7);
    blueLight.position.set( -200, 80, 100);
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
          {/* <gridHelper args={[200, 50]} /> */}
          <SkyBox />
          <Nebula />
      </Canvas>
    )
  }

export default Stars;
