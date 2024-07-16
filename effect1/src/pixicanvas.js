import * as PIXI from 'pixi.js'

//initialization
const canvas = document.querySelector('canvas.pixi')
const sizes = {width: window.innerWidth,height: window.innerHeight}

//setup
const app = new PIXI.Application({ view:canvas, resizeTo:window, backgroundAlpha:0.0 });
//document.body.appendChild(app.view)

//imageSprite
const texture = await PIXI.Assets.load('./image/koma-KP.png')
const img = new PIXI.Sprite(texture)
app.stage.addChild(img)
img.anchor.set(0.5)
img.x = app.screen.width/2+100
img.y = app.screen.height/2

//nori
let nori = new PIXI.Graphics()
.beginFill(0x000000)
.drawRect(0,0,window.innerWidth,100)
.drawRect(0,window.innerHeight-100,window.innerWidth,100)
.endFill()

//flicker
let flicker = new PIXI.Graphics()
.beginFill(0x000000)
.drawRect(0,0,window.innerWidth,window.innerHeight)
.endFill()

//flicker2
let flicker2 = new PIXI.Graphics()
.beginFill(0x000000)
.drawRect(0,0,window.innerWidth,window.innerHeight)
.endFill()


//animation
app.ticker.add((frame)=>{
    const sec = performance.now()/1000

    //object
    img.rotation = Math.PI/4*sec
    flicker.alpha = Math.sin(sec*Math.PI*100)
    flicker2.alpha = Math.cos(Math.floor(sec*100)*Math.PI)
})

//keydown
document.addEventListener('keydown',(e)=>{
    //press q
    if (e.keyCode==81){
        app.stage.addChild(nori)
    }
    //press w
    if (e.keyCode==87){
        app.stage.addChild(flicker)
    }
    //press e
    if (e.keyCode==69){
        app.stage.addChild(flicker2)
    }
})

//keyup
document.addEventListener('keyup',(e)=>{
    //takeoff q
    if (e.keyCode==81){
        app.stage.removeChild(nori)
    }
    //takeoff w
    if (e.keyCode==87){
        app.stage.removeChild(flicker)
    }
    //takeoff e
    if (e.keyCode==69){
        app.stage.removeChild(flicker2)
    }
})