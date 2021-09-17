import React, {Suspense, useMemo, useRef} from 'react';
import circleImage from '../assets/circle.png';
import {Canvas, extend, useFrame, useLoader, useThree} from '@react-three/fiber';
import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import Twinkle from './Twinkle.js'
import Nebula from './Nebula.js';

extend({OrbitControls});

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

const ScrollCamera = () => {
    const {camera} = useThree()
    
    let position = 0
    let initialPosition = 0
    let finalPosition 
    let deltaPosition
    let speed = 0
    
    window.addEventListener('scroll', (e) => {
        const scrollDistance = document.body.getBoundingClientRect().top;

        finalPosition = scrollDistance
        deltaPosition = (finalPosition - initialPosition)
        speed += (deltaPosition * 0.0005)
        console.log(speed)
        
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


const SkyBox = () => {
    const {scene} = useThree();
    // Dark blue-black background color
    scene.background = new THREE.Color('#0c0f18')
    
    return null;
}

// const Nebula = () => {
//     const loader = new THREE.TextureLoader();
//     const {scene} = useThree();
    
//     // Array contains all clouds for later reference
//     let cloudParticles = [];

//     loader.load('/assets/smoke.png', function(texture) {
//         const cloudGeo = new THREE.PlaneBufferGeometry(200, 200);
//         const cloudMaterial = new THREE.MeshLambertMaterial({
//             transparent: true,
//             map: texture,
//         });

//         for (let i= 0; i < 50; i++) {
//             const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
//             const {rotation, material} = cloud;

//             cloud.position.set(
//               -250 + (i * 0.5), 
//               Math.random() * 260 - 150, // 200 ~ 350
//               Math.random() * 700 - 380, // -300 ~ 400
//             );

//             rotation.x = 1.16;
//             rotation.y = (Math.PI / 180) * 90
//             rotation.z = Math.random() * 2 * Math.PI;

//             material.polygonOffset= true
//             material.polygonOffsetFactor= -4
//             material.depthTest = false
//             material.depthWrite = false
//             // material.alphaTest = 0.5
//             material.opacity = 0.7

//             cloudParticles.push(cloud);
//             scene.add(cloud);
//         };
//     });  

//     // Animation for cloud rotation
//     useFrame(() => {
//         cloudParticles.forEach(p => p.rotation.z -= 0.0016);
//     })

//     // Lighting
//     // const directionalLight = new THREE.DirectionalLight(0x0c0f18);
//     // directionalLight.position.set(-220, 0, -10);
//     // scene.add(directionalLight);

//     const orangeLight = new THREE.PointLight(0x2334a9, 5, 100, 1.7);
//     orangeLight.position.set( -210, 20, 250);
//     scene.add(orangeLight);

//     const redLight = new THREE.PointLight(0x36336a, 10, 120, 1.7);
//     redLight.position.set( -210, 30, -180);
//     scene.add(redLight);

//     const blueLight = new THREE.PointLight(0x1a2e69, 5, 120, 1.7);
//     blueLight.position.set( -210, -20, 50);
//     scene.add(blueLight);

//     const fourLight = new THREE.PointLight(0x353267, 5, 100, 1.7);
//     fourLight.position.set( -210, 80, 350);
//     scene.add(fourLight);

//     const fiveLight = new THREE.PointLight(0x353267, 5, 70, 1.7);
//     fiveLight.position.set( -210, 100, -120);
//     scene.add(fiveLight);

//     return null;
// }

const Stars = () => {
    return (
      <Canvas
          colorManagement={true}
          camera={{position: [100, 10, 0], fov: 75}}
      >
          {/* <CameraControls /> */}
          <Points />
          <SkyBox />
          <ScrollCamera />
          <Twinkle />
          <Twinkle />
          <Twinkle />
          <Nebula />
      </Canvas>
    )
  }

export default Stars;
