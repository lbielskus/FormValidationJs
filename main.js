const inputs = document.querySelectorAll('input')
const button = document.querySelector('button')
const container = document.querySelector('.container')
const errors = document.getElementById('errors')

let formValid = true
let errorMessages = []

button.onclick = () => {

    // first input
    if(inputs[0].value.length > 20 || inputs[0].value.length < 5) {
        formValid = false
        errorMessages.push('First input invalid - max 20, min 5 characters')
    }

    // second input
    if (isNaN(Number(inputs[1].value))) {
        formValid = false
        errorMessages.push('Second input invalid - only numbers allowed')
    }

    // third input
    if (!inputs[2].value.includes('@')) {
        formValid = false
        errorMessages.push('Third input invalid - @ must be included')
    }

    // fourth input
    let input4 = inputs[3].value
    let alphabetical = false
    let numerical = false
    for (let i = 0; i < input4.length; i++) {
        !!Number(input4[i]) ? numerical = true : alphabetical = true
    }
    if (!alphabetical || !numerical) {
        formValid = false
        errorMessages.push('fourth input invalid - numerical and alphabetical must be included')
    }


    if(!formValid) {
        errorMessages.map(error => {
            errors.innerHTML += `<h4>${error}</h4>`
        })
    }

    container.style.backgroundColor = formValid ? 'green' : 'red'

}