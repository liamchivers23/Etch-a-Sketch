const container = document.querySelector('.sketch-container')
const changeGrid = document.querySelector('.grid-change-btn')
const toggleGrid = document.querySelector('.toggleGrid')



function getRandColor(){
    const r = Math.floor(Math.random() * 255) 
    const g = Math.floor(Math.random() * 255) 
    const b = Math.floor(Math.random() * 255) 

    return `rgb(${r}, ${g}, ${b})`
}

function createGrid(size = 64){
    container.style.gridTemplateRows = `repeat(${size}, auto)`;
    container.style.gridTemplateColumns = `repeat(${size}, auto)`;

    for(let i = 0; i < size*size; i++){
        const divs = document.createElement('div')
        container.append(divs)

        divs.style.border = '1px solid black'

        divs.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })

        toggleGrid.addEventListener('click', () => {
            divs.style.border = 'none'
        })
    }
}
createGrid()

changeGrid.addEventListener('click', () => {
    container.textContent = ''
    const gridSquares = Math.floor(Math.abs(Number(prompt('enter a number of squares per side for the new grid.'))))

    if(gridSquares > 100){
        alert('Please insert only one number between 1-100')
        createGrid()
    } else {
        createGrid(gridSquares)
    }
    
})