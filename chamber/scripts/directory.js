var grid = document.querySelector('#directory-grid');
var list = document.querySelector('#directory-list');
var directoryData = document.querySelector('#directory-data');
 
grid.addEventListener('click', ()=>{
    if (!grid.classList.contains('active')){    
        grid.classList.add('active');
        list.classList.remove('active');
        directoryData.classList.add('directory-cards')
        directoryData.classList.remove('directory-list')
    }
});

list.addEventListener('click', ()=>{
    if (!list.classList.contains('active')){
        list.classList.add('active');
        grid.classList.remove('active');
        directoryData.classList.add('directory-list')
        directoryData.classList.remove('directory-cards')
    }
});

const url = "./data/data.json";

const displayBus = (businesss) => {
  const cards = document.querySelector(".directory-cards");

  businesss.forEach((business) => {
    let card = document.createElement("section");
    card.innerHTML = `
    <img src="${business.icon}">
    <p>${business.name}</p>
    <p>${business.address}</p>
    <p>${business.city}</p>
    <p>${business.phoneNumber}</p>
    <p><a href="${business.websiteUrl}">${business.webShort}</a></p>
    `;

    cards.appendChild(card);
  });
  
};

async function getBusinessData() {
  const response = await fetch(url);
  if (response.ok) {
    const data = await response.json();
    displayBus(data.Companies);
  } else {
    console.error("There was an error loading the directory data.");
    const cards = document.querySelector("directory-cards");
    cards.innerHTML = "<section><h1>There was an error loading the dierectory data, please try again later.</h1></section>";
  }
}

getBusinessData();