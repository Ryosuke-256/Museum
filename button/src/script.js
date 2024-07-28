import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

/**
 * 宣言
 */
//base
let canvas, scene, camera, camera2,renderer, controls

//camera
let fov

//size
const sizes = {width: window.innerWidth,height: window.innerHeight}
//const sizes = {width: window.innerWidth,height: 500}

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

/**
 * camera
 */
//camera
fov = 70
camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.01, dist(fov)*10)
camera.position.set(0,0,dist(fov))
scene.add(camera)

camera2 =  new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.01, dist(fov)*10)
camera2.position.set(0,0,dist(fov))
scene.add(camera2)

controls = new PointerLockControls( camera, canvas )
document.addEventListener('click',() => {
    if (!controls.isLocked){
        controls.lock()
    }else{
        controls.unlock()
    }
})

const rot_range = Math.PI/(18*3) //回転範囲
const a = 10 //原点付近の傾き 値が高い方が傾斜が小さい (回転が遅い)
const b = 5 //最高点にいくまでの距離　値が高い方が最高点が来るのが早い 5 ~ 15 くらいが良い

const maxRotationY = rot_range
const minRotationY = -rot_range

const maxRotationX = rot_range
const minRotationX = -rot_range

const maxRotationZ = rot_range
const minRotationZ = -rot_range

let currentRotationY, currentRotationX, currentRotationZ

window.addEventListener('mousemove',()=>{
    //about camera
    currentRotationX = camera.rotation.x
    currentRotationY = camera.rotation.y
    currentRotationZ = camera.rotation.z

    //about camera2
    //about X
    if (currentRotationX >= 0 ) {
        camera2.rotation.x = maxRotationX - (maxRotationX - currentRotationX / a)*Math.pow(Math.E,-currentRotationX * b)
    } else if (currentRotationX < 0 ){
        camera2.rotation.x = minRotationX - (minRotationX - currentRotationX / a)*Math.pow(Math.E,currentRotationX * b)
    }
    //about Y
    if (currentRotationY >= 0 ){
        camera2.rotation.y = maxRotationY - (maxRotationY - currentRotationY / a)*Math.pow(Math.E,-currentRotationY * b)
    } else if (currentRotationY < 0 ) {
        camera2.rotation.y = minRotationY - (minRotationY - currentRotationY / a)*Math.pow(Math.E,currentRotationY * b)
    }
    //about Z
    if (currentRotationZ >= 0 ){
        camera2.rotation.z = maxRotationZ - (maxRotationZ - currentRotationZ / a)*Math.pow(Math.E,-currentRotationZ * b)
    } else if (currentRotationZ < 0 ) {
        camera2.rotation.z = minRotationZ - (minRotationZ - currentRotationZ / a)*Math.pow(Math.E,currentRotationZ * b)
    }
})

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

//plate
const plane = new THREE.Mesh(
    new THREE.PlaneGeometry(2.0,2.0,10,10),
    new THREE.MeshStandardMaterial({
        color:0xff0000,wireframe:true
    })
)
plane.position.set(0,0,-0.5)
scene.add(plane)

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
    //sizes.height = 500

    // Update camera
    camera.aspect = sizes.width / sizes.height
    camera.position.set(0,0,dist(fov))
    camera.updateProjectionMatrix()

    camera2.aspect = sizes.width / sizes.height
    camera2.position.set(0,0,dist(fov))
    camera2.updateProjectionMatrix()

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
    //controls.update()
    // Render
    //camera.lookAt(0,0,0)

    //second
    const sec = performance.now()/1000


    renderer.render(scene, camera2)
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
        camera.rotation.set(0,0,0)
        camera2.position.set(0,0,dist(fov))
        camera2.rotation.set(0,0,0)
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
    if(e.keyCode == 48) {
        camera.position.set(0,0,2*dist(fov))
    }
    camera.updateProjectionMatrix()
    camera2.updateProjectionMatrix()
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