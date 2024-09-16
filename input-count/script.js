let pounds = document.querySelector(".pounds")
let kilograms = document.querySelector(".kilograms")
let grams = document.querySelector(".grams")
let ounces = document.querySelector(".ounces")
let form = document.querySelector("form")

form.addEventListener("input", convertWeight)

function convertWeight(e) {
  e.preventDefault()
  let inputValue = parseFloat(e.target.value)

  if (isNaN(inputValue)) {
    // If the input is not a valid number, clear the other fields
    clearFields()
    return
  }

  if (e.target.classList.contains("pounds")) {
    convertFromPounds(inputValue)
  }
  if (e.target.classList.contains("kilograms")) {
    convertFromKilograms(inputValue)
  }
  if (e.target.classList.contains("grams")) {
    convertFromGrams(inputValue)
  }
  if (e.target.classList.contains("ounces")) {
    convertFromOunces(inputValue)
  }
}

function convertFromPounds(poundsValue) {
  kilograms.value = (poundsValue * 0.453592).toFixed(2)
  grams.value = (poundsValue * 453.592).toFixed(2)
  ounces.value = (poundsValue * 16).toFixed(2)
}

function convertFromKilograms(kilogramsValue) {
  pounds.value = (kilogramsValue * 2.20462).toFixed(2)
  grams.value = (kilogramsValue * 1000).toFixed(2)
  ounces.value = (kilogramsValue * 35.274).toFixed(2)
}

function convertFromGrams(gramsValue) {
  pounds.value = (gramsValue * 0.00220462).toFixed(2)
  kilograms.value = (gramsValue / 1000).toFixed(2)
  ounces.value = (gramsValue * 0.035274).toFixed(2)
}

function convertFromOunces(ouncesValue) {
  pounds.value = (ouncesValue * 0.0625).toFixed(2)
  kilograms.value = (ouncesValue * 0.0283495).toFixed(2)
  grams.value = (ouncesValue * 28.3495).toFixed(2)
}

function clearFields() {
  pounds.value = ""
  kilograms.value = ""
  grams.value = ""
  ounces.value = ""
}
