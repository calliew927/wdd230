const chapter = document.querySelector('#favchap');
const button = document.querySelector('main button');
const chapList = document.querySelector('#list');

button.addEventListener('click', () => {
    if (chapter.value ==''){
        return;
    }
    let newListItem = document.createElement('li');

    let deleteButton = document.createElement('button');

    newListItem.textContent = chapter.value;

    deleteButton.textContent = '❌';

    newListItem.appendChild(deleteButton);

    chapList.appendChild(newListItem);

    deleteButton.addEventListener('click', () => {
        newListItem.remove();
    })

    chapter.focus();

    chapter.value = ''; 
})