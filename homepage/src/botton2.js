const sizes = {width: window.innerWidth,height: window.innerHeight}
const buttonContainer = document.getElementById('UIcontainer_2p')

//button1
const upload_icon1 = 'url("icon/Music.png")'
const button1_color = '0FE290'
let button1_top = 10
let button1_left = 25
let button1 = createButton("Sound",button1_left,button1_top,upload_icon1,button1_color,()=>{
    console.log("Sound")
})
buttonContainer.appendChild(button1)

//button2
const upload_icon2 = 'url("icon/Video.png")'
const button2_color = '0FE290'
let button2_top = 10
let button2_left = 25+75+25
let button2 = createButton("Effect",button2_left,button2_top,upload_icon2,button2_color,()=>{
    console.log("Effect")
})
buttonContainer.appendChild(button2)

//button3
const upload_icon3 = 'url("icon/Package.png")'
const button3_color = '0FE290'
let button3_top = 10
let button3_left = 25+100+100
let button3 = createButton("Object",button3_left,button3_top,upload_icon3,button3_color,()=>{
    console.log("Object")
})
buttonContainer.appendChild(button3)

//button4
const upload_icon4 = 'url("icon/Upload.png")'
const button4_color = '0FE290'
let button4_top = 10
let button4_left = 25+100+100+100
let button4 = createButton("Importvideo",button4_left,button4_top,upload_icon4,button4_color,()=>{
    console.log("ImportVideo")
})
button4.addEventListener("click",()=>{
    document.getElementById("videobutton").click()
})
buttonContainer.appendChild(button4)

/**
 * Function
 *  */
function createButton(id,left,top,texture,color,onClick){
    const button = document.createElement('button')
    button.id = id
    button.className = 'button1'
    button.style.top = `${top}px`
    button.style.left = `${left}px`
    button.style.backgroundImage = texture
    button.style.background = color
    
    button.addEventListener('click',onClick)
    button.addEventListener('mouseover',()=>{
        button.style.top = `${top+3}px`
        button.style.left = `${left+4}px`
    })
    button.addEventListener('mouseout',()=>{
        button.style.top = `${top}px`
        button.style.left = `${left}px`
    })
    return button
}
function setbutton(left,top,buttonobj){
    buttonobj.style.top = `${top}px`
    buttonobj.style.left = `${left}px`
}

window.addEventListener('resize', onWindowResize)
function onWindowResize(){
    // Update sizes
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight
}