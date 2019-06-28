


// ex 1: squares disappear 


let squares = document.querySelectorAll(".hoverMe");




squares.forEach(function(elem) {
    elem.addEventListener("mouseover", function() {
       elem.classList.remove("hoverMe");
    });
});

// ex 2: squares reappear when one div


let reset = document.querySelector("#reset");



reset.addEventListener("mouseover", function() {
    squares.forEach(function(elem) {
        elem.classList.add('hoverMe');
    });
});

// ex 3: 


let pageX = document.querySelector("#axe-x");
let pageY = document.querySelector("#axe-y");

function Coordinates(event) {
  pageX.innerText = event.pageX;
  pageY.innerText = event.pageY;
}

document.addEventListener("mousemove", Coordinates);


// -------------------------keyboard


// ex 1: 

let character = document.querySelector("#character");

let changeColor = function(event) {
    x = event.code.substring(event.code.length-1);
       
    switch(x) {
        case "0":
        character.style.backgroundColor = "green"; 
          break;
        case "1":
        character.style.backgroundColor = "yellow"; 
          break;
        case "2":
        character.style.backgroundColor = "red"; 
          break;
        case "3":
        character.style.backgroundColor = "aqua"; 
          break;
        case "4":
        character.style.backgroundColor = "chocolate"; 
          break;
        case "5":
        character.style.backgroundColor = "chartreuse"; 
          break;
        case "6":
        character.style.backgroundColor = "cyan"; 
          break;
        case "7":
        character.style.backgroundColor = "coral"; 
          break;
        case "8":
        character.style.backgroundColor = "darkred"; 
          break;
        case "9":
        character.style.backgroundColor = "darkorange"; 
          break;
        default:
        character.style.backgroundColor = "darkgreen"; 
    
      };
    
    }

window.addEventListener("keypress", changeColor);



// ex 2: 


let up = document.querySelector("#up");
let down = document.querySelector("#down");
let left = document.querySelector("#left");
let right = document.querySelector("#right");


let addHighlight= function(event) {
 x =  event.code;
 switch(x) {
    case "ArrowUp": 
      up.classList.add("highlight");
      break;
    case "ArrowDown":
      down.classList.add("highlight");
      break;
    case "ArrowLeft":
      left.classList.add("highlight");
      break;
    case "ArrowRight":
      right.classList.add("highlight");
      break;
 }
}

let removeHighlight= function(event) {
  x =  event.code;
  switch(x) {
     case "ArrowUp": 
       up.classList.remove("highlight");
       break;
     case "ArrowDown":
       down.classList.remove("highlight");
       break;
     case "ArrowLeft":
       left.classList.remove("highlight");
       break;
     case "ArrowRight":
       right.classList.remove("highlight");
       break;
  }
 }

window.addEventListener("keydown", addHighlight);
window.addEventListener("keyup", removeHighlight);













