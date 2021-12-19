import { useFrame, useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import smoke from '../assets/smoke.png'
import {useRef, useState, useLayoutEffect} from 'react'

const Nebula2 = () => {
    const {scene} = useThree()
    console.log('Nebula2 loaded')
    
    const Cloud = () => {
        const ref = useRef(null)
        const texture = useLoader(THREE.TextureLoader, smoke)

        const meshPosition = [
            Math.random() * (-220 - -250) + -250, // -250 ~ -220
            Math.random() * 260 - 150, // 200 ~ 350
            Math.random() * 700 - 380 // -300 ~ 400
        ]

        const meshRotation = [
            1.16,
            (Math.PI / 180) * 90,
            Math.random() * 2 * Math.PI
        ]

        // useFrame(() => {
        //     ref.current.rotation.z -= 0.0016
        //     console.log('hi')
        // });

        return (
            <mesh ref={ref} position={meshPosition} rotation={meshRotation}>
                <planeBufferGeometry
                    attach='geometry'
                    args={[200, 200, 30]}
                />
                <meshLambertMaterial
                    attach='material'
                    map={texture}
                    transparent={true}
                    polygonOffset={true}
                    polygonOffsetFactor={-4}
                    depthWrite={false}
                    opacity={0.7}
                />
            </mesh>
        );
    }
    
    // Lighting for nebula clouds
	const orangeLight = new THREE.PointLight(0x2334a9, 5, 100, 1.7)
	orangeLight.position.set(-210, 20, 250)
	scene.add(orangeLight)

	const darkPurple = new THREE.PointLight(0x36336a, 10, 120, 1.7)
	darkPurple.position.set(-210, 30, -180)
	scene.add(darkPurple)
    
	const blueLight = new THREE.PointLight(0x1a2e69, 5, 120, 1.7)
	blueLight.position.set(-210, -20, 50)
	scene.add(blueLight)

	const fourLight = new THREE.PointLight(0x353267, 5, 70, 1.7)
	fourLight.position.set(-210, 80, 350)
	scene.add(fourLight)
    
	const fiveLight = new THREE.PointLight(0x353267, 5, 70, 1.7)
	fiveLight.position.set(-210, 100, -120)
	scene.add(fiveLight)

	const ambientLight = new THREE.AmbientLight(0x213371, 0.00005)
	scene.add(ambientLight)
    
    return (
        <>
            <Cloud />
            <Cloud />
            <Cloud />
            <Cloud />
            <Cloud />
        </>
    );
}

export default Nebula2;
