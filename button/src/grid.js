dividedparts = 20

const container = document.querySelector('.container')
for (let i = 0; i<dividedparts; i++){
    const newDiv = document.createElement('div')
    newDiv.classList.add('grid')
    newDiv.id = `grid-${i}`

    container.appendChild(newDiv)
}