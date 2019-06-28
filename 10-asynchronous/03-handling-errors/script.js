/* becode/javascript
 *
 * /10-asynchronous/03-handling-errors/script.js - 10.3: gestion d'erreur
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    let callback = ((error, posts) => {

        for (index in posts) {
            console.log(post);
        }
       
    })
    
        
    document.getElementById("run").addEventListener("click", () => {
    
        window.lib.getPersons( (error, posts) => {
            
            if (error) {
                console.error("erreur");
            }
            else {
                console.log(posts);
            }
        
        })

    })
    
    


})();
