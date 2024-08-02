import * as THREE from 'three'
import * as PIXI from 'pixi.js'
import { gsap } from "gsap";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

//postprocessing
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
//additonal 
import { ThreeMFLoader, UnrealBloomPass } from 'three/examples/jsm/Addons.js';
import { HorizontalBlurShader  } from 'three/examples/jsm/Addons.js';
import { VerticalBlurShader } from 'three/examples/jsm/Addons.js';

/**
 * Initialization
 */
const timeline = gsap.timeline()

/**
 * --------------------------------------------CSS-----------------------------------------
 */

let effectlist = 0
let margin_sq = 0.05
let scale_sq = 0.9
let square_color = 0x00F5E9
let alpha_sq = 0.5

/**
 * Botton
 */
const sound_button = document.getElementById("Sound")
sound_button.addEventListener("click",()=>{
    effectlist = 1
    square_color = 0xF6F56F
    console.log("sdoi")
})
const effect_button = document.getElementById("Effect")
effect_button.addEventListener("click",()=>{
    effectlist = 2
    square_color = 0xEE5B8D
})
const object_button = document.getElementById("Object")
object_button.addEventListener("click",()=>{
    effectlist = 0
    square_color = 0x00F5E9
})
/**Button */

/**
 * 4 x 5 Screen Button
 */
//initialization
let rect
let mousedown = false
let grid_list = []
let grid_flag = []
const grids = document.querySelectorAll('.grid')
grids.forEach((grid)=>{
    grid_list.push(grid)
    grid_flag.push(false)
})

//interaction by mouse
for (let i=0;i<grid_list.length;i++){
    grid_list[i].addEventListener('mousedown',()=>{
        mousedown = true
        grid_flag[i] = true
        //switch_fn(grid_list[i],i)
        switch_loop(i)
    })
    grid_list[i].addEventListener('mouseover',()=>{
        if(mousedown){
            grid_flag[i] = true
            //switch_fn(grid_list[i],i)
            switch_loop(i)
        }
    })
    grid_list[i].addEventListener('mouseup',()=>{
        grid_flag[i] = false
    })
    grid_list[i].addEventListener('mouseleave',()=>{
        grid_flag[i] = false
    })
}
document.addEventListener('mouseup',()=>{
    mousedown = false
    //console.log("mousedown : " + mousedown)
})

//animation
async function switch_loop(index){
    do{
        switch_fn(grid_list[index],index)
        await delay(500)
    } while(grid_flag[index])
}

//grid animation
const gridcontainer = document.getElementById('gridcontainer')
let gridanime
document.addEventListener("mousedown",()=>{
    try{
        gridanime.kill()
    } catch(error){
        console.log(error)
    }
    gridcontainer.style.opacity = 0.5
    gridanime = gsap.to(gridcontainer.style,{opacity:0,duration:1,ease:"power1.out",})
})
/**4 x 5 Screen */

/**
 * Effect function
 */
function switch_fn(grid,index){
    switch(index){
        case 0:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef1,ef1())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 1:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef2,ef2())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 2:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef3,ef3())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 3:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef4,ef4())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 4:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef5,ef5())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 5:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef6,ef6())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 6:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef7,ef7())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 7:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef8,ef8())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 8:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef9,ef9())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 9:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef10,ef10())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 10:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef11,ef11())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 11:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef12,ef12())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 12:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef13,ef13())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 13:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef14,ef14())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 14:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef15,ef15())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 15:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef16,ef16())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 16:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef17,ef17())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 17:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef18,ef18())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 18:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef19,ef19())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
        case 19:
            console.log(`Grid ${index + 1} clicked!`)
            rect = grid.getBoundingClientRect()
            switch(effectlist){
                case 0:
                    activate(timing_ef20,ef20())
                    break
                case 1:
                    break
                case 2:
                    break
            }
            squarein(rect.left+rect.width*margin_sq,rect.top+rect.height*margin_sq,rect.width*scale_sq,rect.height*scale_sq,square_color,alpha_sq)
            break
    }
}
/**Effect function */

/**
 * ----------------------------------------------------PIXIJS------------------------------------
 */
//initialization
const canvas_pixi = document.querySelector('canvas.pixi')

//setup
const app = new PIXI.Application({ view:canvas_pixi, resizeTo:window, backgroundAlpha:0.0 });
document.body.appendChild(app.view)

//square
function square(x,y,width,height,colorcode,alpha){
    const square1 = new PIXI.Graphics()
    .beginFill(colorcode,alpha)
    .drawRect(x,y,width,height)
    .endFill()
    app.stage.addChild(square1)
    return square1
}
//squareanimation
async function squarein(x,y,width,height,colorcode,alpha){
    const squarex = square(x,y,width,height,colorcode,alpha)
    gsap.to(squarex,{alpha:0,duration:0.8,ease:"power1.out",})
    setTimeout(()=>{
        app.stage.removeChild(squarex)
    },1000)
}
/**2D Object */

//animation
app.ticker.add((frame)=>{
    PIXIanime(frame)
})

/**
 * ---------------------------------Three.js------------------------------------------------
 */

/**
 * 宣言
 */
//base
let canvas, scene, renderer, controls

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
renderer.setAnimationLoop(THREEanime)
/**renderer */

//controls
//controls = new OrbitControls( camera, canvas)

/**
 * Camera
 */
let camera, camera2
function dist (fov) {
    const fovRad= (fov/2)*(Math.PI/180)
    const dist = ((sizes.height/position_ratio)/2)/Math.tan(fovRad)
    return dist
}

let fov = 70
camera = new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.01, dist(fov)*10)
camera.position.set(0,0,dist(fov))
scene.add(camera)

camera2 =  new THREE.PerspectiveCamera(fov, sizes.width / sizes.height, 0.01, dist(fov)*10)
camera2.position.set(0,0,dist(fov))
scene.add(camera2)

controls = new PointerLockControls( camera, canvas )

