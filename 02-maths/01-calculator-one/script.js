/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

 (() => {

    document.getElementById("addition").addEventListener("click", () => {
        let op1 =  parseInt(document.getElementById("op-one").value);
        let op2 =  parseInt(document.getElementById("op-two").value);
        let result = op1+op2; 
        alert(result);
    });

    document.getElementById("substraction").addEventListener("click", () => {
        let op1 =  parseInt(document.getElementById("op-one").value);
        let op2 =  parseInt(document.getElementById("op-two").value);
        let result = op1-op2; 
        alert(result);
    });

    document.getElementById("multiplication").addEventListener("click", () => {
        let op1 =  parseInt(document.getElementById("op-one").value);
        let op2 =  parseInt(document.getElementById("op-two").value);
        let result = op1*op2; 
        alert(result);
        
    });

    document.getElementById("division").addEventListener("click", () => {
        let op1 =  parseInt(document.getElementById("op-one").value);
        let op2 =  parseInt(document.getElementById("op-two").value);
        let result = op1/op2; 
        alert(result);

    });


})();
