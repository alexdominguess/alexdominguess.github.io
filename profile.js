window.addEventListener('scroll', showDivs)
const divs = document.querySelectorAll('.delay')

showDivs()

function showDivs() {
    const windowSize = window.innerHeight
    divs.forEach(div => {
        const divPsotion = div.getBoundingClientRect().top
        if (divPsotion < windowSize) {
            div.classList.add('show')
        } else {
            div.classList.remove('show')
        }

    })
    console.log(divs)
}