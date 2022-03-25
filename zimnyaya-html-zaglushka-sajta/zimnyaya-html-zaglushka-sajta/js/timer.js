const button = document.querySelector(".button__start")
const pauseButton = document.querySelector(".button__pause")
const clearButton = document.querySelector(".button__clear")
const millisecondsElement = document.querySelector("#milliseconds")
const secondsElement = document.querySelector("#seconds")
const minutesElement = document.querySelector("#minutes")
const hoursElement = document.querySelector("#hours")
const buttonRecord = document.querySelector(".button__record")


let milliseconds = 0,
    seconds = 0,
    minutes = 0,
    hours = 0;

let interval;

function setTimer() {
        milliseconds++

        if(milliseconds < 9) {
            millisecondsElement.innerText = "0" + milliseconds
        } else {
            millisecondsElement.innerText = milliseconds
        }

        if(milliseconds > 99) {
            seconds++
            secondsElement.innerText = "0" + seconds
            milliseconds = 0
            millisecondsElement.innerText = "0" + milliseconds
        }

        if(seconds < 10) {
            secondsElement.innerText = "0" + seconds
        } else {
            secondsElement.innerText = seconds
        }

        if(seconds > 59) {
            minutes++
            minutesElement.innerText = "0" + minutes
            seconds = 0
            secondsElement.innerText = "0" + seconds
        }

        if(minutes > 59) {
            hours++
            hoursElement.innerText = "0" + hours
            minutes = 0
            minutesElement.innerText = "0" + minutes

        }
}

button.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(setTimer, 10)
})

pauseButton.addEventListener("click", () => {
    clearInterval(interval)
})

clearButton.addEventListener("click", () => {
    clearInterval(interval)
    milliseconds = 0
    seconds = 0
    minutes = 0
    hours = 0
    millisecondsElement.innerText = "0" + milliseconds
    secondsElement.innerText = "0" + seconds
    minutesElement.innerText = "0" + minutes
    hoursElement.innerText = "0" + hours
})

const recordMilliseconds = document.querySelector("#recordMilliseconds")
const recordSeconds = document.querySelector("#recordSeconds")
const recordMinutes = document.querySelector("#recordMinutes")
const recordHours = document.querySelector("#recordHours")

buttonRecord.addEventListener("click", () => {
    recordMilliseconds.innerText = milliseconds
    recordSeconds.innerText = seconds
    recordMinutes.innerText = minutes
    recordHours.innerText =  hours
})
