import * as PIXI from 'pixi.js'
import { gsap } from "gsap";

let effectlist = 0
let margin_sq = 0.05
let scale_sq = 0.9
let square_color = 0x00F5E9
let alpha_sq = 0.5
const sound = document.getElementById("Sound")
sound.addEventListener("click",()=>{
    effectlist = 1
    square_color = 0xF6F56F
    console.log("sdoi")
})
const effect = document.getElementById("Effect")
effect.addEventListener("click",()=>{
    effectlist = 2
    square_color = 0xEE5B8D
})
const object = document.getElementById("Object")
object.addEventListener("click",()=>{
    effectlist = 0
    square_color = 0x00F5E9
})

//4 x 4 button
let rect
document.addEventListener('DOMContentLoaded',(e)=>{
    const grids = document.querySelectorAll('.grid')
    grids.forEach((grid, index)=>{
        grid.addEventListener('click',()=>{
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
        })
    })
    const gridcontainer = document.getElementById('gridcontainer')
    let gridanime
    let gridanime_flag
    document.addEventListener("click",()=>{
        try{
            gridanime.kill()
        } catch(error){
            console.log(error)
        }
        gridcontainer.style.opacity = 0.5
        gridanime = gsap.to(gridcontainer.style,{opacity:0,duration:1,ease:"power1.out",})
    })
})

//initialization
const canvas = document.querySelector('canvas.pixi')
const sizes = {width: window.innerWidth,height: window.innerHeight}

//setup
const app = new PIXI.Application({ view:canvas, resizeTo:window, backgroundAlpha:0.0 });
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

//grid


