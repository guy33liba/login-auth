const number = document.querySelector(".number")
const btn = document.querySelector(".generate")
let hexcolor = document.querySelector(".hexcolor")
const generateNumber = () => {
  const randomnumber = Math.floor(Math.random() * 10 + 1)
  number.innerHTML = randomnumber
  randomcolor2 = Math.random().toString(16).substring(2, 8)
  document.body.style.backgroundColor = "#" + randomcolor2
  hexcolor.innerHTML = " #" + randomcolor2
}
btn.onclick = () => {
  generateNumber()
}