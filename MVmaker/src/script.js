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

function activate(timinglist,Fn){
    const currentTime = video.currentTime
    timinglist.push(currentTime)
    Fn
}

//destroy
function removePIXI(element){
    if (element.parent) {
        element.parent.removeChild(element);
    }
    element.destroy({ children: true, texture: true, baseTexture: true })
}

//Press X confirm
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 88){
        console.log("window.width"+sizes.width/250 +"\nwindow.heigth"+sizes.height/250)
        console.log("cameraz : " + camera.position.z)
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


/**
 * Effect 3
 */
const timing_ef3 = []
//initialization
const clipplane = new THREE.Plane(new THREE.Vector3(0,0,1),-0.3)
const ptclmat1 = makeptcltexture(0xF2486B,particleTexture1)
const ptclmat2 = makeptcltexture(0xF0BD00,particleTexture2)
const ptclmat3 = makeptcltexture(0x41BBDB,particleTexture3)
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
        timeline.to(camera.position,{
            z:2.0,
            duration:0.75,
            ease:"power2.out",
        })
        .to(camera.position,{
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
let group_ef5 = []
let colorlist = [0x000000,0xF2486B,0xF0BD00,0x41BBDB]
function flicker_maker(colorcode){
    let flicker = new PIXI.Graphics()
    .beginFill(colorcode)
    .drawRect(0,0,window.innerWidth,window.innerHeight)
    .endFill()
    group_ef5.push(flicker)
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
})