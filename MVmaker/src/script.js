import * as THREE from 'three'
import * as PIXI from 'pixi.js'
import { gsap } from "gsap";

import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
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

/**
 * ---------------------------------Three.js------------------------------------------------
 */

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

//PressZ
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 90){
        console.log("window.width"+sizes.width/250 +"\nwindow.heigth"+sizes.height/250)
        console.log("cameraz : " + camera.position.z)
    }
})

/**
 * --------------------------------------------------Effect--------------------------------------
 */

/**
 * Effect A (On during click)
 */
const timing_efQ_1 = []
const timing_efQ_2 = []
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
function efQ_1(){
    sphere2.visible=true
}
function efQ_2(){
    sphere2.visible = false
}

//eventlistner
let sphere2_flag = false
document.addEventListener("keydown",(e)=>{
    if(e.keyCode == 81){
        if(!sphere2_flag){
            sphere2_flag = true
            const currentTime = video.currentTime
            timing_efQ_1.push(currentTime)
            console.log("keypressed timing : " + currentTime)
            efQ_1()
        }
    }
})
document.addEventListener("keyup",(e)=>{
    if(e.keyCode == 81){
        if(sphere2_flag){
            sphere2_flag = false
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
async function efR(){
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
        timing_efR.push(currentTime)
        efR()
    }
})
video.addEventListener("ended",()=>{
    if(ef4_flag){
        efR()
    }
})
/**Effect R */

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
let efY_flag = false
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
    if(!efY_flag){
        efY_flag = true
        try {
            await anime_ef4()
        } catch (error){
            console.error("efY errored",error)
        }
        efY_flag = false
    }
}

/**Effect Y */
/**Effect */

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
            efT()
        }
    })
    timing_ef4.forEach((effectTime)=>{
        if(currentTime - effectTime > -0.25 && currentTime - effectTime < 0){
            efY()
        }
    })
})