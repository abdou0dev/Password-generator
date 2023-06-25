const characters = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B',
    'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7',
    '8', '9', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@',
    '#', '$', '%', '&', '*', '(', ')', '_', '-', '+', '=', '!', '@', '#',
    '$', '%', '&', '*', '(', ')', '_', '-', '+', '=', '!', '@', '#', '$',
    '%', '&', '*', '(', ')', '_', '-', '+', '='
]




let randomIndex = ""
let generatedPassword = false

let clickEl = document.getElementById("click-to-copy")
let passwordEl = document.getElementById("password1-el")
let password2El = document.getElementById("password2-el")
let password3El = document.getElementById("password3-el")
let password4El = document.getElementById("password4-el")
let passwordLengthEl = document.getElementById("password-length-el")
let copiedEl = document.getElementById("copied-to-clipboard")

let passwordLength = 0

function generate() {
    generatedPassword = true
    clickEl.textContent = "Click a password to copy"
    passwordLength = passwordLengthEl.value

    randomIndex = 0
    passwordEl.textContent = ""
    password2El.textContent = ""
    password3El.textContent = ""
    password4El.textContent = ""

        for ( let i = 0; i< passwordLength; i++) {
            randomIndex = Math.floor(Math.random() * characters.length)
            passwordEl.textContent += characters[randomIndex]

            randomIndex = Math.floor(Math.random() * characters.length)
            password2El.textContent += characters[randomIndex]

            randomIndex = Math.floor(Math.random() * characters.length)
            password3El.textContent += characters[randomIndex]

            randomIndex = Math.floor(Math.random() * characters.length)
            password4El.textContent += characters[randomIndex]
        }

    

}

passwordEl.addEventListener("click", function() {
    if (generatedPassword) {
        let textToCopy = this.textContent
        navigator.clipboard.writeText(textToCopy)
        copiedEl.textContent = "Copied to clipboard"

    }
})
password2El.addEventListener("click", function() {
    if (generatedPassword) {
        let textToCopy = this.textContent
        navigator.clipboard.writeText(textToCopy)
        copiedEl.textContent = "Copied to clipboard"
        
    }
})
password3El.addEventListener("click", function() {
    if (generatedPassword) {
        let textToCopy = this.textContent
        navigator.clipboard.writeText(textToCopy)
        copiedEl.textContent = "Copied to clipboard"
        
    }
})
password4El.addEventListener("click", function() {
    if (generatedPassword) {
        let textToCopy = this.textContent
        navigator.clipboard.writeText(textToCopy)
        copiedEl.textContent = "Copied to clipboard"
        
    }
})