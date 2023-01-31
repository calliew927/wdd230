function toggleMenu(){
    document.querySelector('#navbar').classList.toggle('menu-active')
    document.querySelector('#menu-close').classList.toggle('menu-active')
    document.querySelector('#menu-open').classList.toggle('menu-active')
}

document.querySelector('#ham-menu').addEventListener('click', toggleMenu);

let date = new Date();
let year = date.getFullYear();
document.querySelector('#currentYear').innerHTML = year


document.querySelector('#lastModified').textContent = document.lastModified