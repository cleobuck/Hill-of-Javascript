/* becode/javascript
 *
 * /11-fetch/02-list-to-template/script.js - 11.2: liste vers template
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

    let target = document.getElementById('target')
    




    fetch("http://localhost:3000/heroes")
    .then(function(resp) {
        return resp.json();
    })
    .then(function(data) {
        
        data.forEach( elem => {
           let section = document.createElement("section");
           let h1 = document.createElement("h1")
           let p = document.createElement("p")
           h1.appendChild(document.createTextNode(`${elem.id}: ${elem.name}`));
           p.appendChild(document.createTextNode(`His alter-ego is ${elem.alterEgo} and his two abilities are ${elem.abilities[0]} and ${elem.abilities[1]} `));
           section.appendChild(h1)
           section.appendChild(p)
           target.appendChild(section)
        })

    })


})();
