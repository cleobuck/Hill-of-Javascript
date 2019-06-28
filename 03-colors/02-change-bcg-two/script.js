/* becode/javascript
 *
 * /03-colors/02-change-bcg-two/script.js - 3.2: couleur de fond (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


 
document.getElementById("run").addEventListener("click", () => {

    //get input value
    let input = document.querySelector("input").value;
    let body = document.querySelector("body");

    // link input to bgcolor 

    switch(true) {

        case (input == "yellow"):
        body.style.backgroundColor = "yellow";
        break;
        case (input == "blue"):
        body.style.backgroundColor = "blue";
        break;
        case (input == "azure"):
        body.style.backgroundColor = "azure";
        break;
        case (input == "bisque"):
        body.style.backgroundColor = "Bisque";
        break;
        case (input == "burlywood"):
        body.style.backgroundColor = "burlywood";
        break;
        case (input == "red"):
        body.style.backgroundColor = "red";
        break;
        case (input == "chocolate"):
        body.style.backgroundColor = "chocolate";
        break;
        case (input == "darkolivegreen"):
        body.style.backgroundColor = "darkolivegreen";
        break;
        defaut:
        body.style.backgroundColor = "black";
        break;

    }

});