/** Press Z  */
let camera_flag = false
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 90){
        if (!camera_flag){
            camera_flag = true
            controls.lock()
        }
    }
})
document.addEventListener("keyup",(e)=>{
    if(e.keyCode == 90){
        if(camera_flag){
            camera_flag = false
            controls.unlock()
            gsap.to(camera.position,{x:0,y:0,z:dist(fov),duration:0.5,})
            gsap.to(camera.rotation,{x:0,y:0,z:0,duration:0.5,})
            gsap.to(camera2.position,{x:0,y:0,z:dist(fov),duration:0.5})
            gsap.to(camera2.rotation,{x:0,y:0,z:0,duration:0.5})
        }
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

/**Camera */

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader()
const particleTexture1 = textureLoader.load('./texture/particle/torus01.png')
const particleTexture2 = textureLoader.load('./texture/particle/normalcircle02.png')
const particleTexture3 = textureLoader.load('./texture/particle/kirakira01.png')


/**Texture */

/**
 * Object
 */


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

//M: mute, P: pause, L: reset video
let videoplay_flag = true
document.addEventListener('keydown',(e)=>{
    if (e.keyCode == 77) {
        if (!video.muted){
            video.muted = true
        } else {
            video.muted = false
        }
    }
    if (e.keyCode == 80) {
        if (videoplay_flag) {
            video.pause()
            videoplay_flag = false
            //video.autoplay = false
        } else {
            video.play()
            videoplay_flag = true
            //video.autoplay = true
        }
    }
    if (e.keyCode == 76) {
        initVideo(videoURL)
    }
})

//initialization video import
function initVideo(videoURL){
    video = document.createElement('video')
    const video_scale = 120 //1920x1080 : 120, 1280x720 : 80,640x360 : 40
    video.width = 16*video_scale
    video.height = 9*video_scale
    video.autoplay = false
    video.loop = false
    video.muted = false
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
scene.background=new THREE.Color(0xF3F3F3)

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
const renderPass = new RenderPass(scene, camera2)
const outputPass = new OutputPass()

let composer = new EffectComposer(renderer)
composer.addPass(renderPass)

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

    camera2.aspect = sizes.width / sizes.height
    camera2.position.set(0,0,dist(fov))
    camera2.updateProjectionMatrix()

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
/**Function */

/**
 * eventlister
 */
//resize
window.addEventListener('resize', onWindowResize)

//fullscreen
//window.addEventListener("dblclick",WindowFullscreen)

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
})
/**eventlistner */

/**
 * ----------------------------------------------General Tool-------------------------
 */
//async tool
function delay(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

//activate function
function activate(timinglist,Fn){
    const currentTime = video.currentTime
    timinglist.push(currentTime)
    Fn
}

//destroyPIXI
function removePIXI(element){
    if (element.parent) {
        element.parent.removeChild(element);
    }
    element.destroy({ children: true, texture: true, baseTexture: true })
}

//get random number
function getRandomInt(min,max){
    return Math.random() * (max - min) + min
}

//get random color
function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//get fleshcolor
function getFleshColor() {
    let h,s,v
    h = Math.random()
    s = getRandomInt(0.75,1)
    v = getRandomInt(0.75,1)
    return [h,s,v]
}
function getRangeColor(hl,hh,sl,sh,vl,vh) {
    let h,s,v
    h = getRandomInt(hl,hh)
    s = getRandomInt(sl,sh)
    v = getRandomInt(vl,vh)
    return [h,s,v]
}

//colorcode to HSV output is 0~1
function hexToint(hex){
    hex = hex.replace(/^0x/, '')
    hex = hex.replace(/^#/, '')
    return parseInt(hex,16)
}
function intToHSV(bigint){
    let r = ((bigint >> 16) & 255)/255
    let g = ((bigint >> 8) & 255)/255
    let b = (bigint & 255)/255

    let max = Math.max(r,g,b),min = Math.min(r,g,b)
    let h,s,v = max
    let d = max - min
    s = max === 0 ? 0 : d/max
    if(max === min){
        h = 0
    } else {
        switch(max){
            case r: h = (g - b) / d + (g < b ? 6 : 0); break;
            case g: h = (b - r) / d + 2; break;
            case b: h = (r - g) / d + 4; break;
        }
        h /= 6
    }
    return [h,s,v]
}
//HSV to color code
function HSVToint(hsv){
    let h = hsv[0]
    let s = hsv[1]
    let v = hsv[2]
    let r,g,b
    let i = Math.floor(h * 6);
    let f = h * 6 - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
    r = Math.round(r * 255)
    g = Math.round(g * 255)
    b = Math.round(b * 255)

    return (1 << 24) + (r << 16) + (g << 8) + b;
}
function intTohex(bigint){
    return "#" + bigint.toString(16).slice(1)
}

//randomizecolor
function randomizecolor(colorcode,amount){
    let hsv = intToHSV(hexToint(colorcode))
    let delta = getRandomInt(-amount,amount)
    hsv[0] += delta
    if (hsv[0] > 1){
        hsv[0] = 1
    } else if (a < 0){
        hsv[0] = 0
    } else {
        hsv[0] = hsv[0]
    }
    return(intTohex(HSVToint(hsv)))
}
function randomizecolor2(colorcode,amount){
    let hsv = intToHSV(colorcode)
    let delta = getRandomInt(-amount,amount)
    hsv[0] += delta
    if (hsv[0] > 1){
        hsv[0] = 1
    } else if (a < 0){
        hsv[0] = 0
    } else {
        hsv[0] = hsv[0]
    }
    return(HSVToint(hsv))
}

//Press X confirm
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 88){
        let testcolor =  0xFF6352
        console.log("color : " + testcolor)
        let newtestcolor = randomizecolor2(testcolor,0.02)
        console.log("new color : " + newtestcolor)
        const spherea = new THREE.Mesh(
            new THREE.SphereGeometry(0.2,30,30),
            new THREE.MeshStandardMaterial({color:testcolor, roughness:0.1, metalness: 0.8,
            })
        )
        spherea.position.set(-1,0,0)
        scene.add(spherea)
        const sphereb = new THREE.Mesh(
            new THREE.SphereGeometry(0.2,30,30),
            new THREE.MeshStandardMaterial({color:newtestcolor, roughness:0.1, metalness: 0.8,
            })
        )
        sphereb.position.set(1,0,0)
        scene.add(sphereb)
    }
})

let sec = 0
//PIXIanime
function PIXIanime(frame){
}
//threeanime
function THREEanime(){
    //update
    //controls.update()

    // Render
    camera.updateProjectionMatrix()
    camera2.updateProjectionMatrix()
    //renderer.render(scene, camera2)
    composer.render()

    //second
    sec = performance.now()/1000

    //video
    videotime = video.currentTime
    timing_efQ_1.forEach((effecttime)=>{
        if (videotime-effecttime > -0.016 && videotime-effecttime < 0 ){
            efQ_1()
            console.log("pressed repeated timing : "+ videotime)
        }
    })
    timing_efQ_2.forEach((effectTime)=>{
        if(videotime - effectTime > -0.016 && videotime - effectTime < 0){
            console.log("up repeated timing : "+ videotime)
            efQ_2()
        }
    })
    timing_efT_1.forEach((effecttime)=>{
        if (videotime-effecttime > -0.016 && videotime-effecttime < 0 ){
            efT_1()
        }
    })
    timing_efT_2.forEach((effecttime)=>{
        if (videotime-effecttime > -0.016 && videotime-effecttime < 0 ){
            efT_2()
        }
    })
}
/**
 * --------------------------------------------------Effect--------------------------------------
 */

/**
 * Effect A (On during click)
 */
const timing_efQ_1 = []
const timing_efQ_2 = []
//iniiallization
let nori = new PIXI.Graphics()
.beginFill(0x000000)
.drawRect(0,0,window.innerWidth,100)
.drawRect(0,window.innerHeight-100,window.innerWidth,100)
.endFill()

//hontai
function efQ_1(){
    app.stage.addChild(nori)
}
function efQ_2(){
    app.stage.removeChild(nori)
}

//eventlistner
let efQ_flag = false
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 81){
        if(!efQ_flag){
            efQ_flag = true
            const currentTime = video.currentTime
            timing_efQ_1.push(currentTime)
            console.log("keypressed timing : " + currentTime)
            efQ_1()
        }
    }
})
document.addEventListener("keyup",(e)=>{
    if(e.keyCode == 81){
        if(efQ_flag){
            efQ_flag = false
            const currentTime = video.currentTime
            timing_efQ_2.push(currentTime)
            console.log("keyuped timing : " + currentTime)
            efQ_2()
        }
    }
})
/**Effect Q */

