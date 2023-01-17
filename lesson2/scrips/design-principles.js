//Year for footer
const today = new Date();
document.querySelector('#currentYear').textContent = today.getFullYear();

//last motified date
document.querySelector('#lastModified').textContent = document.lastModified;

