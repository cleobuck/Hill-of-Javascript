/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    
document.getElementById("run").addEventListener("click", () => {
    let randomArray = [];
    for ( i=1; i<=10 ; i++) {

        randomArray.push(Math.floor(Math.random()*100)+1);
    }
    
    randomArray.forEach( (elem) => {
        tdNumber = parseInt(randomArray.indexOf(elem))+1;
        document.getElementById(`n-${tdNumber}`).innerHTML = elem;
    })

    document.getElementById("min").innerHTML = Math.min(...randomArray);
    document.getElementById("max").innerHTML = Math.max(...randomArray);
    document.getElementById("sum").innerHTML = randomArray.reduce((a,b) => a +b, 0);
    document.getElementById("average").innerHTML = (randomArray.reduce((a,b) => a +b, 0))/randomArray.length;


    })






