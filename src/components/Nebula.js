import {useFrame, useThree} from '@react-three/fiber';
import * as THREE from 'three';

const Nebula = () => {
    const loader = new THREE.TextureLoader();
    const {scene} = useThree();
    
    // Array contains all clouds for later reference
    let cloudParticles = [];

    loader.load('./assets/smoke.png', function(texture) {
        const cloudGeo = new THREE.PlaneBufferGeometry(200, 200);
        const cloudMaterial = new THREE.MeshLambertMaterial({
            transparent: true,
            map: texture,
        });

        for (let i= 0; i < 50; i++) {
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

            material.polygonOffset= true
            material.polygonOffsetFactor= -4
            // material.depthTest = false
            material.depthWrite = false
            // material.alphaTest = 0.5
            material.opacity = 0.7

            cloudParticles.push(cloud);
            scene.add(cloud);
        };
    });  

    // Animation for cloud rotation
    useFrame(() => cloudParticles.forEach(p => p.rotation.z -= 0.0016))

    // Lighting for nebula clouds
    const orangeLight = new THREE.PointLight(0x2334a9, 5, 100, 1.7);
    orangeLight.position.set( -210, 20, 250);
    scene.add(orangeLight);

    const redLight = new THREE.PointLight(0x36336a, 10, 120, 1.7);
    redLight.position.set( -210, 30, -180);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x1a2e69, 5, 120, 1.7);
    blueLight.position.set( -210, -20, 50);
    scene.add(blueLight);

    const fourLight = new THREE.PointLight(0x353267, 5, 100, 1.7);
    fourLight.position.set( -210, 80, 350);
    scene.add(fourLight);

    const fiveLight = new THREE.PointLight(0x353267, 5, 70, 1.7);
    fiveLight.position.set( -210, 100, -120);
    scene.add(fiveLight);

    return null;
}

export default Nebula;