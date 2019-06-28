/* becode/javascript
 *
 * /08-dom/05-hover-image/script.js - 8.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {


    let img = document.getElementsByTagName("img");
    let start = img[0].getAttribute("src");

    img[0].addEventListener("mouseover", () => {
        img[0].setAttribute("src", img[0].getAttribute("data-hover"))
    })

    img[0].addEventListener("mouseout", () => {
        img[0].setAttribute("src", start)
    })
    
})();
