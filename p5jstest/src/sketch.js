import * as p5 from 'p5'

/**
 * Initialization
 */
//const canvas = document.querySelector('canvas.p5')
const sizes = {width: window.innerWidth,height: window.innerHeight}

let bwval = 0
let rgval = 100
/**Initialization */

/**
 * p5
 */
new p5((p) => {
    p.setup = () => {
        p.createCanvas(sizes.width, sizes.height)
    }

    p.draw = () => {
        //background
        p.background(200)

        //square
        p.fill(bwval)
        p.strokeWeight(1)
        p.rect(10,10,400,200)

        //square2
        p.fill(rgval)
        p.strokeWeight(2)
        p.rect(10,300,400,200)

        //mouse cursor
        p.fill(255)
        p.strokeWeight(4)
        p.ellipse(p.mouseX, p.mouseY, 50, 50)
    }

    p.mouseClicked = () => {
        if (rgval == 100){
            rgval = 175
        } else {
            rgval = 100
        }
    }
})

window.addEventListener('click',()=>{
    if (bwval == 0){
        bwval = 255
    } else {
        bwval = 0
    }
    console.log('triggered' + bwval)
})
