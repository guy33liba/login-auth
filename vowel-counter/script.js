const btn = document.querySelector(".btn")
const word = document.querySelector(".input-text")
const result = document.querySelector(".result")

btn.addEventListener("click", () => {
  let wordval = word.value.toLowerCase()
  let valcount = 0

  for (let i = 0; i < wordval.length; i++) {
    let letter = wordval[i]
    if (letter.match(/[a,e,i,o,u]/)) {
      valcount++
    }
  }
  result.innerHTML = wordval + " number of letters " + valcount
})
