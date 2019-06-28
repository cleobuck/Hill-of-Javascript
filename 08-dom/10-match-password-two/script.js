/* becode/javascript
 *
 * /08-dom/10-match-password-two/script.js - 8.10: vérification de mots de passe (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
 
    document.getElementById("run").addEventListener("click", () => {

        let password1 = document.getElementById("pass-one");
        console.log(password1)
        let password2 = document.getElementById("pass-two");
    
        if (password1.value != password2.value) {
    
            let input = document.getElementsByTagName("input");
            for ( i =0 ; i< input.length; i++) {
                input[i].setAttribute("class", "error")
            }
    
    
        }
    



})

})();
