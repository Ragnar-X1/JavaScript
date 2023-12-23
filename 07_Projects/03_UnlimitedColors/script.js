const generateColor = function random(){
    const hex = "0123456789ABCDEF"
    let color = "#"
    for(let i = 0; i<6; i++){
        color += hex[Math.floor((Math.random())*16)]
    }
    return color
}

function colors(){
    canvas.style.backgroundColor = generateColor()
}

let displayColors

const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const canvas = document.querySelector('.canvas')

start.addEventListener('click', () => {
    displayColors = setInterval(colors,500)
})

stop.addEventListener('click', () => {
    clearInterval(displayColors)
})
