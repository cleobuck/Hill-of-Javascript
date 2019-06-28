/* becode/javascript
 *
 * /03-colors/01-change-bcg-one/script.js - 3.1: couleur de fond (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let buttonArray = document.querySelectorAll("button");

    buttonArray.forEach( (elem) => {

        elem.addEventListener("click", () => {
        switch(elem.id){
            case "red": 
                elem.style.backgroundColor = "red";
                break;
            case "green": 
                elem.style.backgroundColor = "green";
                break;
            case "yellow": 
                elem.style.backgroundColor = "yellow";
                break;
            case "blue": 
                elem.style.backgroundColor = "blue";
                break;
            }

        });

    });

        



    
})();
