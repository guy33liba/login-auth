

// const modal = document.querySelector(".modal")
// const btn = document.querySelector(".btn")
// const closed = document.querySelector(".close")
// btn.addEventListener("click", openModal)
// closed.onclick = () => {
//   closeModal()
// }
// modal.onclick = () => {}

// function openModal(e) {
//   console.log(btn)
//   e.preventDefault()
//   modal.style.display = "block"
// }

// function closeModal(e) {
//   modal.style.display = "none"
// }
// console.log(btn)

const btn = document.querySelector(".btn")
const result = document.querySelector(".result")

btn.addEventListener("click", palindrome)

//madam
//noon

function palindrome() {
  const word = document.querySelector(".input-text").value
  let len = word.length

  let start = word.substring(0, Math.floor(len / 2)).toLowerCase()
  let end = word.substring(len - Math.floor(len / 2)).toLowerCase()

  let flip = [...end].reverse().join("")
  alert(flip)
  if (start == flip) {
    result.innerHTML = `${word.toUpperCase()} is a palindrome`
  } else {
    result.innerHTML = `${word.toUpperCase()} is not a palindrome`
  }
  console.log(word)
}
