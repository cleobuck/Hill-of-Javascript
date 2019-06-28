/* becode/javascript
 *
 * /11-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.



document.getElementById('run').addEventListener('click',async function (){
    const heroes= await fetch('http://localhost:3000/heroes', {
        method: 'POST',
        headers :{"Accept": 'application/json',
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
        name:document.getElementById("hero-name").value,
        alterEgo:document.getElementById("hero-alter-ego").value,
        abilities:document.getElementById("hero-powers").value.split(", ")
        })
    })
    const content=await heroes.json();
    console.log(content)
})


