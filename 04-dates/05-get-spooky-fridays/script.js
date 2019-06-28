/* becode/javascript
 *
 * /04-dates/05-get-spooky-fridays/script.js - 4.5: calcul des vendredi 13
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", () => {

    let date = new Date(document.getElementById("year").value, 0, 1);
    console.log(date.start);
    let end =  new Date(date);
    end.setFullYear(date.getFullYear() + 1);
    
    while(date < end) {
        date.setDate(date.getDate() + 1)
         let options = {month:"long", year:"numeric"};
         if (date.getDate() == 13 && date.getDay() == 5) {
            console.log(new Intl.DateTimeFormat('en-GB', options).format(date));
        } 
    };
});