/**
 * Effect W (1time anime-same)
 */
const timing_efW = []
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
async function anime_efW_1(){
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
async function anime_efW_2(){
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
async function efW(){
    sphere3.visible = true
    //animation
    try {
        await anime_efW_1()
        console.log('Animation ef2_1 completed!')
    } catch (error){
        console.error('Animation ef2_1 failed',error)
    }
    await delay(100)
    try {
        await anime_efW_2()
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
        timing_efW.push(currentTime)
        efW()
    }
})
/**Effect W */

/**
 * Effect E (1time anime - change)
 */
const timing_efE = []
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
async function anime_efE(object){
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
async function efE(){
    //innitialization
    const object = group_ef3.children[count_ef3 % 3]
    object.visible = true
    //animation
    try {
        await anime_efE(object)
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
            timing_efE.push(currentTime)
            ef3_flag = true
            efE()
            console.log("now : " + count_ef3)
        }
    }
})
document.addEventListener('keyup',(e)=>{
    if(e.keyCode == 69){
        ef3_flag = false
    }
})
/**Effect E */

/**
 * Effect R (1time : ON , 2time : OFF)
 */
const timing_efR = []
//initialization
const nori_efR = new PIXI.Graphics()
.beginFill(0x000000)
.drawRect(0,0,window.innerWidth,100)
.drawRect(0,window.innerHeight-100,window.innerWidth,100)
.endFill()

let efR_flag = false
//hontai
async function efR(){
    if(!efR_flag){
        app.stage.addChild(nori_efR)
        efR_flag = true
    } else {
        app.stage.removeChild(nori_efR)
        efR_flag = false
    }
}
//Eventlitner
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 82){
        const currentTime = video.currentTime
        timing_efR.push(currentTime)
        efR()
    }
})
video.addEventListener("ended",()=>{
    if(efR_flag){
        efR()
    }
})
/**Effect R */

/**Effect 
 * T
 */
const timing_efT_1 = []
const timing_efT_2 = []
const def_min = 0.0
const def_max = 0.0
const def_a = 1.0
const gradientShader = {
    uniforms: {
        tDiffuse: { value: null },
        smoothStepMin : {value:def_min},
        smoothStepMax : {value:def_max},
        alpha: { value: def_a }
    },
    vertexShader: `
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1);
        }
    `,
    fragmentShader: `
        uniform sampler2D tDiffuse;
        uniform float smoothStepMin;
        uniform float smoothStepMax;
        uniform float alpha;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            float dist = distance(vUv, vec2(0.5, 0.5));
            color.rgb *= smoothstep(smoothStepMin, smoothStepMax, 1.0 - dist);
            color.a *= alpha;
            gl_FragColor = color;
        }
    `
}
const gradientPass = new ShaderPass(gradientShader)
composer.addPass(gradientPass)

//hontai
let dark_flag = false
function efT_1(){
    setTimeout(()=>{
        dark_flag = true
    },10)
    gradientPass.uniforms.smoothStepMin.value = def_min
    gradientPass.uniforms.smoothStepMax.value = def_max
    gsap.to(gradientPass.uniforms.smoothStepMin,{ duration:0.3, value: 0.3 , ease:"power4.Out" })
    gsap.to(gradientPass.uniforms.smoothStepMax,{ duration:0.3, value: 0.8 , ease:"power4.Out" })
}
function efT_2(){
    setTimeout(()=>{
        dark_flag = false
    },10)
    gsap.to(gradientPass.uniforms.smoothStepMin,{ duration:0.4, value: def_min, ease:"circ.inOut" })
    gsap.to(gradientPass.uniforms.smoothStepMax,{ duration:0.4, value: def_max, ease:"circ.inOut" })
}
//eventlistner
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 84){
        if(!dark_flag){
            const currentTime = video.currentTime
            timing_efT_1.push(currentTime)
            efT_1()
        }
    }
})
document.addEventListener("keyup",(e)=>{
    if(e.keyCode == 84){
        if(dark_flag){
            const currentTime = video.currentTime
            timing_efT_2.push(currentTime)
            efT_2()
        }
    }
})
/**Effect T */

