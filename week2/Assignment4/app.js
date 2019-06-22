const mainTitle = document.getElementById('mainTitle');

const resetCursor = (event) => {  
    event.target.style.cursor = "default";
}

mainTitle.addEventListener('click', (event) => {
    mainTitle.textContent = 'Have a good time!';
    resetCursor(event);
  });