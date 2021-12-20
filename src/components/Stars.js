import React, { useMemo, useRef } from 'react'
import circleImage from '../assets/circle.png'
import {
	Canvas,
	extend,
	useFrame,
	useLoader,
	useThree,
} from '@react-three/fiber'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import Twinkle from './Twinkle.js'
import Nebula from './Nebula.js'
import nebula from '../assets/nebula.png'
import Cloud from './Cloud.js'
import Cloud2 from './Cloud2.js'
import Cloud3 from './Cloud3.js'
extend({ OrbitControls })

// Number generator for object positioning
const getRandomNumber = (min, max) => {
	return Math.random() * (max - min) + min;
}

// Renders non-animated star objects in the scene
const Points = () => {
	const imgTexture = useLoader(THREE.TextureLoader, circleImage)
	const count = 1000

	const positions = useMemo(() => {
		let positions = []

		// Position values are randomized
		for (let i = 0; i < count; i++) {
			const x = getRandomNumber(-260, 55) //Outward-inward
			const y = getRandomNumber(-160, 160) //Down-up
			const z = getRandomNumber(-420, 420) //Left-right
			positions.push(x, y, z)
		}
		return new Float32Array(positions)
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
				color={0xffffff}
				size={0.6}
				transparent={false}
				alphaTest={0.5}
				opacity={1.0}
			/>
		</points>
	)
}

// Allows moving of camera by dragging around the scene for debugging
const DebugCamera = () => {
	const {
		camera,
		gl: { domElement },
	} = useThree()
	const controls = useRef()

	useFrame(() => controls.current.update())

	return (
		<orbitControls
			ref={controls}
			args={[camera, domElement]}
			autoRotate={false}
			enableZoom={false}
		/>
	)
}

const ScrollCamera = () => {
	const { camera } = useThree()

	let speed = 0
	let position = 0
	let initialPosition = 0
	let finalPosition
	let deltaPosition

	window.addEventListener('scroll', e => {
		const scrollDistance = document.body.getBoundingClientRect().top
		finalPosition = scrollDistance

		// Returns how many pixels were scrolled
		deltaPosition = finalPosition - initialPosition

		// Speed is used for 'inertia' effect when scrolling
		speed += deltaPosition * 0.0005

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

	raf()

	return null
}

// Parallax scrolling effect
const MouseCamera = () => {
	const { camera } = useThree()

	let positionX = 0
	let initialX = 0
	let finalX = 0
	let deltaX = 0
	let inertiaX = 0

	let positionY = 0
	let initialY = 0
	let finalY = 0
	let deltaY = 0
	let inertiaY = 0

	document.addEventListener('mousemove', e => {
		// Controls side-to-side movement
		finalX = e.clientX
		deltaX = finalX - initialX
		inertiaX += deltaX * 0.00045

		if (initialX !== finalX) {
			initialX = e.clientX
		}

		// Controls inward-outward movement
		finalY = e.clientY
		deltaY = finalY - initialY
		inertiaY += deltaY * 0.0006

		if (initialY !== finalY) {
			initialY = e.clientY
		}
	});

	const raf = () => {
		positionX += inertiaX
		inertiaX *= 0.954321
		camera.position.z = positionX

		positionY += inertiaY
		inertiaY *= 0.954321
		camera.position.x = positionY + 90

		window.requestAnimationFrame(raf)
	}

	raf()

	return null
}

// Adds lighting to scene
const SkyBox = () => {
	const { scene } = useThree()
	scene.background = new THREE.Color('#0c0f18')
	
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

	return null
}

const Stars = () => {
	return (
		<Canvas 
			colorManagement={true} 
			camera={{ position: [100, 5, 7], fov: 80 }}
			antialias={false}
		>
			<SkyBox />
			{Array.from({ length: 45}, (_, i) => <Cloud key={i} />)} 
			{Array.from({ length: 30}, (_, i) => <Cloud2 key={i} />)}
			{Array.from({ length: 5}, (_, i) => <Cloud3 key={i} />)} 
			<Points />
			{/* <DebugCamera /> */}
			<ScrollCamera />
			<MouseCamera />
		</Canvas>
	)
}

export default Stars
