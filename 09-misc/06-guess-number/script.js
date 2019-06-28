/* becode/javascript
 *
 * /09-misc/06-guess-number/script.js - 9.6: jeu : trouver un nombre
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {



let rightPrice =  {
    x: 0,
    randomNum: Math.floor(Math.random()*101),
    checkFunc() {
    let chosenNum = prompt("quel est le juste prix entre 0 et 100?")
        if (chosenNum>this.randomNum) {
            alert("plus bas!")
            this.x++
            console.log(this.x)
            this.checkFunc()

        } else if (chosenNum<this.randomNum) {
            alert("plus haut!")
            x++
            console.log(this.x)
            this.checkFunc()
            
        } else {
            alert(`Bravo, vous avez réussi en ${this.x} coups`)
        }
    },
    
}

rightPrice.checkFunc();
})();


