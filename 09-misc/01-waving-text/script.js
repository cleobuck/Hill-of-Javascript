/* becode/javascript
 *
 * /09-misc/01-waving-text/script.js - 9.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.querySelector("html").style.lineHeight = "100px";

let time = 50;
let size = 20;
let text ="Woo-hoo ! Je fais des vagues!"
for ( i = 0; i<text.length ; i++) {
    let parentElem = document.querySelector(".material")
    let letterContainer = document.createElement("span")
    let letter = document.createTextNode(text[i])
    letterContainer.appendChild(letter);
    parentElem.appendChild(letterContainer);
    let halfwayLength = Math.floor(text.length/2)
    if (i<halfwayLength && text[i]!=" ") {
        setTimeout(function() {
            letterContainer.style.fontSize = `${size}px`;
            size = size + 3;
        }, time)
        time = time + 50;
    } else if (text[i]!= " ") {
        setTimeout(function() {
            letterContainer.style.fontSize = `${size}px`;
            size = size - 3;
        }, time)
        time = time + 50
    }
    

}





