// Get references to DOM elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// Define an array to store favorite chapters
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters
chaptersArray.forEach(chapter => {
  displayList(chapter);
});

// Button click event listener
button.addEventListener('click', () => {
  if (input.value !== '') {
    displayList(input.value);
    chaptersArray.push(input.value);
    setChapterList();
    input.value = '';
    input.focus();
  }
});

// Display list function
function displayList(item) {
  const li = document.createElement('li');
  li.textContent = item;
  
  const deleteBtn = document.createElement('span');
  deleteBtn.textContent = '❌';
  deleteBtn.classList.add('delete-btn');
  deleteBtn.addEventListener('click', () => {
    deleteChapter(item);
    li.remove();
  });
  
  li.appendChild(deleteBtn);
  list.appendChild(li);
}

// Set chapters list function
function setChapterList() {
  localStorage.setItem('chapters', JSON.stringify(chaptersArray));
}

// Get chapters list function
function getChapterList() {
  return JSON.parse(localStorage.getItem('chapters'));
}

// Delete chapter function
function deleteChapter(chapter) {
  chapter = chapter.slice(0, chapter.length - 1);
  chaptersArray = chaptersArray.filter(item => item !== chapter);
  setChapterList();
}