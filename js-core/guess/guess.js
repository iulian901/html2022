document.querySelector('input[type="button"]').addEventListener("click", check)
var result = document.querySelector("#result")

// genereaza un numar aleatoriu intre 0 si 100  (function randomNumber = Math.round(Math.random() * 100)
var chosenNumber = randomNumber(100)

// query
// un query returneaza o valoare (folosind return)
function randomNumber(max) {
    return Math.round(Math.random() * max)
}

// comanda
// comanda nu returneaza nimic
function check() {
    // value reprezinta valoarea data in input
    let checkedNumber = document.querySelector("#number").value

    if (chosenNumber == checkedNumber) {
        result.innerText = "Ai ghicit!"
    } else if (chosenNumber > checkedNumber) {
        result.innerText = "Prea mic"
    } else {
        result.innerText = "Prea mare"
    }
}
