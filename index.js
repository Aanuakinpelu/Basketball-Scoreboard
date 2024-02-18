let homePoints = document.getElementById("home-points-text")
let guestPoints = document.getElementById("guest-points-text")

let homeCount = 0
let guestCount = 0

//For the Home Team
function addhome1() {
    homeCount += 1
    homePoints.innerText = homeCount
}

function addhome2() {
    homeCount += 2
    homePoints.innerText = homeCount
}

function addhome3() {
    homeCount += 3
    homePoints.innerText = homeCount
}

//For the Guest Team
function addguest1() {
    guestCount += 1
    guestPoints.innerText = guestCount
}

function addguest2() {
    guestCount += 2
    guestPoints.innerText = guestCount
}

function addguest3() {
    guestCount += 3
    guestPoints.innerText = guestCount
}

//To start a new game
function reset() {
    guestCount = 0
    homeCount = 0
    homePoints.innerText = homeCount
    guestPoints.innerText = guestCount
}