/* becode/javascript
 *
 * /09-misc/05-worst-ui-three/script.js - 9.5: la pire interface (3) : phone slot
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

let buttons = document.querySelectorAll("button");
let target = document.getElementById("target")

buttons.forEach(($btn) => {
let intervalID
let input = document.getElementById($btn.id.slice(4));
let numberparts = document.querySelectorAll("input");

$btn.classList.add("start");

$btn.addEventListener("click", () => {

    let increment = () => {

        input.value++
        target.innerHTML = `+${numberparts[0].value}${numberparts[1].value}${numberparts[2].value}${numberparts[3].value}`
        if (input.value == input.dataset.max) {
            input.value = input.dataset.min
        }
        if (input.value < 10) {
            input.value = `0${input.value}`
            console.log(input.value)
        }

    }

    let start = () => {
        intervalID = setInterval(increment, 50)
    };

    let stop = () => {
        clearInterval(intervalID)
    }

    if ($btn.className == "start") {
        start();
        $btn.className = "stop"
        } else if ($btn.className == "stop") {
            stop()
            $btn.className = "start"
        }

    })

})







        
        
       
        
       
