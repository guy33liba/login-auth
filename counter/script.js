const count = document.querySelector(".count")
const add = document.querySelector(".add")
const reset = document.querySelector(".reset")
const sub = document.querySelector(".substract")
const buttons = document.querySelector(".buttons")

buttons.addEventListener("click", (e) => {
  if (count.innerHTML > 0) {
    count.style.color = "green"
  } else if (count.innerHTML < 0) {
    count.style.color = "red"
  } else {
    count.style.color = "black"
  }
})

if (count.innerHTML == 0) {
  count.style.color = "black"
}
add.onclick = () => {
  count.innerHTML++
}
sub.onclick = () => {
  count.innerHTML--
}
reset.onclick = () => {
  count.innerHTML = 0
}
