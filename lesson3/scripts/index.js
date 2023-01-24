function toggleMenu(){
    document.querySelector('#navbar').classList.toggle('menu-active')
    document.querySelector('#menu-cloes').classList.toggle('menu-active')
    document.querySelector('#menu-open').classList.toggle('menu-active')
}

document.querySelector('#ham-menu').onclick = toggleMenu;