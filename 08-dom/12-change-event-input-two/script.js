/* becode/javascript
 *
 * /08-dom/12-change-event-input-two/script.js - 8.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    document.getElementById("pass-one").addEventListener("input", () => {

    
        let password = document.getElementById("pass-one");
        let digits = /[1-9]/g;
        let digitsNum = password.value.match(digits);
    
        if (password.value.length >= 8 && digitsNum.length >= 2) {
            document.getElementById("validity").innerHTML = "ok";
           
        }
        
    })
        
    
})();
