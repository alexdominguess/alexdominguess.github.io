var points = 0
var levell
var level
var score = 0
var secretNumber
var playerNumber
var audioWrong = new Audio('/media/wrong.wav')
var audioRight = new Audio('/media/right.wav')


defineLevel(levell)
document.querySelector('#input-num').setAttribute('disabled', true)

function defineLevel(levell) {
    // This function set the default level when page is loaded and also change the page information every time a diferent level is selected
    if (!levell || levell === 'I am a baby' || levell === "") {
        level = "I am a baby"
        document.querySelector('.label-number').textContent = 'Enter a number between 1 and 20'
        document.querySelector('.points').textContent = 'Points: 20'
        points = 20

    } else if (levell === 'Super Guesser') {
        level = "Super Guesser"
        document.querySelector('.label-number').textContent = 'Enter a number between 21 and 100'
        document.querySelector('.points').textContent = 'Points: 100'
        points = 100
    } else {
        level = "Paranormal"
        document.querySelector('.label-number').textContent = 'Enter a number between 101 and 1000'
        document.querySelector('.points').textContent = 'Points: 1000'
        points = 1000
    }
    document.querySelector('#input-num').value = ""
    secretNumber = getSecretNumber()
}


function getSecretNumber() {
    //  Generate a sercret randon number based on the level selected
    var text = document.querySelector('.label-number').textContent

    if (text === 'Enter a number between 1 and 20') {
        secretNumber = Math.floor(Math.random() * 21) + 1;
        if (secretNumber > 20) {
            secretNumber = secretNumber - 1
        }
    } else if (text === 'Enter a number between 21 and 100') {
        secretNumber = Math.floor(Math.random() * 101) + 20;
        if (secretNumber > 100) {
            secretNumber = secretNumber - 20
        }
    } else {
        secretNumber = Math.floor(Math.random() * 1001) + 100;
        if (secretNumber > 1000) {
            secretNumber = secretNumber - 100
        }
    }
    console.log(secretNumber)
    return secretNumber

}



function enambleNumberField() {
    try {
        document.querySelector('#input-num').attributes.removeNamedItem('disabled')
        document.querySelector('#input-num').attributes.removeNamedItem('style')

    } finally {
        document.querySelector('.btn').classList.add('btn2')
        document.querySelector('.btn').value = "GUESS"
        document.querySelector('.msg').textContent = 'Guess my number'
        document.querySelector('#input-num').value = ""
    }
}



function removePoints() {
    if (level == 'I am a baby') {
        points = points - 2

    } else if (level == 'Super Guesser') {
        points = points - 10
    } else {
        points = points - 50
    }

    pointsMessage = 'Points:' + String(points)
    document.querySelector('.points').textContent = pointsMessage
}


function checkGuessedNumber() {
    playerNumber = document.querySelector('#input-num').value
    if (playerNumber > secretNumber) {
        audioWrong.play()
        return 'WRONG! Try a lower number.'

    } else if (playerNumber < secretNumber) {
        audioWrong.play()
        return 'WRONG! Try a higher number.'
    } else {
        document.querySelector('.btn').value = "Try again"
        audioRight.play()
        return 'You won!!!'
    }
}



function mainFunction() {
    var playerName = document.querySelector('#input-name').value
    var playerNumber = document.querySelector('#input-num').value
    var btnValue = document.querySelector('.btn').value

    if (!playerName || playerName === '') {
        document.querySelector('.msg').textContent = 'Enter your name'
        alert('ENTER YOUR NAME')

    } else if (btnValue === 'Start') {
        enambleNumberField()

    } else if (btnValue === 'Try again') {
        document.querySelector('.btn').value = "GUESS"
        document.querySelector('.msg').textContent = 'Guess my new number'
        enambleNumberField()

    } else if (!playerNumber || playerNumber === '') {
        document.querySelector('.msg').textContent = 'Enter a Number'
        alert('ENTER A NUMBER')

    } else {
        var result = checkGuessedNumber()
        document.querySelector('.msg').textContent = result
        if (result === 'You won!!!') {
            score = score + points
            scoreMessage = 'Your Score:' + String(score)
            document.querySelector('.score').textContent = scoreMessage
            document.querySelector('#input-num').setAttribute('disabled', true)
            document.querySelector('#input-num').classList.add('disabled')
            defineLevel(level)
        } else {
            removePoints()
        }
    }
}


function showModal() {
    document.querySelector('.modal').classList.add('show')
}

function closeModal() {
    document.querySelector('.modal').classList.remove('show')
}