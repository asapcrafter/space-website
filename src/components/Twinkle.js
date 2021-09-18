import * as THREE from 'three';
import {useFrame, useThree} from '@react-three/fiber';

const Twinkle = () => {
    const loader = new THREE.TextureLoader();
    const {scene} = useThree();
    
    // Array stores all stars for reference in animation frame
    let starArray = [];

    // Loads star object into the scene
    loader.load('./assets/whitecircle.png', function(texture) {
        const starGeo = new THREE.SphereBufferGeometry(0.15, 5, 5);
        const starMaterial = new THREE.MeshBasicMaterial({color: 0xffffff})

        for (let i= 0; i < 300; i++) {
            const star = new THREE.Mesh(starGeo, starMaterial);
            const {rotation, material} = star;

            star.position.set(
                Math.random() * 200 - 150,
                Math.random() * 300 - 150,
                Math.random() * 500 - 250,
            );

            rotation.x = 1.16;
            rotation.y = (Math.PI / 180) * 90
            rotation.z = Math.random() * 2 * Math.PI;

            material.transparent = true
            material.opacity = Math.random() * 1

            starArray.push(star);
            scene.add(star);
        };
    });  

    useFrame(() => {
        starArray.forEach(p => {
            const number = Math.random() * 1

            if (number < 0.01) {
                if (p.material.opacity > 0.99) {
                    p.material.opacity = 0.4
                } else {
                    p.material.opacity += 0.0025
                }
            }
        });
    })

    return null;
}

export default Twinkle;
