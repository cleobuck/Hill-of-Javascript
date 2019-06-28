/* becode/javascript
 *
 * /08-dom/04-attr-create/script.js - 8.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let dataImage = document.getElementById("source").getAttribute("data-image");
    let target = document.getElementById("target")
    let img = document.createElement("img");
    let node = document.createTextNode(dataImage);
    target.appendChild(img);
    target.appendChild(node);
    let source = document.getElementById("source");
    source.parentNode.removeChild(source);



})();


/* Crée ensuite une balise image dans 
la balise d'id "target" qui affichera cette valeur. Enfin, 
supprime la balise source. */