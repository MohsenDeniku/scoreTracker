let homeScore = document.getElementById("home-score").textContent
let guestScore = document.getElementById("guest-score").textContent
function addScore(team, score) {
    if (team == 'home') {
        homeScore = parseInt(homeScore) + score
        document.getElementById("home-score").textContent = homeScore
    } else if (team == 'guest') {
        guestScore = parseInt(guestScore) + score
        document.getElementById("guest-score").textContent = guestScore
    }
    if (homeScore > guestScore) {
        document.getElementById('home-title').style.color = 'green'
        document.getElementById('guest-title').style.color = '#9AABD8'
    } else if (homeScore < guestScore) {
        document.getElementById('guest-title').style.color = 'green'
        document.getElementById('home-title').style.color = "##9AABD8"
    } else { 
        document.getElementById('guest-title').style.color = 'orange'
        document.getElementById('home-title').style.color = 'orange'
    }
}

function resetBtn() {
    document.getElementById("guest-score").innerText = 0
    document.getElementById("home-score").innerText = 0
    homeScore = 0
    guestScore = 0
    document.getElementById('winner').textContent = ''
    document.getElementById('home-1').disabled = false
    document.getElementById('home-2').disabled = false
    document.getElementById('home-3').disabled = false
    document.getElementById('guest-1').disabled = false
    document.getElementById('guest-2').disabled = false
    document.getElementById('guest-3').disabled = false
    document.getElementById('announce-btn-el').disabled = false
    document.getElementById('announce-btn-el').style.color = 'lightgreen'
    document.getElementById('announce-btn-el').style.borderColor = 'lightgreen'
}

function announceWinner() {
    if (homeScore > guestScore) {
        document.getElementById('winner').textContent = 'Team Home is the winner'
    } else if (homeScore < guestScore) {
        document.getElementById('winner').textContent = 'Team Guest is the winner'
    } else {
        document.getElementById('winner').textContent = 'Draw'
    }
    document.getElementById('home-1').disabled = true
    document.getElementById('home-2').disabled = true
    document.getElementById('home-3').disabled = true
    document.getElementById('guest-1').disabled = true
    document.getElementById('guest-2').disabled = true
    document.getElementById('guest-3').disabled = true
    document.getElementById('reset-btn-el').style.borderColor = "orange"
    document.getElementById('reset-btn-el').style.color = "orange"
    document.getElementById('announce-btn-el').disabled = true
    document.getElementById('announce-btn-el').style.border = 'white'
    document.getElementById('announce-btn-el').style.color = 'white'
}

