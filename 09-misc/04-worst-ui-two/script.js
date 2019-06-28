/* becode/javascript
 *
 * /09-misc/04-worst-ui-two/script.js - 9.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.




let buttons = document.getElementsByTagName("button");
let target = document.getElementById("target");
 
let increment = (id) => {
    
   
    let elem = document.getElementById(id);
    console

    let count = elem.innerHTML - elem.dataset.min;
    

    if (elem.innerHTML == elem.dataset.max) {
       elem.innerHTML = elem.dataset.min
    } 
    
  
    elem.innerHTML++;

    if (elem.innerHTML < 10) {

        elem.innerHTML = "0" + elem.innerHTML;
 
    }

    target.innerHTML = `+${buttons[0].innerHTML}${buttons[1].innerHTML}${buttons[2].innerHTML}${buttons[3].innerHTML} `


}



    Array.from(document.querySelectorAll("button")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (increment($btn.id)),
        ))