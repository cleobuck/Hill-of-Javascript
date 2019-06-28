                                           // style //
// change colors
let td = document.getElementsByTagName("td");
let tdArray = Array.from(td)
for (let i=0 ; i < td.length; i++) {
    if (i%2 == 0) {
        td[i].style.backgroundColor = "#67c3d1";
    } else {
        td[i].style.backgroundColor = "#ffffff";
    }
}



                                        // links // 
let svg = document.getElementsByTagName("svg")[0]
let body = document.getElementsByTagName("body")[0];


body.addEventListener("click", (event) => {
    if (event.target.tagName == "TD") {
        
        for (let i = 0 ; i < td.length; i++) {
          if (td[i].childNodes[0] == svg) {
            td[i].removeChild(svg); 
          }
        }

            svg.style.fill = "#1f2121"
            svg.style.left = "10%"
            event.target.appendChild(svg);
            setTimeout( () => {
            body.style.opacity = "0.2";
            }, 1000)
         
        

        setTimeout( () => {
            let tdIndex = tdArray.indexOf(event.target)
            switch(tdIndex) {
                case 0:
                    window.location = "base/var-alert/index.html";
                    break;
                case 1:
                    window.location = "base/var-prompt/index.html";
                    break;
                case 2:
                    window.location = "base/03-prompt-if/index.html";
                    break;
                case 3:
                    window.location = "base/04-asv-confirm/index.html";
                    break;
                case 4:
                    window.location = "02-maths/01-calculator-one/index.html";
                    break;    
                case 5:
                    window.location = "02-maths/02-calculator-two/index.html";
                    break;   
                case 6:
                    window.location = "02-maths/03-even-square/index.html";
                    break;  
                case 7:
                    window.location = "02-maths/04-sort-numbers/index.html";
                    break;  
                case 8:
                    window.location = "02-maths/05-factorial/index.html";
                    break;  
                case 9:
                    window.location = "02-maths/06-fizzbuzz/index.html";
                    break;
                case 10:
                    window.location = "03-colors/01-change-bcg-one/index.html";
                    break;  
                case 11:
                    window.location = "03-colors/02-change-bcg-two/index.html";
                    break;  
                case 12:
                    window.location = "03-colors/03-change-bcg-three/index.html";
                    break;  
                case 13:
                    window.location = "04-dates/01-title-by-hour-one/index.html";
                    break;  
                 case 14:
                    window.location = "04-dates/02-title-by-hour-two/index.html";
                    break;  
                 case 15:
                    window.location = "04-dates/03-age-by-select/index.html";
                    break;  
                 case 16:
                    window.location = "04-dates/04-locale-date/index.html";
                    break;  
                 case 17:
                    window.location = "04-dates/05-get-spooky-fridays/index.html";
                    break;  
                case 18:
                    window.location = "05-arrays/01-get-element OK/index.html";
                    break;  
                case 19:
                    window.location = "05-arrays/02-manipulate-array/index.html";
                    break;  
                case 20:
                    window.location = "05-arrays/03-walk-one/index.html";
                    break;  
                case 21:
                    window.location = "05-arrays/04-walk-two/index.html";
                    break; 
                case 22:
                    window.location = "05-arrays/05-walk-three/index.html";
                    break;  
                case 23:
                    window.location = "05-arrays/06-find-in-array/index.html";
                    break;  
                case 24:
                    window.location = "05-arrays/07-filter-array/index.html";
                    break;  
                case 25:
                    window.location = "05-arrays/08-array-includes/index.html";
                    break;  
                case 26:
                    window.location = "05-arrays/09-rand-array-stats/index.html";
                    break;  
                case 27:
                    window.location = "05-arrays/10-reduce-array/index.html";
                    break;  
                case 28:
                    window.location = "05-arrays/11-dedupe-array/index.html";
                    break;  
                case 29:
                    window.location = "05-arrays/12-manipulate-set/index.html";
                    break;  
                case 30:
                    window.location = "05-arrays/13-find-in-set/index.html";
                    break;  
                case 31:
                    window.location = "05-arrays/14-bird-names-generator/index.html";
                    break;  
                case 32:
                    window.location = "06-objects/01-generate-object/index.html";
                    break;  
                case 33:
                    window.location = "06-objects/02-assign-properties/index.html";
                    break; 
                case 34:
                    window.location = "06-objects/03-keys-values/index.html";
                    break; 
                case 35:
                    window.location = "06-objects/04-from-entries/index.html";
                    break; 
                case 36:
                    window.location = "07-classes/01-instances/index.html";
                    break; 
                case 37:
                    window.location = "07-classes/02-methods/index.html";
                    break; 
                case 38:
                    window.location = "07-classes/03-inheritance/index.html";
                    break; 
                case 39:
                    window.location = "07-classes/04-getter-setter/index.html";
                    break; 
                case 40:
                    window.location = "08-dom/01-select-one/index.html";
                    break; 
                case 41:
                    window.location = "08-dom/02-select-two/index.html";
                    break; 
                case 42:
                    window.location = "08-dom/03-select-three/index.html";
                    break; 
                case 43:
                    window.location = "08-dom/04-attr-create/index.html";
                    break; 
                case 44:
                    window.location = "08-dom/05-hover-image/index.html";
                    break; 
                case 45:
                    window.location = "08-dom/06-mini-carousel/index.html";
                    break; 
                case 46:
                    window.location = "08-dom/07-generate-table-one/index.html";
                    break; 
                case 47:
                    window.location = "08-dom/08-generate-table-two/index.html";
                    break; 
                case 48:
                    window.location = "08-dom/09-match-password-one/index.html";
                    break; 
                case 49:
                    window.location = "08-dom/10-match-password-two/index.html";
                    break; 
                case 50:
                    window.location = "08-dom/11-change-event-input-one/index.html";
                    break; 
                case 51:
                    window.location = "08-dom/12-change-event-input-two/index.html";
                    break;
                case 52:
                    window.location = "08-dom/MOUSE AND KEYBOARD/index.html";
                    break; 
                case 53:
                    window.location = "09-misc/01-waving-text/index.html";
                    break; 
                case 54:
                    window.location = "09-misc/02-typewriter-effect/index.html";
                    break; 
                case 55:
                    window.location = "09-misc/03-worst-ui-one/index.html";
                    break; 
                case 56:
                    window.location = "09-misc/04-worst-ui-two/index.html";
                    break; 
                case 57:
                    window.location = "09-misc/05-worst-ui-three/index.html";
                    break; 
                case 58:
                    window.location = "09-misc/06-guess-number/index.html";
                    break; 
                case 59:
                    window.location = "09-misc/07-storage-clicker/index.html";
                    break; 
                case 60:
                    window.location = "09-misc/le pendu.odt";
                    break; 
                case 61:
                    window.location = "10-asynchronous/00-example";
                    break; 
                case 62:
                    window.location = "10-asynchronous/01-get-posts";
                    break; 
                case 63:
                    window.location = "10-asynchronous/02-get-comments";
                    break; 
                case 64:
                    window.location = "10-asynchronous/03-handling-errors";
                    break; 
                case 65:
                    window.location = "10-asynchronous/04-promise-get-posts";
                    break; 
                case 66:
                    window.location = "10-asynchronous/05-promise-get-comments";
                    break; 
                case 67:
                    window.location = "10-asynchronous/06-promise-handling-errors";
                    break; 
                case 68:
                    window.location = "10-asynchronous/07-async-get-posts";
                    break; 
                case 69:
                    window.location = "10-asynchronous/08-async-get-comments";
                    break; 
                case 70:
                    window.location = "10-asynchronous/09-async-handling-errors";
                    break; 
                case 71:
                    window.location = "11-fetch/01-list-to-console";
                    break;  
                case 72:
                    window.location = "11-fetch/02-list-to-template";
                    break; 
                case 73:
                    window.location = "11-fetch/03-details";
                    break; 
                case 74:
                    window.location = "11-fetch/04-add";
                    break; 
                case 75:
                    window.location = "11-fetch/05-delete";
                    break; 
                case 76:
                    window.location = "AJAX/ajax-simple-web-service-request-master/index.html";
                    break;
                case 77:
                    window.location = "AJAX/exercises 1/index.html";
                    break;
                
            }
        }, 2000)
    }
})


