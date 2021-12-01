# Live demo: [Portfolio Site](https://www.stephentrieu.com/)
My personal portfolio website

### Description
This website was created using ThreeJS and React; specifically react-three-fiber to render in the graphics on each react component.  

### Stars Background
The star objects were generated using the following properties with a for-loop to create numerous stars and stored in an array for further use in creating the twinkling effect. 
``` javascript
const Twinkle = () => {
	const { scene } = useThree()

	// Array stores all stars for reference in animation frame
	let starArray = []

	const starGeo = new THREE.SphereBufferGeometry(0.15, 5, 5)
	const starMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff })

	// Loads star object into the scene
	const loadStars = () => {
		for (let i = 0; i < 100; i++) {
			const star = new THREE.Mesh(starGeo, starMaterial)
			const { rotation, material } = star

			rotation.x = 1.16
			rotation.y = (Math.PI / 180) * 90

			star.position.set(
				Math.random() * 200 - 150,
				Math.random() * 300 - 150,
				Math.random() * 500 - 250
			)

			material.opacity = Math.random() * 1
			material.transparent = true
			rotation.z = Math.random() * 2 * Math.PI

			starArray.push(star)
			scene.add(star)
		}
	}

	loadStars()
}
```
### Twinkling Animation
The twinkling effect was created by setting each star object to a random initial opacity. Within each animation frame, the opacity was decreased overtime to mimic a "dimming" effect. 
``` javascript
// Twinkle animation
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
    })
})
```
### Nebula Clouds
The nebula is actually a collection of multiple transparent PNGs of a cloud. This was done by randomly rotating each individual cloud and setting the material property to a "mesh lambert" material. The semi-transparent property of this material gives a see through effect while also allowing the scene lighting to color the clouds. 
``` javascript
const Nebula = () => {
    // Cloud object
    loader.load(smoke, function (texture) {
            const cloudGeo = new THREE.PlaneBufferGeometry(200, 200)
            const cloudMaterial = new THREE.MeshLambertMaterial({
                transparent: true,
                map: texture,
            
            for (let i = 0; i < 30; i++) {
                const cloud = new THREE.Mesh(cloudGeo, cloudMaterial)
                const { rotation, material } = cloud
                cloud.position.set(
                    -250 + i * 0.5, // -250 ~ -220
                    Math.random() * 260 - 150, // 200 ~ 350
                    Math.random() * 700 - 380 // -300 ~ 400
                )

                // Adds randomness to cloud appearance by rotating texture
                rotation.x = 1.16
                rotation.y = (Math.PI / 180) * 90
                rotation.z = Math.random() * 2 * Math.PI

                cloudParticles.push(cloud)
                scene.add(cloud)
		    }
    })

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
    }
}
```

