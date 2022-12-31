//config the scene
const scene = new THREE.Scene()



//objects
    //the earth
const geometry = new THREE.SphereGeometry(3, 64, 64)
const material = new THREE.MeshPhongMaterial({
    roughness:1,
	metalness:0,
    map: new THREE.TextureLoader().load('./public/earthmap.jpg'),
    bumpMap: new THREE.TextureLoader().load('./public/earthbump.jpg'),
    bumpScale: 0.6,
    specular: new THREE.TextureLoader().load('./public/specularmap.jpg')
})
const earth = new THREE.Mesh(geometry, material)
scene.add(earth)
    
    //clouds
const cloudsGeometry = new THREE.SphereGeometry(3.08, 64, 64)
const cloudsMaterial = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('./public/clouds.png'), transparent: true})
const clouds = new THREE.Mesh(cloudsGeometry, cloudsMaterial)
scene.add(clouds)

    //stars
const starsGeometry = new THREE.SphereGeometry(80, 64, 64)
const starsMaterial = new THREE.MeshPhongMaterial({map: new THREE.TextureLoader().load('./public/galaxy.png'), side: THREE.BackSide})
const stars = new THREE.Mesh(starsGeometry, starsMaterial)
scene.add(stars)


//light
const spot = new THREE.SpotLight(0xffffff, 1, 100)
const ambientlight = new THREE.AmbientLight(0xffffff, 0.2)
scene.add(ambientlight, spot)




//positions
earth.position.y = -1
clouds.position.y = -1
spot.position.set(4.4,0,5)






//canvas
const sizes = {
    height: window.innerHeight,
    width: window.innerWidth
}


//camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height)
camera.position.z = 10
scene.add(camera)


//render
const canvas = document.getElementById('webgl')
const renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

//adjustable render
window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    //update the camera
    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()
    renderer.setSize(sizes.width, sizes.height)
})




//loop
const loop = () => {
    requestAnimationFrame(loop)
    earth.rotation.y -= 0.0015
    clouds.rotation.y -= 0.0012
    stars.rotation.y += 0.00010

    render()
}


const render = () => {
    renderer.render(scene, camera)
}

loop()