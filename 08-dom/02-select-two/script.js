/* becode/javascript
 *
 * /08-dom/02-select-two/script.js - 8.2: sélection par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    let x = document.getElementsByTagName("p");
    
    for ( i=0 ; i<x.length ; i++) {

       if (x[i].className == "target") {
           x[i].innerHTML = "owned";
       }
    }
    
   
})();
