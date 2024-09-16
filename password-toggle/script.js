const name = document.querySelector("name")
const password = document.querySelector(".password")
const eye = document.querySelector(".eye")
const eyehide = document.querySelector(".eyehide")
password.value = "hello"
eye.onclick = () => {
  eyehide.classList.remove("hidden") // Show eyehide
  eye.classList.add("hidden") // Hide eye
  if (eye.classList.contains("hidden")) {
    password.type = "text"
  }
}

eyehide.onclick = () => {
  eye.classList.remove("hidden")
  eyehide.classList.add("hidden")
  if (!eye.classList.contains("hidden")) {
    password.type = "password"
  }
}

// eye.onclick = () => {
//   eye.classList.add('hidden');
//   eyehide.classList.remove('hidden');
//   password.setAttribute("type", "text");  // Show password
// }

// eyehide.onclick = () => {
//   eyehide.classList.add('hidden');
//   eye.classList.remove('hidden');
//   password.setAttribute("type", "password");  // Hide password
// }
