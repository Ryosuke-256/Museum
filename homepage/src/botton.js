function createButton(top,left,textre,color,onClick){
    const button = document.createElement('button')
    button.textContent = text
    button.className = 'button1'
    button.style.top = `${top}px`
    button.style.left = `${left}px`
    
    button.addEventListener('click',onClick)
    return button
}