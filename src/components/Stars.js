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
     
    const bufferRef = useRef();

    useFrame(() => {
        const particle = bufferRef.current.array
        let light = 0

        for (let i = 0; i < particle.length ; i++) {
            const currentStar = particle[i];
            light > 0 ? light = 0 : light++ ;
            currentStar.material.color = new THREE.Color('hsl(255, 100%, " + lightness + "%)');
        }
        
    })

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

const ScrollCamera = () => {
    const {camera} = useThree()
    const t = document.body.getBoundingClientRect().top;

    camera.position.y = t * -0.01;

    return null;
}

const SkyBox = () => {
    const {scene} = useThree();
    // Dark blue-black background color
    scene.background = new THREE.Color('#0c0f18')
    
    return null;
}

const Nebula = () => {
    const loader = new THREE.TextureLoader();
    const {scene} = useThree();
    
    // Array contains all clouds for later reference
    let cloudParticles = [];

    // Nebula cloud texture 
    loader.load('/assets/smoke.png', function(texture) {
        const cloudGeo = new THREE.PlaneBufferGeometry(220, 220);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            transparent: true,
            map: texture,
        });

        for (let i= 0; i < 35; i++) {
            const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            const {rotation, material} = cloud;

            cloud.position.set(
              -250 + (i * 0.5), 
              Math.random() * 260 - 150, // 200 ~ 350
              Math.random() * 700 - 380, // -300 ~ 400
            );

            rotation.x = 1.16;
            rotation.y = (Math.PI / 180) * 90
            rotation.z = Math.random() * 2 * Math.PI;

            material.opacity = 0.45
            material.polygonOffset= true
            material.polygonOffsetFactor= -4
            material.depthTest = false

            cloudParticles.push(cloud);
            scene.add(cloud);
        };
    });  

    // Animation for cloud rotation
    useFrame(() => {
        cloudParticles.forEach(p => p.rotation.z -= 0.0015);
    })

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0x0c0f18);
    directionalLight.position.set(-220, 0, 10);
    scene.add(directionalLight);

    const orangeLight = new THREE.PointLight(0x2334a9, 5, 100, 1.7);
    orangeLight.position.set( -210, 20, 250);
    scene.add(orangeLight);

    const redLight = new THREE.PointLight(0x36336a, 5, 120, 1.7);
    redLight.position.set( -210, 30, -180);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x1a2e69, 5, 120, 1.7);
    blueLight.position.set( -210, -20, 50);
    scene.add(blueLight);

    const fourLight = new THREE.PointLight(0x353267, 5, 100, 1.7);
    fourLight.position.set( -210, 80, 350);
    scene.add(fourLight);

    const fiveLight = new THREE.PointLight(0x353267, 5, 50, 1.7);
    fiveLight.position.set( -210, 100, -120);
    scene.add(fiveLight);

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
          <ScrollCamera />
      </Canvas>
    )
  }

export default Stars;
