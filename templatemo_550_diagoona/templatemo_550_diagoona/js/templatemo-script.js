"use strict"

const initBg = (autoplay = true) => {
    const bgImgsNames = ['diagoona-bg-3.jpg'];
    const bgImgs = bgImgsNames.map(img => "img/" + img);

    $.backstretch(bgImgs, {duration: 4000, fade: 500});

    if(!autoplay) {
      $.backstretch('pause');
    }
}

const setBg = id => {
    $.backstretch('show', id);
}

$(document).ready(function () {
    const autoplayBg = true;	// set Auto Play for Background Images
    initBg(autoplayBg);
    setBgOverlay();

    const bgControl = $('.tm-bg-control');
    bgControl.click(function() {
        bgControl.removeClass('active');
        $(this).addClass('active');
        const id = $(this).data('id');
        setBg(id);
    });

    $(window).on("backstretch.after", function (e, instance, index) {
        const bgControl = $('.tm-bg-control');
        bgControl.removeClass('active');
        const current = $(".tm-bg-controls-wrapper").find(`[data-id=${index}]`);
        current.addClass('active');
    });

    $(window).resize(function() {
        setBgOverlay();
    });
});


const beginDate = "2020-07-20"
let counter = 0;
const audio = document.querySelector(".audio")


function getTimeRemaining(endTime) {
    let dateDifference = new Date() - Date.parse(endTime)
    let days = Math.floor( (dateDifference /(1000*60*60*24)) ),
        seconds = Math.floor( (dateDifference /1000) % 60 ),
        minutes = Math.floor( (dateDifference /1000/60) % 60 ),
        hours = Math.floor( (dateDifference /(1000*60*60) % 24) );


    if (seconds >= 60) {
        minutes++
        seconds = 0

    }

    if (minutes > 59) {
        hours++
        minutes = 0
    }

    if (hours > 23) {
        days++
        hours = 0
    }

    return {
        dateDifference,
        days,
        hours,
        minutes,
        seconds
    }
}

function setTimer(selector, endTime) {
    let timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds'),
        timeInterval = setInterval(updateTimer, 1000);
    updateTimer()

    function updateTimer() {
        const timeLeft = getTimeRemaining(endTime)

        days.innerText = getZero(timeLeft.days);
        hours.innerText = getZero(timeLeft.hours);
        minutes.innerText = getZero(timeLeft.minutes);
        seconds.innerText = getZero(timeLeft.seconds);

    }

    }

function getZero(num) {
    if (num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

setTimer(".timer", beginDate)

function rotateCatY() {
    document.querySelector("#cat").style.transform = "rotateY(180deg)"
}

function rotateCatX() {
    document.querySelector("#cat").style.transform = "rotateY(360deg)"
}

setInterval(rotateCatY,2000)
setInterval(rotateCatX,4000)

const guitar = document.querySelector(".logo__class")
const blackScreen = document.querySelector(".black__screen")
const cat = document.querySelector(".cat_player")
const oxxxymiron = document.querySelector(".oxxxymiron")
const title = document.querySelector(".tm-sitename")
const subtitle = document.querySelector(".tm-slogon")

guitar.addEventListener("click", (evt) => {
    let target = evt.target

    if(target == guitar) {
        counter++
        if (counter % 2 === 1) {
            blackScreen.style.display = "flex"
            audio.play()
            cat.classList.add("cat_player__disabled")
            oxxxymiron.style.display = "block"
            oxxxymiron.classList.add("active__animation")
            guitar.classList.add("active__animation")
            blackScreen.classList.add("active__animation")
            title.classList.add("active__animation")
            subtitle.classList.add("active__animation")

        } else {
            blackScreen.style.display = ""
            audio.pause()
            cat.classList.remove("cat_player__disabled")
            oxxxymiron.style.display = ""
            guitar.classList.remove("active__animation")
            blackScreen.classList.remove("active__animation")
            title.classList.remove("active__animation")
            subtitle.classList.remove("active__animation")
        }
    }
})



