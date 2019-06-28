/* becode/javascript
 *
 * /04-dates/02-title-by-hour-two/script.js - 4.2: texte en fonction de l'heure (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

   let date = new Date();
    let time = date.getHours();
    console.log(time);
    let minutes = date.getMinutes();
    console.log(minutes);
    let greeting = "Bonjour!";

    if (time>=17 && minutes>=30) {
        greeting = "Bonsoir!"
    }

    let target = document.getElementById("target");
    target.innerHTML = greeting;



})();
