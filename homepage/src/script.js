import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { gsap } from "gsap";

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
let cursor1_mesh

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

function dist (fov) {
    const fovRad= (fov/2)*(Math.PI/180)
    const dist = ((sizes.height/position_ratio)/2)/Math.tan(fovRad)
    return dist
}
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
renderer.toneMapping = THREE.NoToneMapping
renderer.toneMappingExposure = 1
renderer.shadowMap.enabled = true 
renderer.setAnimationLoop(animate)
/**renderer */

//controls
controls = new OrbitControls( camera, canvas)

/**
 * Object
 */

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
 * Video
 */
let videotime
let video,video_mesh
let videoURL = "./video/2024nenga_1.2.mp4"
initVideo(videoURL)

//inputfile
const fileInput = document.getElementById('fileInput')
fileInput.addEventListener('change',handleFileSelect,false)

function handleFileSelect(e){
    const file = e.target.files[0]
    const videoURL = URL.createObjectURL(file)

    initVideo(videoURL)
}

//VideoInitialization
let initialvideo_flag = true
document.addEventListener('click',()=>{
    if(initialvideo_flag){
        video.play()
        initialvideo_flag = false
    }
})

//M: mute, P: pause, R: reset video
document.addEventListener('keydown',(e)=>{
    if (e.keyCode == 77) {
        if (!video.muted){
            video.muted = true
        } else {
            video.muted = false
        }
    }
    if (e.keyCode == 80) {
        if (video.autoplay) {
            video.pause()
            video.autoplay = false
        } else {
            video.play()
            video.autoplay = true
        }
    }
    if (e.keyCode == 82) {
        initVideo(videoURL)
    }
})

//initialization video import
function initVideo(videoURL){
    video = document.createElement('video')
    const video_scale = 120 //1920x1080 : 120, 1280x720 : 80,640x360 : 40
    video.width = 16*video_scale
    video.height = 9*video_scale
    video.autoplay = true
    video.loop = false
    video.muted = true
    video.src = videoURL
    //video.play()

    let VideoTexture = new THREE.VideoTexture(video)
    VideoTexture.minFilter = THREE.LinearFilter
    VideoTexture.magFilter = THREE.LinearFilter
    VideoTexture.colorSpace = THREE.SRGBColorSpace

    if (video_mesh) {
        scene.remove(video_mesh)
        video_mesh.geometry.dispose()
        video_mesh.material.dispose()
    }

    var vap_mag = videoaspect()
    video_mesh = new THREE.Mesh(
        new THREE.PlaneGeometry(1.6,0.9,10,10),
        new THREE.MeshBasicMaterial({map:VideoTexture})
    )
    video_mesh.scale.set(vap_mag,vap_mag,1)
    video_mesh.position.set(0,0,0)
    scene.add(video_mesh)
}

function videoaspect(){
    let window_ratio = sizes.width/sizes.height
    let video_mesh_mag
    if(window_ratio >= 1.6/0.9){
        video_mesh_mag = sizes.width/(position_ratio*1.6)
    }else if (window_ratio < 1.6/0.9){
        video_mesh_mag = sizes.height/(position_ratio*0.9)
    }
    return video_mesh_mag
}

document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 90){
        console.log("window.width"+sizes.width/250 +"\nwindow.heigth"+sizes.height/250)
        console.log(video_mesh.geometry.widthz)
    }
})

//effectTimingList
const effectTiming_ef1_1 = []
const effectTiming_ef1_2 = []
const effectTiming_ef2 = []
const effectTiming_ef3 = []
const effectTiming_ef4 = []

//effecttimingcheck
video.addEventListener('timeupdate',()=>{
    const currentTime = video.currentTime
    effectTiming_ef2.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef_sph3()
        }
    })
    effectTiming_ef3.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef3()
        }
    })
    effectTiming_ef4.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef4()
        }
    })
})
//ended
video.addEventListener("ended",()=>{
    console.log("one loop was finished")
    video.play()
})

/**Movie */

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

    //videoaupdate
    let after_mag = videoaspect()
    video_mesh.scale.set(after_mag,after_mag,1)
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
    //update
    controls.update()
    // Render
    renderer.render(scene, camera)
    //second
    const sec = performance.now()/1000
    //video
    videotime = video.currentTime
    effectTiming_ef1_1.forEach((effecttime)=>{
        if (videotime-effecttime > -0.016 && videotime-effecttime < 0 ){
            ef_sph2_1()
            console.log("pressed repeated timing : "+ videotime)
        }
    })
    effectTiming_ef1_2.forEach((effectTime)=>{
        if(videotime - effectTime > -0.016 && videotime - effectTime < 0){
            console.log("up repeated timing : "+ videotime)
            ef_sph2_2()
        }
    })
}
/**Function */

/**
 * eventlister
 */
//resize
window.addEventListener('resize', onWindowResize)

//fullscreen
//window.addEventListener("dblclick",WindowFullscreen)

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

/**
 * Effect
 */
//async tool
function delay(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

/**
 * Effect1
 */
//iniiallization
const sphere2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.2,30,30),
    new THREE.MeshStandardMaterial({color:0x00ff00, roughness:0.1, metalness: 0.8
    })
)
sphere2.position.set(-0.9,0,0)
sphere2.visible = false
scene.add(sphere2)

//hontai
function ef_sph2_1(){
    sphere2.visible=true
}
function ef_sph2_2(){
    sphere2.visible = false
}

