import { useFrame, useThree, useLoader } from '@react-three/fiber'
import * as THREE from 'three'
import nebula from '../assets/nebula-de.png'
import {useRef} from 'react'
import { OneMinusSrcAlphaFactor } from 'three'

const Cloud = () => {
    const ref = useRef(null)
    
    // Cloud Texture
    const texture = useLoader(THREE.TextureLoader, nebula)

    // Number generator for object positioning
    const getRandomNumber = (min, max) => {
        return Math.random() * (max - min) + min;
    }

    const meshPosition = [
		getRandomNumber(-225, -255), // -250 ~ -220
        Math.random() * 260 - 150, // 200 ~ 350
        Math.random() * 700 - 380 // -300 ~ 400
    ]

    const meshRotation = [
        getRandomNumber(1.14, 4.16),
        (Math.PI / 180) * 90,
        Math.random() * 2 * Math.PI
    ]

    // Animation for cloud rotation
    useFrame(() => {ref.current.rotation.z -= 0.0016});

    return (
        <mesh ref={ref} position={meshPosition} rotation={meshRotation}>
            <planeBufferGeometry
                attach='geometry'
                args={[200, 200, 75]}
            />
            <meshLambertMaterial
                attach='material'
                map={texture}
                transparent={true}
                polygonOffset={true}
                polygonOffsetFactor={-4}
                depthWrite={false}
                depthTest={false}
                opacity={0.5}
                castShadow={false}
            />
        </mesh>
    );
}
    
export default Cloud;
