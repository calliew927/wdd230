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

const fulldate = new Intl.DateTimeFormat('en-US', { dateStyle: 'full' }).format( new Date() );
document.querySelector('#current-date').textContent = fulldate;

//document.querySelector('.join').addEventListener('click', window.location.href='calliew927.github.io/wdd230/chamber/join.html');