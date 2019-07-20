// DOM traversal — how to get access to specific DOM elements or groups of elements
const header = document.querySelector('header');
const blueButton = document.getElementById('color-button-blue');
const brownButton = document.getElementById('color-button-brown');
const greenButton = document.getElementById('color-button-green');
const noneButton = document.getElementById('color-button-none');
const addPostButton = document.getElementById('add-post');
const newSection = document.querySelector('section');
const removePostButton= document.getElementById('remove-post');

// DOM Functions
blueButton.addEventListener('click', () => {
   // DOM modification — modifying the content and styles of DOM elements, adding new elements, and replacing and removing existing elements 
  header.classList.remove('brown-background', 'green-background');
    header.classList.add('blue-background', 'text-white');
 
});


brownButton.addEventListener('click', () => {
  header.classList.remove('blue-background', 'green-background');
    header.classList.add('brown-background', 'text-white');
 
});



greenButton.addEventListener('click', () => {
  header.classList.remove('blue-background', 'brown-background');
    header.classList.add('green-background', 'text-white');
 
});


noneButton.addEventListener('click', () => {
  header.classList.remove( 'text-white','green-background','blue-background', 'brown-background');
    
 
});


addPostButton.addEventListener('click', () => {
  const newPost= createNewPost();
  newSection.appendChild(newPost);
    
 
});

removePostButton.addEventListener('click',() => {
const counter = newSection.childElementCount;

if(counter > 1) {
  newSection.removeChild(newSection.children[counter-1]);
}

});

function createNewPost () {
let newArticle = document.createElement('article');
let newHeading = document.createElement('h5');
let newParagraph = document.createElement('p');


newHeading.textContent = "Al PACINO and OSCATS";
newParagraph.textContent = ' Did you just see what I did there ,Al PACINO is one of the greatest actors of all time.winnig one OSCAR and 9 nominations..he is one of his kind';
newArticle.appendChild(newHeading);
newArticle.appendChild (newParagraph);

return newArticle;

}







