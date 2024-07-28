//4 x 4 button
document.addEventListener('DOMContentLoaded',(e)=>{
    const grids = document.querySelectorAll('.grid')

    grids.forEach((grid, index)=>{
        grid.addEventListener('click',()=>{
            console.log(`Grid ${index + 1} clicked!`)
        })
    })
})
