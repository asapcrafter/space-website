import React from 'react';
import * as THREE from 'three';
import {Canvas, extend, useFrame, useLoader, useThree} from '@react-three/fiber';

const Twinkle = () => {
    const loader = new THREE.TextureLoader();
    const {scene} = useThree();
    
    // Array contains all clouds for later reference
    let starArray = [];

    // Nebula cloud texture 
    loader.load('/assets/whitecircle.png', function(texture) {
        const cloudGeo = new THREE.SphereBufferGeometry(0.14, 10, 10);
        const cloudMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})

        for (let i= 0; i < 200; i++) {
            const cloud = new THREE.Mesh(cloudGeo, cloudMaterial);
            const {rotation, material} = cloud;

            cloud.position.set(
                Math.random() * 200 - 150,
                Math.random() * 300 - 150,
                Math.random() * 500 - 250,
            );

            rotation.x = 1.16;
            rotation.y = (Math.PI / 180) * 90
            rotation.z = Math.random() * 2 * Math.PI;

            material.transparent = true
            material.opacity = Math.random() * 1

            starArray.push(cloud);
            scene.add(cloud);
        };
    });  

    useFrame(() => {
        starArray.forEach(p => {
            const number = Math.random() * 1

            if (number < 0.01) {
                if (p.material.opacity > 0.99) {
                    p.material.opacity = 0.5
                } else {
                    p.material.opacity += 0.005
                }
                }
        })
        
    })

    return null
}

export default Twinkle;
