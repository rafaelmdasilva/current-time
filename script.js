const currentTime = new Date()
var hours = currentTime.getHours()
const greet = document.querySelector('#greeting')
const clock = document.querySelector('#clock')

let period = (hours >= 12 ? 'PM' : 'AM')
var hours = ((hours + 11) % 12 + 1)
let time = (`${hours} ${period}`)

clock.innerHTML = (`Current time: ${time}`)

const container = document.querySelector('.container')
const image = document.querySelector('.sub-container img')

function morning() {
    greet.innerHTML = ('Good morning')
    container.style.background = ('linear-gradient(225deg, rgba(135,207,235,1) 0%, rgba(248,219,123,1) 100%)')
    image.src = ('./images/Layer1.png')
}
function afternoon() {
    greet.innerHTML = ('Good afternoon')
    container.style.background = ('linear-gradient(180deg, rgba(135,207,235,1) 0%, rgba(255,255,255,1) 100%)')
    image.src = ('./images/Layer2.png')
}
function evening() {
    greet.innerHTML = ('Good evening')
    container.style.background = ('linear-gradient(125deg, rgba(135,207,235,1) 0%, rgba(255,68,0,1) 100%)')
    image.src = ('./images/Layer3.png')
}
function night() {
    greet.innerHTML = ('Good night')
    container.style.background = ('linear-gradient(180deg, rgba(35, 35, 71,1) 0%, rgba(0,0,0,1) 100%)')
    image.src = ('./images/Layer4.png')
}

if (period == 'AM') {
    if (hours >= 1) {
        night()
    } if (hours >= 5) {
        morning()
    }
}
if (period == 'PM') {
    if (hours >= 1) {
        afternoon()
    } if (hours >= 5) {
        evening()
    } if (hours >= 8) {
        night()
    }
}
if (hours == 12) {
    if (period == 'AM') {
        night()
    } else {
        afternoon()
    }
}