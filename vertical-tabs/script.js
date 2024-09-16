const tablinks = document.querySelectorAll(".tab-link")
const allContent = document.querySelector(".result")

for (let i = 0; i < tablinks.length; i++) {
  tablinks[i].addEventListener("click", (e) => {
    const current = tablinks[i].classList.add("active")
    current[0].className = current[0].className.replace("active", "")
    this.className += "active"
  })
}
