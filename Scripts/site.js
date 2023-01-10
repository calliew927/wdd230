//Year for footer
const today = new Date();
document.querySelector('#currentyear').textContent = today.getFullYear();

//last motified date
document.querySelector('#lastmodified').textContent = document.lastModified;