/**
 * Effect 1
 */
const timing_ef1 = []
//initialization
function planemaker1(colorcode){
    const planewidth = getRandomInt(100,300)
    const plane1 = new PIXI.Graphics()
    .beginFill(colorcode,0.9)
    .drawRect(0,-500,planewidth,window.innerHeight*2.5)
    .endFill()
    plane1.pivot.set(planewidth/2,0)
    plane1.rotation = Math.PI/4
    return plane1
}

//anime
async function anime_ef1(object){
    return new Promise((resolve,reject)=>{
        const deltax = getRandomInt(window.innerWidth/2,window.innerWidth*3)
        gsap.to(object,{
            x:deltax,
            duration:1,
            ease:"power2.out",
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(object,{
            width:0,
            duration:0.3,
            delay:0.6,
            ease:"power1.in",
        })
    })
}
//hontai
async function ef1(){
    const colorcode = HSVToint(getFleshColor()).toString(16).slice(1)
    const object = planemaker1(colorcode)
    app.stage.addChild(object)
    try {
        await anime_ef1(object)
    } catch (error){
        console.error('Animation ef1 failed',error)
    }
    app.stage.removeChild(object)
    removePIXI(object)
}
/**Effect 1*/
/**
 * Effect2
 */
const timing_ef2 =[]
//initialization
async function initial_ef2(initx,inity,rotate,deltax,deltay,colorcode){
    const container = new PIXI.Container()
    app.stage.addChild(container)

    const graphics1 = new PIXI.Graphics()
    .beginFill(colorcode)
    .drawRect(0,0,200,5)
    .endFill()
    graphics1.pivot.set(0,0)
    graphics1.position.set(50,0)
    container.addChild(graphics1)

    const graphics2 = new PIXI.Graphics()
    .beginFill(colorcode)
    .drawRect(0,0,5,200)
    .endFill()
    graphics2.pivot.set(0,0)
    graphics2.position.set(0,50)
    container.addChild(graphics2)

    const graphics3 = new PIXI.Graphics()
    .beginFill(colorcode)
    .drawRect(0,0,140,2)
    .endFill()
    graphics3.pivot.set(graphics3.width/2,graphics3.height/2)
    graphics3.position.set(100,100)
    graphics3.rotation = -Math.PI*1/4
    container.addChild(graphics3)

    container.rotation = rotate
    container.position.set(initx,inity)

    gsap.from(graphics1.position,{
        y:-100,
        duration:0.5,
        ease:"power1.out",
    })
    gsap.from(graphics1,{
        alpha:0,
        duration:0.5
    })

    gsap.from(graphics2.position,{
        x:-100,
        duration:0.5,
        ease:"power1.out",
    })
    gsap.from(graphics2,{
        alpha:0,
        duration:0.5
    })

    gsap.from(graphics3.position,{
        x:-100,
        y:-100,
        duration:0.5,
        ease:"power1.out",
    })
    gsap.from(graphics3,{
        alpha:0,
        duration:0.5,
    })
    //container animation
    gsap.to(container.position,{
        x:initx+deltax,
        y:inity+deltay*(window.innerHeight/innerWidth),
        duration:0.75,
        delay:0.3,
        ease:"power3.in",
    })
    gsap.to(container,{
        alpha:0,
        duration:0.3,
        delay:0.6,
        ease:"power3.in",
    })
    await delay(1500)
    app.stage.removeChild(container)
    removePIXI(container)
}

async function anime_ef2(amount,delta){
    return new Promise((resolve,reject)=>{
        const colorcode = HSVToint(getFleshColor()).toString(16).slice(1)
        const ef2_rotationlist = [0,Math.PI/2,Math.PI,-Math.PI/2]
        const ef2_positionlist = [[amount,amount],[window.innerWidth-amount,amount],[window.innerWidth-amount,window.innerHeight-amount],[amount,window.innerHeight-amount]]
        const ef2_deltalist = [[delta,delta],[-delta,delta],[-delta,-delta],[delta,-delta]]
        for (let i=0;i<4;i++){
            initial_ef2(ef2_positionlist[i][0],ef2_positionlist[i][1],ef2_rotationlist[i],ef2_deltalist[i][0],ef2_deltalist[i][1],colorcode)
            if (i==3){
                resolve
            }
        }
    })
}

async function ef2(){
    try{
        await anime_ef2(50,100)
    } catch (error) {
        console.error("Animation ef2 failed",error)
    }
}
/**Effect 2 */

/**
 * Effect 3
 */
const timing_ef3 = []
//initialization
function makeptcltexture(colorcode,texture){
    const ptclmat = new THREE.PointsMaterial({
        color:colorcode,
        size:0.1,
        sizeAttenuation:true,
        map:texture,
        transparent:true,
        alphaMap:texture,
        depthWrite:false,
        blending:THREE.AdditiveBlending,
        //Clipping setup
        clippingPlanes:[clipplane],
    })
    return ptclmat
}
const clipplane = new THREE.Plane(new THREE.Vector3(0,0,1),-0.3)
const ptclmat1 = makeptcltexture(0xF2486B,particleTexture1)
const ptclmat2 = makeptcltexture(0xF0BD00,particleTexture2)
const ptclmat3 = makeptcltexture(0x41BBDB,particleTexture3)
const ptcltorus_geo = new THREE.TorusGeometry(3,0.5,16,30)
const ptclGeometry1 = new THREE.BufferGeometry()
const positions = ptcltorus_geo.attributes.position.array
const torusradius = 0.5
for(let i = 0;i < positions.length; i+=3){
    positions[i] += (Math.random()-0.5)*torusradius
    positions[i+1] += (Math.random()-0.5)*torusradius
    positions[i+2] += (Math.random()-0.5)*torusradius
}
ptclGeometry1.setAttribute('position',new THREE.BufferAttribute(positions,3))

//make mesh
const group_efT = new THREE.Group()
scene.add(group_efT)
const ptcltorus1 = new THREE.Points(ptclGeometry1,ptclmat1)
ptcltorus1.visible = false
group_efT.add(ptcltorus1)
const ptcltorus2 = new THREE.Points(ptclGeometry1,ptclmat2)
ptcltorus2.visible = false
group_efT.add(ptcltorus2)
const ptcltorus3 = new THREE.Points(ptclGeometry1,ptclmat3)
ptcltorus3.visible = false
group_efT.add(ptcltorus3)
group_efT.position.set(0,0,-1.5)
group_efT.rotation.y = Math.PI/2

//animation
let count_efT = 0
async function anime_f3(object){
    return new Promise((resolve,reject)=>{
        gsap.to(object.rotation,{
            z:-Math.PI*1/4,
            duration:1.5,
            ease:"power1.out",
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(object.material,{
            opacity:0,
            duration:1.3,
            ease:"power2.in"
        })
    })
}
//hontai
async function ef3(){
    //initialization
    const object = group_efT.children[count_efT % 3]
    object.visible = true
    //count+
    count_efT += 1
    //animation
    try {
        await anime_f3(object)
    } catch(error){
        console.log("T Animation failed",error)
    }
    //reset
    object.visible = false
    object.rotation.z = 0
    object.material.opacity = 1
}
/**Effect 3 */
/**
 * Effect 4
 */
const timing_ef4 = []
let ef4_flag = false
//animation
async function anime_ef4(){
    return new Promise((resolve,reject)=>{
        timeline.to(camera2.position,{
            z:2.0,
            duration:0.75,
            ease:"power2.out",
        })
        .to(camera2.position,{
            z:dist(fov),
            duration:0.75,
            ease:"power3.out",
            onComplete:resolve,
            onInterrupt:reject
        })
    })
}
async function ef4(){
    if(!ef4_flag){
        ef4_flag = true
        try {
            await anime_ef4()
        } catch (error){
            console.error("ef4 errored",error)
        }
        ef4_flag = false
    }
}

/**Effect 4 */

/**
 * Effect 5
 */
const timing_ef5 = []
let colorlist = [0x000000,0xF2486B,0xF0BD00,0x41BBDB]
function flicker_maker(colorcode){
    let flicker = new PIXI.Graphics()
    .beginFill(colorcode)
    .drawRect(0,0,window.innerWidth,window.innerHeight)
    .endFill()
    return flicker
}

//animation ef5
let count_ef5 = 0
async function anime_ef5(object){
    return new Promise((resolve,reject)=>{
        gsap.to(object,{alpha:0,
            duration:0.05,
            repeat:5,
            yoyo:true,
            ease:"power1.inOut",
            onComplete:resolve,
            onInterrupt:reject
        })
    })
}
async function ef5(){
    //initialization
    //const object = group_ef5[count_ef5 % 4]
    const object = flicker_maker(colorlist[count_ef5 % 4])
    app.stage.addChild(object)
    count_ef5 += 1
    //animation
    try {
        await anime_ef5(object)
        //await delay(300)
    } catch (error){
        console.log("Animation ef5 failed",error)
    }
    //resetp
    app.stage.removeChild(object)
    removePIXI(object)
}
/**Effect 5 */

/**
 * Effect 6
 */
const timing_ef6 = []
const blur_amt = 0.0
const def_h = blur_amt/(sizes.width)
const def_v = blur_amt/(sizes.height)

const hBlurPass = new ShaderPass(HorizontalBlurShader)
const vBlurPass = new ShaderPass(VerticalBlurShader)
hBlurPass.uniforms.h.value = def_h
vBlurPass.uniforms.v.value = def_v
composer.addPass(hBlurPass)
composer.addPass(vBlurPass)

//animation
let blur_flag
async function anime_ef6_1(){
    return new Promise((resolve,reject)=>{
        gsap.to(hBlurPass.uniforms.h,{duration:0.3,value:1/sizes.width,ease:'power4.out',
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(vBlurPass.uniforms.v,{duration:0.3,value:1/sizes.height,ease:'power4.out'})
    })
}
async function anime_ef6_2(){
    return new Promise((resolve,reject)=>{
        gsap.to(hBlurPass.uniforms.h,{duration:0.3,value:def_h,ease:'circ.inOut',
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(vBlurPass.uniforms.v,{duration:0.3,value:def_v,ease:'circ.inOut'})    
    })
}
//hontai
async function ef6(){
    try {
        await anime_ef6_1()
    } catch (error){
        console.error('Animation ef6_1 failed',error)
    }
    await delay(200)
    try {
        await anime_ef6_2()
    } catch (error){
        console.error('Animation ef6_2 failed',error)
    }
}
/**Effect 6 */

/**
 * Effect 7
 */
const timing_ef7 = []
const bloomPass = new UnrealBloomPass(new THREE.Vector2(sizes.width,sizes.height),0.75,0.8,0.4)
bloomPass.threshold = 0.5
bloomPass.strength = 0.0
bloomPass.radius = 0.1
composer.addPass(bloomPass)

//animation
async function anime_ef7_1(){
    return new Promise((resolve,reject)=>{
        gsap.to(bloomPass,{duration:0.2,strength:0.3,ease:'power4.out',
            onComplete:resolve,
            onInterrupt:reject
        })
    })
}
async function anime_ef7_2(){
    return new Promise((resolve,reject)=>{
        gsap.to(bloomPass,{duration:0.3,strength:0,ease:'circ.inOut',
            onComplete:resolve,
            onInterrupt:reject
        })
    })
}

//hontai
async function ef7(){
    try {
        await anime_ef7_1()
    } catch (error){
        console.error('Animation ef7_1 failed',error)
    }
    await delay(200)
    try {
        await anime_ef7_2()
    } catch (error){
        console.error('Animation ef7_2 failed',error)
    }
}
/**Effect 7 */

/**
 * Effect 8
 */
const timing_ef8 = []
function ef8() {
    let randomColor = intTohex(HSVToint(getFleshColor()))
    for (let i = 0; i <5; i++) {
        //initialization
        const container = document.querySelector('.effectcontainer')
        let animationElement = document.createElement('div')
        animationElement.className = 'animation-h' // 同じクラス名を使用
        let randomX = Math.random() * (window.innerWidth - 50)
        let randomY = Math.random() * (window.innerHeight - 50)
        let randomsize = getRandomInt(75,150)
        randomColor = randomizecolor(randomColor,0.05)
        //property
        animationElement.style.position = 'absolute'
        animationElement.style.left = randomX + 'px'
        animationElement.style.top = randomY + 'px'
        animationElement.style.borderRadius = 50 + '%'
        animationElement.style.height = randomsize + 'px'
        animationElement.style.width = randomsize + 'px'
        animationElement.style.backgroundColor = randomColor

        container.appendChild(animationElement)

        setTimeout(()=>{
            container.removeChild(animationElement)
        }, 1000)
    }
}
/**Effect 8 */

/**
 * Effect 9
 */
const timing_ef9 = []
function ef9() {
    let randomColor = intTohex(HSVToint(getFleshColor()))
    for (let i = 0; i < 8; i++) {
        const container = document.querySelector('.effectcontainer')
        let animationElement = document.createElement('div')
        animationElement.className = 'animation-h' // 同じクラス名を使用
        let randomX = Math.random() * (window.innerWidth - 50)
        let randomY = Math.random() * (window.innerHeight - 50)
        animationElement.style.position = 'absolute'
        randomColor = randomizecolor(randomColor,0.05)
        animationElement.style.left = randomX + 'px'
        animationElement.style.top = randomY + 'px'
        animationElement.style.borderRadius = 0 + '%'
        animationElement.style.rotate = 45 + 'deg'
        let randomsize = getRandomInt(30,50)
        animationElement.style.height = randomsize + 'px'
        animationElement.style.width = randomsize + 'px'
        animationElement.style.backgroundColor = randomColor

        container.appendChild(animationElement)

        setTimeout(()=>{
            container.removeChild(animationElement)
        }, 1000)
    }
}
/**Effect 9 */

/**
 * Effect 10
 */
const timing_ef10 = []
function ef10() {
    for (let i = 0; i <5; i++) {
        const container = document.querySelector('.effectcontainer')
        let animationElement = document.createElement('div');
        animationElement.className = 'animation-h'; // 同じクラス名を使用
        let randomX = Math.random() * (window.innerWidth - 50);
        let randomY = Math.random() * (window.innerHeight - 50);
        let randomColor = getRandomColor();
        animationElement.style.position = 'absolute';
        animationElement.style.left = randomX + 'px';
        animationElement.style.top = randomY + 'px';
        animationElement.style.backgroundColor = randomColor;

        container.appendChild(animationElement)

        setTimeout(()=>{
            container.removeChild(animationElement)
        }, 1000)
    }
}
/**Effect 10 */
/**
 * Effect 11
 */
const timing_ef11 = []
function ef11() {
    const container = document.querySelector('.effectcontainer')
    let numberOfPoints = getRandomInt(10,25); // 点の数
    let radius = getRandomInt(150,300); // 円の半径
    let startAngle = Math.random() * 360; // 開始角度 0度が右
    let duration = 10; // 点が順次表示される間隔（ミリ秒）
    let totalDuration = (numberOfPoints + 1) * duration;
    let pointsize = getRandomInt(30,50); //Size
    let randomColor = intTohex(HSVToint(getFleshColor()))

    // 点を一つずつ表示する
    for (let i = 0; i < numberOfPoints; i++) {
        setTimeout(function() {
            let point = document.createElement('div');
            let angle = startAngle + (360 / numberOfPoints) * i;
            let radian = (angle * Math.PI) / 180;
            let x = radius * Math.cos(radian);
            let y = radius * Math.sin(radian);
            randomColor = randomizecolor(randomColor,0.02)

            point.className = 'point appear-animation';
            point.style.left = `calc(50% + ${x}px)`;
            point.style.top = `calc(50% - ${y}px)`;
            point.style.width = pointsize + 'px'
            point.style.height = pointsize + 'px'
            point.style.backgroundColor = randomColor

            container.appendChild(point);
        }, i * duration);
    }

    // 円が完成した後、点を一つずつ消す
    setTimeout(function() {
        let points = document.querySelectorAll('.point');
        points.forEach((point, index) => {
            setTimeout(function() {
                point.classList.remove('appear-animation');
                point.classList.add('disappear-animation');
                setTimeout(function() {
                    point.remove(); // 点を削除
                }, 1000); // 消えるアニメーションの時間
            }, index * duration);
        });
    }, totalDuration);
}
/**Effect 11 */
/**
 * Effect 12
 */
const timing_ef12 = []
function ef12() {
    const container = document.querySelector('.effectcontainer')
    let numberOfPoints = getRandomInt(10,25); // 点の数
    let radius = getRandomInt(150,600); // 円の半径
    let startAngle = Math.random() * 360; // 開始角度 0度が右
    let duration = 10; // 点が順次表示される間隔（ミリ秒）
    let totalDuration = (numberOfPoints + 1) * duration;
    let pointsize = getRandomInt(30,50); //Size
    let randomColor = intTohex(HSVToint(getFleshColor()))

    // 点を一つずつ表示する
    for (let i = 0; i < numberOfPoints; i++) {
        setTimeout(function() {
            let point = document.createElement('div');
            let angle = startAngle + (360 / numberOfPoints) * i;
            let radian = (angle * Math.PI) / 180;
            let x = radius * Math.cos(radian);
            let y = radius * Math.sin(radian);
            randomColor = randomizecolor(randomColor,0.02)

            point.className = 'point appear-animation';
            point.style.left = `calc(50% + ${x}px)`;
            point.style.top = `calc(50% - ${y}px)`;
            point.style.width = pointsize + 'px'
            point.style.height = pointsize + 'px'
            point.style.backgroundColor = randomColor
            point.style.borderRadius = 0 + '%'
            point.style.rotate = 45 + 'deg'

            container.appendChild(point);
        }, i * duration);
    }

    // 円が完成した後、点を一つずつ消す
    setTimeout(function() {
        let points = document.querySelectorAll('.point');
        points.forEach((point, index) => {
            setTimeout(function() {
                point.classList.remove('opacity-appear');
                point.classList.add('opacity-disappear');
                setTimeout(function() {
                    point.remove(); // 点を削除
                }, 1000); // 消えるアニメーションの時間
            }, index * duration);
        });
    }, totalDuration);
}
/**Effect 12 */

/**
 * Effect 13
 */
const timing_ef13 = []
function ef13() {
    // 三角形を含むコンテナの作成
    const container = document.querySelector('.effectcontainer')
    let containertri = document.createElement('div');
    containertri.className = 'triangle-container';
    container.appendChild(containertri);

    // 三角形の数
    let numberOfPoints = getRandomInt(10,25); // 点の数
    let radius = getRandomInt(150,300); // 円の半径
    let startAngle = Math.random() * 360; // 開始角度 0度が右
    let duration = 10; // 点が順次表示される間隔（ミリ秒）
    let totalDuration = (numberOfPoints + 1) * duration;
    let pointsize = getRandomInt(30,50); //Size
    let randomColor = intTohex(HSVToint(getFleshColor()))

    // 点を一つずつ表示する
    for (let i = 0; i < numberOfPoints; i++) {
        setTimeout(function() {
            let point = document.createElement('div');
            let angle = startAngle + (360 / numberOfPoints) * i;
            let radian = (angle * Math.PI) / 180;
            let x = radius * Math.cos(radian);
            let y = radius * Math.sin(radian);
            randomColor = randomizecolor(randomColor,0.02)

            point.className = 'triangle';
            point.style.transform = `translate(${x}px, ${y}px) rotate(${angle}deg)`;
            point.style.width = pointsize + 'px'
            point.style.height = pointsize + 'px'
            point.style.backgroundColor = randomColor
            point.style.borderRadius = 50 + '%'

            containertri.appendChild(point);
        }, i * duration);
    }

    // 円が完成した後、点を一つずつ消す
    setTimeout(function() {
        let points = document.querySelectorAll('.triangle');
        points.forEach((point, index) => {
            setTimeout(function() {
                point.classList.remove('appear-animation');
                point.classList.add('disappear-animation');
                setTimeout(function() {
                    point.remove(); // 点を削除
                }, 500); // 消えるアニメーションの時間
            }, index * duration);
        });
    }, totalDuration);
}
/**Effect 13 */
/**
 * Effect 14
 */
const timing_ef14 = []
function ef14() {
    const container = document.querySelector('.effectcontainer')
    let numberOfPoints = getRandomInt(10,25); // 点の数
    let radius = getRandomInt(150,300); // 円の半径
    let startAngle = Math.random() * 360; // 開始角度 0度が右
    let duration = 10; // 点が順次表示される間隔（ミリ秒）
    let totalDuration = (numberOfPoints + 1) * duration;
    let pointsize = getRandomInt(30,50); //Size
    let randomColor = intTohex(HSVToint(getFleshColor()))

    // 点を一つずつ表示する
    for (let i = 0; i < numberOfPoints; i++) {
        setTimeout(function() {
            let point = document.createElement('div');
            let angle = startAngle + (360 / numberOfPoints) * i;
            let radian = (angle * Math.PI) / 180;
            let x = radius * Math.cos(radian);
            let y = radius * Math.sin(radian);
            randomColor = randomizecolor(randomColor,0.02)

            point.className = 'point appear-animation';
            point.style.left = `calc(50% + ${x}px)`;
            point.style.top = `calc(50% - ${y}px)`;
            point.style.width = pointsize + 'px'
            point.style.height = pointsize + 'px'
            point.style.backgroundColor = randomColor

            container.appendChild(point);
        }, i * duration);
    }

    // 円が完成した後、点を一つずつ消す
    setTimeout(function() {
        let points = document.querySelectorAll('.point');
        points.forEach((point, index) => {
            setTimeout(function() {
                point.classList.remove('appear-animation');
                point.classList.add('disappear-animation');
                setTimeout(function() {
                    point.remove(); // 点を削除
                }, 1000); // 消えるアニメーションの時間
            }, index * duration);
        });
    }, totalDuration);
}
/**Effect 14 */
/**
 * Effect 15
 */
const timing_ef15 = []
function ef15() {
    let numberOfPetals = 30; // 数
    let duration = 50; // 生成される間隔（ミリ秒）
    let randomColor = intTohex(HSVToint(getFleshColor()))

    function createPetal() {
        const container = document.querySelector('.effectcontainer')
        let petal = document.createElement('div');
        petal.className = 'petals';
    
        //color
        randomColor = randomizecolor(randomColor,0.02)
        petal.style.backgroundColor = randomColor
    
        // 花びらの初期位置をランダムに設定
        let startX = Math.random() * window.innerWidth;
        petal.style.left = startX + 'px';
    
        // 花びらの初期サイズをランダムに設定
        let size = Math.random() * 20 + 10; // 10px〜30pxの範囲
        petal.style.width = size + 'px';
        petal.style.height = size + 'px';
    
        // アニメーションのランダム化
        let duration = getRandomInt(1,4); // 2秒〜5秒の範囲
        petal.style.animationDuration = duration + 's';
    
        container.appendChild(petal);
    
        // アニメーション終了後に花びらを削除
        setTimeout(function() {
            petal.remove();
        }, duration * 1000); // アニメーションの持続時間と一致させる
    }

    for (let i = 0; i < numberOfPetals; i++) {
        setTimeout(function() {
            createPetal();
        }, i * duration);
    }
}
/**Effect 15 */
/**
 * Effect 16
 */
const timing_ef16 = []
async function anime_ef16(){
    let init_x,init_y,unit_x
    const colorcode = HSVToint(getFleshColor()).toString(16).slice(1)
    let dividenumbaer = Math.round(getRandomInt(5,10))
    unit_x = window.innerWidth/dividenumbaer
    init_x = unit_x
    init_y = 100
    let width = unit_x*0.2
    const alpha = 1
    for(let i=0;i < dividenumbaer-1 ;i++){
        let judge = Math.round(Math.random())

        const graphicsef16 = new PIXI.Graphics()
        .beginFill(colorcode,alpha)
        .drawRect(0,0,width,window.innerHeight-init_y*2)
        .endFill()
        graphicsef16.pivot.set(width/2,0)
        app.stage.addChild(graphicsef16)
        
        if(judge == 0){
            graphicsef16.position.set(init_x+unit_x*i,init_y)
        }
        if(judge == 1){
            graphicsef16.position.set(init_x+unit_x*i,window.innerHeight-init_y)
            graphicsef16.rotation = Math.PI
        }
        console.log("confirmlog1")
        gsap.from(graphicsef16,{
            height:0,
            duration:0.5,
            ease:"power1.out",
        })
        console.log("confirmlog2")
        gsap.to(graphicsef16,{
            height:0,
            duration:0.75,
            delay:0.5,
            ease:"power1.in",
        })
        
        setTimeout(()=>{
            console.log("confirmlog3")
            app.stage.removeChild(graphicsef16)
        },1250)
    }
}
function ef16(){
    anime_ef16()
}

/**Effect 16 */
/**
 * Effect 17
 */
const timing_ef17 = []
function ef17() {
    let numberOfDiamonds = 30; // ひし形の数
    let duration = 50; // 新しいひし形が生成される間隔（ミリ秒）
    let randomColor = intTohex(HSVToint(getFleshColor()))

    // ひし形を生成する関数
    function createDiamond() {
        const container = document.querySelector('.effectcontainer')
        let diamond = document.createElement('div');
        diamond.className = 'diamond';

        //color
        randomColor = randomizecolor(randomColor,0.02)
        diamond.style.backgroundColor = randomColor

        // ひし形の初期位置をランダムに設定
        let startX = Math.random() * window.innerWidth;
        diamond.style.left = startX + 'px';

        // ひし形のサイズをランダムに設定
        let size = Math.random() * 40 + 10; // 10px〜50pxの範囲
        diamond.style.width = size + 'px';
        diamond.style.height = size + 'px';

        container.appendChild(diamond);

        // アニメーション終了後にひし形を削除
        setTimeout(function() {
            diamond.remove();
        }, 3000); // アニメーションの持続時間と一致させる
    }

    // ひし形を生成するタイミングを設定
    for (let i = 0; i < numberOfDiamonds; i++) {
        setTimeout(createDiamond, i * duration);
    }
}
/**Effect 17 */
/**
 * Effect 18
 */
const timing_ef18 = []
const ef18ptclmat1 = makeptcltexture(0xAA74D1,particleTexture1)
const ef18ptclmat2 = makeptcltexture(0x00AF8B,particleTexture2)
const ef18ptclmat3 = makeptcltexture(0x2FD3F2,particleTexture3)

//make mesh
const group_ef18 = new THREE.Group()
scene.add(group_ef18)
const efptcltorus1 = new THREE.Points(ptclGeometry1,ef18ptclmat1)
efptcltorus1.visible = false
group_ef18.add(efptcltorus1)
const ef18ptcltorus2 = new THREE.Points(ptclGeometry1,ef18ptclmat2)
ef18ptcltorus2.visible = false
group_ef18.add(ef18ptcltorus2)
const ef18ptcltorus3 = new THREE.Points(ptclGeometry1,ef18ptclmat3)
ef18ptcltorus3.visible = false
group_ef18.add(ef18ptcltorus3)
group_ef18.position.set(0,0,-1.5)
group_ef18.rotation.y = Math.PI/2
//animation
let count_ef18 = 0
async function anime_ef18(object){
    return new Promise((resolve,reject)=>{
        gsap.to(object.rotation,{
            z:-Math.PI*1/4,
            duration:1.5,
            ease:"power1.out",
            onComplete:resolve,
            onInterrupt:reject
        })
        gsap.to(object.material,{
            opacity:0,
            duration:1.3,
            ease:"power2.in"
        })
    })
}
//hontai
async function ef18(){
    //initialization
    const object = group_ef18.children[count_ef18 % 3]
    object.visible = true
    //count+
    count_ef18 += 1
    //animation
    try {
        await anime_ef18(object)
    } catch(error){
        console.log("Animation18 failed",error)
    }
    //reset
    object.visible = false
    object.rotation.z = 0
    object.material.opacity = 1
}

/**Effect 18 */
/**
 * Effect 19
 */
const timing_ef19 = []
async function ef19(){
    try{
        await anime_ef2(50,100)
    } catch (error) {
        console.error("Animation ef2 failed",error)
    }
}
/**Effect 19 */
/**
 * Effect 20
 */
const timing_ef20 = []
async function ef20(){
    const colorcode = HSVToint(getFleshColor()).toString(16).slice(1)
    const object = planemaker1(colorcode)
    app.stage.addChild(object)
    try {
        await anime_ef1(object)
    } catch (error){
        console.error('Animation ef1 failed',error)
    }
    app.stage.removeChild(object)
    removePIXI(object)
}

/**Effect 20 */
/**Effect */
//--------------------------------------Finalization--------------------------------------
composer.addPass(outputPass)

/**
 * ------------------------------------Video timing check--------------------------------
 */

//effecttimingcheck
video.addEventListener('timeupdate',()=>{
    const currentTime = video.currentTime
    timing_efW.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            efW()
        }
    })
    timing_efE.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            efE()
        }
    })
    timing_efR.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            efR()
        }
    })
    timing_ef1.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef1()
        }
    })
    timing_ef1.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef2()
        }
    })
    timing_ef3.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef3()
        }
    })
    timing_ef4.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef4()
        }
    })
    timing_ef5.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef5()
        }
    })
    timing_ef6.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef6()
        }
    })
    timing_ef7.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef7()
        }
    })
    timing_ef8.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef8()
        }
    })
    timing_ef9.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef9()
        }
    })
    timing_ef10.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef10()
        }
    })
    timing_ef11.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef11()
        }
    })
    timing_ef12.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef12()
        }
    })
    timing_ef13.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef13()
        }
    })
    timing_ef14.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef14()
        }
    })
    timing_ef15.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef15()
        }
    })
    timing_ef16.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef16()
        }
    })
    timing_ef17.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef17()
        }
    })
    timing_ef18.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef18()
        }
    })
    timing_ef19.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef19()
        }
    })
    timing_ef20.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            ef20()
        }
    })
})