//eventlistner
let sphere2_flag = false
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 81){
        if(!sphere2_flag){
            sphere2_flag = true
            const currentTime = video.currentTime
            effectTiming_ef1_1.push(currentTime)
            console.log("keypressed timing : " + currentTime)
            ef_sph2_1()
        }
    }
})
document.addEventListener("keyup",(e)=>{
    if(e.keyCode == 81){
        if(sphere2_flag){
            sphere2_flag = false
            const currentTime = video.currentTime
            effectTiming_ef1_2.push(currentTime)
            console.log("keyuped timing : " + currentTime)
            ef_sph2_2()
        }
    }
})
/**Effect1 */

/**
 * Effect2
 */
//initialization
const sphere3 = new THREE.Mesh(
    new THREE.SphereGeometry(0.2,30,30),
    new THREE.MeshStandardMaterial({color:0x0000ff, roughness:0.1, metalness: 0.8,
        transparent:true,opacity:0
    })
)
sphere3.position.set(1.5,0,0)
sphere3.visible = false
scene.add(sphere3)

//animation
async function anime_ef2_1(){
    return new Promise((resolve,reject)=>{
        gsap.to(sphere3.position,{
            x:-1,
            y:0.5,
            duration:0.2,
            ease:"power1.out",
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(sphere3.material,{
            opacity:1,
            duration:0.2,
            ease:"power2.inout"
        })
    })
}
async function anime_ef2_2(){
    return new Promise((resolve,reject)=>{
        gsap.to(sphere3.position,{
            x:1.5,
            y:0,
            duration:0.2,
            ease:"power1.out",
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(sphere3.material,{
            opacity:0,
            duration:0.2,
            ease:"power2.inout"
        })
    })
}

//hontai
async function ef_sph3(){
    sphere3.visible = true
    //animation
    try {
        await anime_ef2_1()
        console.log('Animation ef2_1 completed!')
    } catch (error){
        console.error('Animation ef2_1 failed',error)
    }
    await delay(100)
    try {
        await anime_ef2_2()
        console.log('Animation ef2_2 completed!')
    } catch (error){
        console.error('Animation ef2_2 failed',error)
    }
    sphere3.visible = false
}

//eventlistner
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 87){
        const currentTime = video.currentTime
        effectTiming_ef2.push(currentTime)
        ef_sph3()
    }
})
/**Effect2 */

/**
 * Effect3
 */
//initiallization
const group_ef3 = new THREE.Group()
scene.add(group_ef3)

const box1 = new THREE.Mesh(
    new THREE.BoxGeometry(0.3,0.3,0.3),
    new THREE.MeshStandardMaterial({color:0xff0000, roughness:0.1, metalness: 0.8,
        transparent:true,opacity:1
    })
)
box1.position.set(0,0,0)
box1.visible = false
group_ef3.add(box1)

const box2 = new THREE.Mesh(
    new THREE.BoxGeometry(0.3,0.3,0.3),
    new THREE.MeshStandardMaterial({color:0x00ff00, roughness:0.1, metalness: 0.8,
        transparent:true,opacity:1
    })
)
box2.position.set(0,0,0)
box2.visible = false
group_ef3.add(box2)

const box3 = new THREE.Mesh(
    new THREE.BoxGeometry(0.3,0.3,0.3),
    new THREE.MeshStandardMaterial({color:0x0000ff, roughness:0.1, metalness: 0.8,
        transparent:true,opacity:1
    })
)
box3.position.set(0,0,0)
box3.visible = false
group_ef3.add(box3)

let count_ef3 = 0

//animation
async function anime_ef3(object){
    return new Promise((resolve,reject)=>{
        gsap.to(object.position,{
            x:1.5*Math.cos(count_ef3*Math.PI/6),
            y:1.5*Math.sin(count_ef3*Math.PI/6),
            duration:0.2,
            ease:"power1.out",
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(object.material,{
            opacity:0,
            duration:0.2,
            ease:"power2.inout"
        })
    })
}

//hontai
async function ef3(){
    //innitialization
    const object = group_ef3.children[count_ef3 % 3]
    object.visible = true
    //animation
    try {
        await anime_ef3(object)
        console.log('Animation ef3 completed!')
    } catch (error){
        console.error('Animation ef3 failed',error)
    }
    //reset
    object.position.set(0,0,0)
    object.material.opacity = 1
    object.visible = false
    //count+
    count_ef3 += 1
}

//eventlistner
let ef3_flag = false
document.addEventListener('keydown',(e)=>{
    if(e.keyCode == 69){
        if(!ef3_flag){
            const currentTime = video.currentTime
            effectTiming_ef3.push(currentTime)
            ef3_flag = true
            ef3(count_ef3)
            console.log("now : " + count_ef3)
        }
    }
})
document.addEventListener('keyup',(e)=>{
    if(e.keyCode == 69){
        ef3_flag = false
    }
})
/**Effect3 */

/**
 * Effect4
 */
//initialization
const torus1 = new THREE.Mesh(
    new THREE.TorusGeometry(1.5,1,16,32),
    new THREE.MeshStandardMaterial({color:0xff0000, roughness:0.1, metalness: 0.8,
        transparent:true,opacity:1
    })
)
torus1.visible = false
scene.add(torus1)

let ef4_flag = false

//hontai
async function ef4(){
    if(!ef4_flag){
        torus1.visible=true
        ef4_flag = true
    } else {
        torus1.visible = false
        ef4_flag = false
    }
}
//Eventlitner
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 84){
        const currentTime = video.currentTime
        effectTiming_ef4.push(currentTime)
        ef4()
    }
})
video.addEventListener("ended",()=>{
    if(ef4_flag){
        ef4()
    }
})
/**Effect4 */
/**Effect */