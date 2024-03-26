let homeEl = document.getElementById("home-score")
let guestEl = document.getElementById("guest-score")

let countHome = 0
let countGuest = 0

function homeIncrementOne() {
    countHome += 1
    homeEl.textContent = countHome   
}

function homeIncrementTwo() {
    countHome += 2
    homeEl.textContent = countHome   
}

function homeIncrementThree() {
    countHome += 3
    homeEl.textContent = countHome   
}

function guestIncrementOne() {
    countGuest += 1
    guestEl.textContent = countGuest   
}

function guestIncrementTwo() {
    countGuest += 2
    guestEl.textContent = countGuest   
}

function guestIncrementThree() {
    countGuest += 3
    guestEl.textContent = countGuest   
}