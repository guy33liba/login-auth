const name = document.querySelector("name")
const password = document.querySelector("password")
const eye = document.querySelector(".eye")
const eyehide = document.querySelector(".eyehide")

eye.onclick = () => {
  eyehide.classList.remove("hidden")
  eye.classList.add("hidden")
}
eyehide.onclick = () => {
  eye.classList.remove("hidden")
  eyehide.classList.add("hidden")
}
