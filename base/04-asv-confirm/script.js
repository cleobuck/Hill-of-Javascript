/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let confirmFunc =  (() => {
    let age = prompt("quel est votre âge ?");
    let sexe = prompt("quel est votre sexe ?");
    let ville = prompt("quel est votre ville ?");
    let confirmation = confirm(`vous avez ${age} ans, vous êtes ${sexe} et vous habitez à ${ville}`);
    if (confirmation == false) {
        confirmFunc();
    } 
});

confirmFunc();
