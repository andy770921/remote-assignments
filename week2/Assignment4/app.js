const mainTitle = document.getElementById('mainTitle');
const intermediate = document.querySelector('.intermediate');
const manu_btn = document.querySelector('.manu_btn');
const cross = document.querySelector('.cross');

const resetCursor = (event) => {  
    event.target.style.cursor = "default";
};

mainTitle.addEventListener('click', (event) => {
    mainTitle.textContent = 'Have a good time!';
    resetCursor(event);
  });

intermediate.addEventListener('click', (event) => {
    event.target.parentNode.nextElementSibling.style.display = "block";
    resetCursor(event);
  });

manu_btn.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    event.target.nextElementSibling.style.visibility = "visible";
  });

cross.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    event.target.previousElementSibling.style.visibility = "visible";
  });