//                              /*hover*/

// body.addEventListener("mouseover", (event) => {
//     if (event.target.tagName == "TD") {
        
//             let tdIndex = tdArray.indexOf(event.target);
//             switch(tdIndex) {
//                 case 0:
//                 case 1:
//                 case 2:
//                 case 3:
//                     console.log("hello")
//                     tdArray[0].innerHTML = "B";
//                     tdArray[1].innerHTML = "A";
//                     tdArray[2].innerHTML = "S";
//                     tdArray[3].innerHTML = "E";
//                     break;
                // case 4:
                //     window.location = "02-maths/01-calculator-one/index.html";
                //     break;    
                // case 5:
                //     window.location = "02-maths/02-calculator-two/index.html";
                //     break;   
                // case 6:
                //     window.location = "02-maths/03-even-square/index.html";
                //     break;  
                // case 7:
                //     window.location = "02-maths/04-sort-numbers/index.html";
                //     break;  
                // case 8:
                //     window.location = "02-maths/05-factorial/index.html";
                //     break;  
                // case 9:
                //     window.location = "02-maths/06-fizzbuzz/index.html";
                //     break;
                // case 10:
                //     window.location = "03-colors/01-change-bcg-one/index.html";
                //     break;  
                // case 11:
                //     window.location = "03-colors/02-change-bcg-two/index.html";
                //     break;  
                // case 12:
                //     window.location = "03-colors/03-change-bcg-three/index.html";
                //     break;  
                // case 13:
                //     window.location = "04-dates/01-title-by-hour-one/index.html";
                //     break;  
                //  case 14:
                //     window.location = "04-dates/02-title-by-hour-two/index.html";
                //     break;  
                //  case 15:
                //     window.location = "04-dates/03-age-by-select/index.html";
                //     break;  
                //  case 16:
                //     window.location = "04-dates/04-locale-date/index.html";
                //     break;  
                //  case 17:
                //     window.location = "04-dates/05-get-spooky-fridays/index.html";
                //     break;  
                // case 18:
                //     window.location = "05-arrays/01-get-element OK/index.html";
                //     break;  
                // case 19:
                //     window.location = "05-arrays/02-manipulate-array/index.html";
                //     break;  
                // case 20:
                //     window.location = "05-arrays/03-walk-one/index.html";
                //     break;  
                // case 21:
                //     window.location = "05-arrays/04-walk-two/index.html";
                //     break; 
                // case 22:
                //     window.location = "05-arrays/05-walk-three/index.html";
                //     break;  
                // case 23:
                //     window.location = "05-arrays/06-find-in-array/index.html";
                //     break;  
                // case 24:
                //     window.location = "05-arrays/07-filter-array/index.html";
                //     break;  
                // case 25:
                //     window.location = "05-arrays/08-array-includes/index.html";
                //     break;  
                // case 26:
                //     window.location = "05-arrays/09-rand-array-stats/index.html";
                //     break;  
                // case 27:
                //     window.location = "05-arrays/10-reduce-array/index.html";
                //     break;  
                // case 28:
                //     window.location = "05-arrays/11-dedupe-array/index.html";
                //     break;  
                // case 29:
                //     window.location = "05-arrays/12-manipulate-set/index.html";
                //     break;  
                // case 30:
                //     window.location = "05-arrays/13-find-in-set/index.html";
                //     break;  
                // case 31:
                //     window.location = "05-arrays/14-bird-names-generator/index.html";
                //     break;  
                // case 32:
                //     window.location = "06-objects/01-generate-object/index.html";
                //     break;  
                // case 33:
                //     window.location = "06-objects/02-assign-properties/index.html";
                //     break; 
                // case 34:
                //     window.location = "06-objects/03-keys-values/index.html";
                //     break; 
                // case 35:
                //     window.location = "06-objects/04-from-entries/index.html";
                //     break; 
                // case 36:
                //     window.location = "07-classes/01-instances/index.html";
                //     break; 
                // case 37:
                //     window.location = "07-classes/02-methods/index.html";
                //     break; 
                // case 38:
                //     window.location = "07-classes/03-inheritance/index.html";
                //     break; 
                // case 39:
                //     window.location = "07-classes/04-getter-setter/index.html";
                //     break; 
                // case 40:
                //     window.location = "08-dom/01-select-one/index.html";
                //     break; 
                // case 41:
                //     window.location = "08-dom/02-select-two/index.html";
                //     break; 
                // case 42:
                //     window.location = "08-dom/03-select-three/index.html";
                //     break; 
                // case 43:
                //     window.location = "08-dom/04-attr-create/index.html";
                //     break; 
                // case 44:
                //     window.location = "08-dom/05-hover-image/index.html";
                //     break; 
                // case 45:
                //     window.location = "08-dom/06-mini-carousel/index.html";
                //     break; 
                // case 46:
                //     window.location = "08-dom/07-generate-table-one/index.html";
                //     break; 
                // case 47:
                //     window.location = "08-dom/08-generate-table-two/index.html";
                //     break; 
                // case 48:
                //     window.location = "08-dom/09-match-password-one/index.html";
                //     break; 
                // case 49:
                //     window.location = "08-dom/10-match-password-two/index.html";
                //     break; 
                // case 50:
                //     window.location = "08-dom/11-change-event-input-one/index.html";
                //     break; 
                // case 51:
                //     window.location = "08-dom/12-change-event-input-two/index.html";
                //     break;
                // case 52:
                //     window.location = "08-dom/MOUSE AND KEYBOARD/index.html";
                //     break; 
                // case 53:
                //     window.location = "09-misc/01-waving-text/index.html";
                //     break; 
                // case 54:
                //     window.location = "09-misc/02-typewriter-effect/index.html";
                //     break; 
                // case 55:
                //     window.location = "09-misc/03-worst-ui-one/index.html";
                //     break; 
                // case 56:
                //     window.location = "09-misc/04-worst-ui-two/index.html";
                //     break; 
                // case 57:
                //     window.location = "09-misc/05-worst-ui-three/index.html";
                //     break; 
                // case 58:
                //     window.location = "09-misc/06-guess-number/index.html";
                //     break; 
                // case 59:
                //     window.location = "09-misc/07-storage-clicker/index.html";
                //     break; 
                // case 60:
                //     window.location = "09-misc/le pendu.odt";
                //     break; 
                // case 61:
                //     window.location = "10-asynchronous/00-example";
                //     break; 
                // case 62:
                //     window.location = "10-asynchronous/01-get-posts";
                //     break; 
                // case 63:
                //     window.location = "10-asynchronous/02-get-comments";
                //     break; 
                // case 64:
                //     window.location = "10-asynchronous/03-handling-errors";
                //     break; 
                // case 65:
                //     window.location = "10-asynchronous/04-promise-get-posts";
                //     break; 
                // case 66:
                //     window.location = "10-asynchronous/05-promise-get-comments";
                //     break; 
                // case 67:
                //     window.location = "10-asynchronous/06-promise-handling-errors";
                //     break; 
                // case 68:
                //     window.location = "10-asynchronous/07-async-get-posts";
                //     break; 
                // case 69:
                //     window.location = "10-asynchronous/08-async-get-comments";
                //     break; 
                // case 70:
                //     window.location = "10-asynchronous/09-async-handling-errors";
                //     break; 
                // case 71:
                //     window.location = "11-fetch/01-list-to-console";
                //     break;  
                // case 72:
                //     window.location = "11-fetch/02-list-to-template";
                //     break; 
                // case 73:
                //     window.location = "11-fetch/03-details";
                //     break; 
                // case 74:
                //     window.location = "11-fetch/04-add";
                //     break; 
//                 // case 75:
//                 //     window.location = "11-fetch/05-delete";
//                 //     break; 
//                 // case 76:
//                 //     window.location = "AJAX/ajax-simple-web-service-request-master/index.html";
//                 //     break;
//                 // case 77:
//                 //     window.location = "AJAX/exercises 1/index.html";
//                 //     break;
                
//             }
     
//     }
// })