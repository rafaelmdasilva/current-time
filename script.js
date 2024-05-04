'use strict'

const greetEle = document.querySelector('#greeting')
const clockEle = document.querySelector('#clock')
const buttonEle = document.querySelector('#button')
const mainEle = document.querySelector('#main')
const imageEle = document.querySelector('#box img')

const morningIMG = ('./images/Layer1.png')
const afternoonIMG = ('./images/Layer2.png')
const eveningIMG = ('./images/Layer3.png')
const nightIMG = ('./images/Layer4.png')

let toggled12 = true

window.onload = function () { refreshClock() }
//refreshes clock before setInterval kicks in

buttonEle.textContent = '12h'
buttonEle.classList.add('pushIn')
buttonEle.addEventListener('click', () => {
    //manages 12h to 24 toggle
    if (toggled12 == false) {
        buttonEle.classList.remove('pushOut')
        buttonEle.classList.add('pushIn')
        clockEle.classList.add('scaleDown')
        buttonEle.textContent = '12h'
        toggled12 = true
        refreshClock()
    } else {
        buttonEle.classList.remove('pushIn')
        buttonEle.classList.add('pushOut')
        clockEle.classList.add('scaleUp')
        buttonEle.textContent = '24h'
        toggled12 = false
        refreshClock()
    }
    setTimeout(() => { clockEle.classList.remove('scaleDown', 'scaleUp') }, 200)
})

function refreshClock() {
    clockEle.classList.add('wiggle')
    setTimeout(() => { clockEle.classList.remove('wiggle') }, 200);

    const currentTime = new Date()
    const currentHours = currentTime.getHours()
    const currentMinutes = currentTime.getMinutes()
    const currentSeconds = currentTime.getSeconds()

    const seconds = String(currentSeconds).padStart(2, 0)
    const minutes = String(currentMinutes).padStart(2, 0)
    const hours = String(currentHours).padStart(2, 0)
    const hours12 = String(((currentHours + 11) % 12 + 1))

    const period = (currentHours >= 12 ? 'PM' : 'AM')
    const time = (`${hours}:${minutes}:${seconds}`)
    const time12 = (`${hours12}:${minutes}:${seconds} ${period}`)

    toggled12 == true ? clockEle.textContent = time12 : clockEle.textContent = time

    if (period == 'AM') {
        if (hours12 >= 1) { night() }
        if (hours12 >= 5) { morning() }
    }
    if (period == 'PM') {
        if (hours12 >= 1) { afternoon() }
        if (hours12 >= 5) { evening() }
        if (hours12 >= 8) { night() }
    }
    if (hours12 == 12) {
        if (period == 'AM') { night() }
        else { afternoon() }
    }
}

function morning() {
    greetEle.textContent = ('Good morning')
    mainEle.style.background = ('linear-gradient(225deg, rgba(135,207,235,1) 0%, rgba(248,219,123,1) 100%)')
    imageEle.src = morningIMG
}
function afternoon() {
    greetEle.textContent = ('Good afternoon')
    mainEle.style.background = ('linear-gradient(180deg, rgba(135,207,235,1) 0%, rgba(255,255,255,1) 100%)')
    imageEle.src = afternoonIMG
}
function evening() {
    greetEle.textContent = ('Good evening')
    mainEle.style.background = ('linear-gradient(125deg, rgba(135,207,235,1) 0%, rgba(255,68,0,1) 100%)')
    imageEle.src = eveningIMG
}
function night() {
    greetEle.textContent = ('Good night')
    mainEle.style.background = ('linear-gradient(180deg, rgba(35, 35, 71,1) 0%, rgba(0,0,0,1) 100%)')
    imageEle.src = nightIMG
}

setInterval(() => { refreshClock() }, 1000)