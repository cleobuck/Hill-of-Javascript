/* becode/javascript
 *
 * /09-misc/02-typewriter-effect/script.js - 9.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
   
    
    
    let target = document.getElementById("target")
    let phrase = "Je suis un texte qui va apparaître dans un effet 'machine à écrire', un peu comme dans les films noirs. Sauf que... je ne sais pas qui est l'assassin ! Y en a-t-il vraiment un ? Habite-t-il au 21 ? Que de mystères !"
    let time = 500;

    for ( i = 0; i < phrase.length ; i++ ) {

        let span = document.createElement("span");
        span.append(document.createTextNode(phrase[i]))

        setTimeout(function() {
            
            target.append(span);
        }, time)
        console.log(time)
        let delay = Math.floor(Math.random()*500)
        time = time + delay;
    }




})();

