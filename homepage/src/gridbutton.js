import * as PIXI from 'pixi.js'
import { gsap } from "gsap";

let effectlist = 0
let margin_sq = 0.05
let scale_sq = 0.9
let square_color = 0x00F5E9
let alpha_sq = 0.5

/**
 * Botton
 */
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
/**Button */

/**
 * 4 x 5 Screen
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

//interact
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
        await delay(1000)
    } while(grid_flag[index])
}

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
}
/**Effect function */

/**
 * 2D Object
 */
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
/**2D Object */

/**
 * General Tool
 */
//async tool
function delay(ms){
    return new Promise(function(resolve){
        setTimeout(resolve,ms)
    })
}

/**General tool */
