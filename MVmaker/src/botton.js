const sizes = {width: window.innerWidth,height: window.innerHeight}
const buttonContainer = document.getElementById('container1')

//button1
const upload_icon = 'url("icon/Upload.png")'
const button1_color = '0FE290'
let button1_top = sizes.height/2+50
let button1_left = sizes.width/2+250
let button1 = createButton(button1_left,button1_top,upload_icon,button1_color,()=>{
    console.log('Button 1 clicked'+button1)
})
button1.addEventListener("click",()=>{
    document.getElementById("videobutton").click()
})
buttonContainer.appendChild(button1)

/**
 * Function
 *  */
function createButton(left,top,texture,color,onClick){
    const button = document.createElement('button')
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
    button1_top = sizes.height/2+50
    button1_left = sizes.width/2+250
    setbutton(button1_left,button1_top,button1)
}