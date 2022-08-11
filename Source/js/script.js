let $ = document

/////////////////////////////

// variables ////////////////
const body = $.body
const hourElem = $.querySelector(".hour")
const minuteElem = $.querySelector(".minute")
const secondElem = $.querySelector(".second")

// fucntions ///////////////
function liveUserScreenHeight(){
    let userScreenHeight = visualViewport.height + "px"
    body.style.minHeight = userScreenHeight
}

function timeUpdate (){
    let time = new Date()

    let hour = time.getHours()
    let minute = time.getMinutes()
    let second = time.getSeconds()

    if(hour < 10){
        hour = "0" + hour
    }

    if(minute < 10){
        minute = "0" + minute
    }

    if(second < 10){
        second = "0" + second
    }

    hourElem.innerHTML = hour
    minuteElem.innerHTML = minute
    secondElem.innerHTML = second
}

// event listeners /////////////
setInterval(liveUserScreenHeight ,100);
setInterval(timeUpdate , 1000)