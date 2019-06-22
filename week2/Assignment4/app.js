const mainTitle = document.getElementById('mainTitle');
const intermediate = document.querySelector('.intermediate');

const resetCursor = (event) => {  
    event.target.style.cursor = "default";
}

mainTitle.addEventListener('click', (event) => {
    mainTitle.textContent = 'Have a good time!';
    resetCursor(event);
  });

intermediate.addEventListener('click', (event) => {
    event.target.parentNode.nextElementSibling.style.display = "block";
    resetCursor(event);
  });