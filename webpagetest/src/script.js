import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

/**
 * 宣言
 */
//base
let canvas, scene, camera, renderer, controls

//camera
let fov

//size
const sizes = {width: window.innerWidth,height: window.innerHeight}

//object
let cursor1_mesh,sphere1

//models

//other boject
let directionalLight

//widowsize関連補正
let position_ratio = 250

//mouse
const mouse_webGL = new THREE.Vector2()
const mouse_webGL_normal = new THREE.Vector2()
const mouse_window_normal =new THREE.Vector2()
/**initialization */

/**
 * Base
*/
// Canvas
canvas = document.querySelector('canvas.webgl')

// Scene
scene = new THREE.Scene()

//camera
fov = 70
camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.01, dist(fov)*10)
camera.position.set(0,0,dist(fov))
scene.add(camera)

/**
 * Renderer
 */
renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    antialias: true
})

renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
renderer.outputEncoding = THREE.sRGBEncoding
renderer.toneMapping = THREE.ACESFilmicToneMapping
renderer.toneMappingExposure = 1
renderer.shadowMap.enabled = true 
renderer.setAnimationLoop(animate)
/**renderer */

//controls
controls = new OrbitControls( camera, canvas)

/**
 * Object
 */
//cneter sphere1
sphere1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.5,100,100),
    new THREE.MeshStandardMaterial({
        color:0xff0000, roughness:0.1, metalness: 0.8
    })
)
scene.add(sphere1)

//cursor
cursor1_mesh = new THREE.Mesh(
    new THREE.SphereGeometry(0.03,20,20),
    new THREE.MeshBasicMaterial({
        color:0x000000,roughness:0.1,metalness:0.8
    })
)
scene.add(cursor1_mesh)
/**Object */

/**
 * GUI
 */

/**GUI */

/**
 * models
 */

/** Models */

/**
 * Background
 */
//背景
scene.background=new THREE.Color(0x333333)

/**Background */

/**
 * Lighting
 */
//平行光源
directionalLight =new THREE.DirectionalLight(0xffffff,10)
directionalLight.position.set(1,1,1)
scene.add(directionalLight)

/** Lighting */

/**
 * Postprocessing
 */

/**Postprocessing */

/**Base */

/**
 * Function
 */

//camera distance
function dist (fov) {
    const fovRad= (fov/2)*(Math.PI/180)
    const dist = ((sizes.height/position_ratio)/2)/Math.tan(fovRad)
    return dist
}

//widowresize
function onWindowResize(){
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.position.set(0,0,dist(fov))
    camera.updateProjectionMatrix()

    // Update renderer
    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
}

//windowfullscreeen
function WindowFullscreen(){
    if(!document.fullscreenElement){
        canvas.requestFullscreen()
    }else{
        document.exitFullscreen()
    }
}

//loop animation
function animate(){
    controls.update()
    // Render
    renderer.render(scene, camera)

    //second
    const sec = performance.now()/1000
}
/**Function */

/**
 * eventlister
 */
//resize
window.addEventListener('resize', onWindowResize)

//fullscreen
window.addEventListener("dblclick",WindowFullscreen)

//number key to camera
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 49) {
        camera.position.set(0,0,dist(fov))
    }
    if(e.keyCode == 50) {
        camera.position.set(dist(fov),0,0)
    }
    if(e.keyCode == 51) {
        camera.position.set(0,0,-dist(fov))
    }
    if(e.keyCode == 52) {
        camera.position.set(-dist(fov),0,0)
    }
    if(e.keyCode == 53) {
        camera.position.set(0,dist(fov),0)
    }
    if(e.keyCode == 54) {
        camera.position.set(0,-dist(fov),0)
    }
})

//mouse
window.addEventListener('mousemove',e =>
    {
        //WebGLマウス座標
        mouse_webGL.x=(e.clientX-(sizes.width/2))/position_ratio
        mouse_webGL.y=(-e.clientY+(sizes.height/2))/position_ratio
    
        //WebGLマウス座標の正規化
        mouse_webGL_normal.x=(mouse_webGL.x*2/sizes.width)/position_ratio
        mouse_webGL_normal.y=(mouse_webGL.y*2/sizes.height)/position_ratio
    
        //Windowマウス座標の正規化
        mouse_window_normal.x=(e.clientX/sizes.width)*2/position_ratio-1
        mouse_window_normal.y=-(e.clientY/sizes.height)*2/position_ratio+1
    
        //WebGL関連
        cursor1_mesh.position.x = mouse_webGL.x
        cursor1_mesh.position.y = mouse_webGL.y
})
/**eventlistner */