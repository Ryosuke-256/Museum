function createButton(text,top,left,onClick){
    const button = document.createElement('button')
    button.textContent = text
    button.className = 'button'
    button.style.top = `${top}px`
    button.style.left = `${left}px`
    button.addEventListener('click',onClick)
    return button
}

const buttonContainer = document.getElementById('container')

const button1 = createButton('button 1',50,50,()=>{
    console.log('Button 1 clicked')
})
buttonContainer.appendChild(button1)

const button2 = createButton('button 2',150,100,()=>{
    console.log('Button 2 clicked')
})
buttonContainer.appendChild(button2)