let year = document.querySelector('#date')
let d = new Date()

year.innerHTML = d.getFullYear()

function toggleMenu() {
    document.getElementById("primaryNav").classList.toggle("open")
    document.getElementById("hamburgerBtn").classList.toggle("open")
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;