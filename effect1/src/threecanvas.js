import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { gsap } from "gsap";

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
canvas = document.querySelector('canvas.three')

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
renderer.localClippingEnabled = true
renderer.setAnimationLoop(animate)
/**renderer */

//controls
controls = new OrbitControls( camera, canvas)

/**
 * Texture
 */
const textureLoader = new THREE.TextureLoader()
const particleTexture = textureLoader.load('./texture/particle/circle_01.png')

/**Texture */

/**
 * Object
 */
//cneter sphere1
sphere1 = new THREE.Mesh(
    new THREE.SphereGeometry(0.11,100,100),
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
 * Models
 */

/** Models */

/**
 * Particles
 */
const clipplane = new THREE.Plane(new THREE.Vector3(0,0,1),-0.3)
const ptclmat = new THREE.PointsMaterial({
    color:0xcc88ff,
    size:0.1,
    sizeAttenuation:true,
    map:particleTexture,
    transparent:true,
    alphaMap:particleTexture,
    depthWrite:false,
    blending:THREE.AdditiveBlending,

    //Clipping setup
    clippingPlanes:[clipplane],

})

const ptcltorus_geo = new THREE.TorusGeometry(3,0.5,16,50)
const ptclGeometry1 = new THREE.BufferGeometry()
const positions = ptcltorus_geo.attributes.position.array
const torusradius = 0.5
for(let i = 0;i < positions.length; i+=3){
    positions[i] += (Math.random()-0.5)*torusradius
    positions[i+1] += (Math.random()-0.5)*torusradius
    positions[i+2] += (Math.random()-0.5)*torusradius
}
ptclGeometry1.setAttribute('position',new THREE.BufferAttribute(positions,3))
const ptcltorus = new THREE.Points(
    ptclGeometry1,
    ptclmat
)
ptcltorus.position.set(0,0,-1.5)
ptcltorus.rotation.y = Math.PI/2
scene.add(ptcltorus)

/**Particles */

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
/**Base */

/**
 * Postprocessing
 */
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
const renderPass = new RenderPass(scene, camera);
const gradientPass = new ShaderPass(gradientShader);
//Blur
const hBlurPass = new ShaderPass(HorizontalBlurShader)
const vBlurPass = new ShaderPass(VerticalBlurShader)
const blur_amt = 0.0
const def_h = blur_amt/(sizes.width)
const def_v = blur_amt/(sizes.height)
hBlurPass.uniforms.h.value = def_h
vBlurPass.uniforms.v.value = def_v
//bloom
const bloomPass = new UnrealBloomPass(new THREE.Vector2(sizes.width,sizes.height),0.75,0.8,0.4)
bloomPass.threshold = 0.5
bloomPass.strength = 0.0
bloomPass.radius = 0.1
//Output
const outputPass = new OutputPass()

//compse
let composer = new EffectComposer(renderer)
composer.addPass(renderPass)
composer.addPass(gradientPass)
composer.addPass(hBlurPass)
composer.addPass(vBlurPass)
composer.addPass(bloomPass)
composer.addPass(outputPass)

//eventlistner
let dark_flag = false
let blur_flag = false
let bloom_flag = false
document.addEventListener("keydown",(e)=>{
    //press R
    if(e.keyCode == 82 && !dark_flag){
        //frag管理
        setTimeout(()=>{
            dark_flag = true
        },10)
        gradientPass.uniforms.smoothStepMin.value = def_min
        gradientPass.uniforms.smoothStepMax.value = def_max
        gsap.to(gradientPass.uniforms.smoothStepMin,{ duration:0.3, value: 0.5 , ease:"power4.Out" })
        gsap.to(gradientPass.uniforms.smoothStepMax,{ duration:0.2, value: 0.7 , ease:"power4.Out" })
    }
    //press T
    if(e.keyCode == 84 && !blur_flag){
        setTimeout(()=>{
            blur_flag = true
        },10)
        gsap.to(hBlurPass.uniforms.h,{duration:0.3,value:1/sizes.width,ease:'power4.out'})
        gsap.to(vBlurPass.uniforms.v,{duration:0.3,value:1/sizes.height,ease:'power4.out'})
    }
    //press  Y
    if(e.keyCode == 89 && !bloom_flag){
        setTimeout(()=>{
            bloom_flag = true
        },10)
        gsap.to(bloomPass,{duration:0.2,strength:0.3,ease:'power4.out'})
    }
})

document.addEventListener("keyup",(e)=>{
    //takeoff R
    if(e.keyCode == 82){
        //frag管理
        setTimeout(()=>{
            dark_flag = false
        },10)
        gsap.to(gradientPass.uniforms.smoothStepMin,{ duration:0.2, value: def_min, ease:"circ.inOut" })
        gsap.to(gradientPass.uniforms.smoothStepMax,{ duration:0.4, value: def_max, ease:"circ.inOut" })
    }
    //press T
    if(e.keyCode == 84){
        setTimeout(()=>{
            blur_flag = false
        },10)
        gsap.to(hBlurPass.uniforms.h,{duration:0.3,value:def_h,ease:'circ.inOut'})
        gsap.to(vBlurPass.uniforms.v,{duration:0.3,value:def_v,ease:'circ.inOut'})
    }
    //press Y
    if(e.keyCode == 89){
        setTimeout(()=>{
            bloom_flag = false
        },10)
        gsap.to(bloomPass,{duration:0.3,strength:0,ease:'circ.inOut'})
    }
})
/**Postprocessing */

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
    //time
    const sec = performance.now()/1000
    //const elapsedTime = clock.getElapsedTime()

    //particles
    ptcltorus.rotation.x = -sec*Math.PI/40
    for(let i=0;i < positions.length; i+=3){
        ptclGeometry1.attributes.position.array[i+2] += Math.sin(sec*Math.PI/8*i/1000)*0.0005
    }
    ptclGeometry1.attributes.position.needsUpdate = true

    //postprocessing
    if (dark_flag){
        gradientPass.uniforms.smoothStepMin.value += 0.001
        gradientPass.uniforms.smoothStepMax.value += 0.001
    }
    if (blur_flag){
        hBlurPass.uniforms.h.value += 0.00001
        vBlurPass.uniforms.v.value += 0.00001
    }
    if (bloom_flag){
        bloomPass.strength += 0.001
    }

    //update
    controls.update()
    // Render
    //renderer.render(scene, camera)
    composer.render()
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