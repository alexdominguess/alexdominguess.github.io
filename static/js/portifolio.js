const animatadeFields = document.getElementsByClassName('animated-bg')
const fieldsToDisplay = document.getElementsByClassName('content')

setTimeout(function() {

    for (i = 0; i < fieldsToDisplay.length; i++) {
        fieldsToDisplay[i].classList.remove('hidden')
    }

    for (i = 0; i < animatadeFields.length; i++) {
        animatadeFields[i].classList.add('hidden')
    }
}, 500)