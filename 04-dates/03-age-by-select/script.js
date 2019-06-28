/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

    document.querySelector("#run").addEventListener("click", () => {
    let date = new Date();
    console.log(date);
    let day = document.querySelector("#dob-day").value;
    let month = document.querySelector("#dob-month").value;
    let year = document.querySelector("#dob-year").value;
    let age = date.getFullYear() - year;
    if (month>date.getMonth()+1) {
        age = age -1;
    } else if (month == date.getMonth() +1  && day> date.getDate() ) {
        age = age - 1
      
    }

    console.log(date.getDate())
    
    alert(`vous avez ${age} ans`)



    
    });




