const container = document.querySelector('.container')

function createGrid(){
    for(let i = 0; i < 256; i++){
        const divs = document.createElement('div')
        container.append(divs)
        divs.style.height = '50px'
        divs.style.width = '50px'
        divs.style.border = '1px solid black'

        divs.addEventListener('mouseover', (e) => {
            e.target.style.backgroundColor = 'black'
        })
    }
  
}
createGrid()