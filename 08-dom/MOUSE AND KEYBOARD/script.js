


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
let body = document.getElementsByTagName("body")[0]

let changeColor = function(event) {
    x = event.code.substring(event.code.length-1);
       
    switch(x) {
        case "0":
        body.style.backgroundColor = "#71d4fd"; 
          break;
        case "1":
        body.style.backgroundColor = "#354a54"; 
          break;
        case "2":
        body.style.backgroundColor = "#98afba"; 
          break;
        case "3":
        body.style.backgroundColor = "#98afba"; 
          break;
        case "4":
        body.style.backgroundColor = "#b9885b"; 
          break;
        case "5":
        body.style.backgroundColor = "#354a54"; 
          break;
        case "6":
        body.style.backgroundColor = "#fa8d99"; 
          break;
        case "7":
        body.style.backgroundColor = "#b9885b"; 
          break;
        case "8":
        body.style.backgroundColor = "#98afba"; 
          break;
        case "9":
        body.style.backgroundColor = "#71d4fd"; 
          break;
        default:
        body.style.backgroundColor = "#55c181"; 
    
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














