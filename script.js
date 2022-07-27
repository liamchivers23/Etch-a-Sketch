const container = document.querySelector('.sketch-container')
const changeGrid = document.querySelector('.grid-change-btn')


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
        
    }
}
createGrid()

changeGrid.addEventListener('click', () => {
    container.textContent = ''
    const gridSquares = Number(prompt('enter a number of squares per side for the new grid.'))
    createGrid(gridSquares)
})