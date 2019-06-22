const mainTitle = document.getElementById('mainTitle');
const intermediate = document.querySelector('.intermediate');
const manu_btn = document.querySelector('.manu_btn');
const cross = document.querySelector('.cross');
const main_nav = document.querySelector('.main-nav');

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
    main_nav.style.display = "block";
    main_nav.style.position = "fixed";  
    main_nav.style.width = "35%";
    main_nav.style.height = "100%";
    main_nav.style.minWidth = "200px";
    main_nav.style.backgroundColor = "white";
    main_nav.style.top = "0";
    main_nav.style.right = "0";
    main_nav.style.textAlign = "left";
    for (i=0; i < main_nav.children.length; i++) {
      main_nav.children[i].style.display = "block";
      main_nav.children[i].style.margin = "1.8em 0"; 	
    };
    //main_nav.style.zIndex = "1";
  });

cross.addEventListener('click', (event) => {
    event.target.style.visibility = "hidden";
    event.target.previousElementSibling.style.visibility = "visible";
    main_nav.style.width = "auto"; 
    main_nav.style.backgroundColor = "transparent";
    main_nav.style.position = "static";
    for (i=0; i < main_nav.children.length; i++) {
        main_nav.children[i].style.display = "inline";
        main_nav.children[i].style.margin = "0";
    }
    main_nav.style.display = "none";
 
  });