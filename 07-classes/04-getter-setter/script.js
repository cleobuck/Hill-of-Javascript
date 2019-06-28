/* becode/javascript
 *
 * /07-classes/04-getter-setter/script.js - 7.4: getter & setter
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {

document.getElementById("run").addEventListener("click", () => {

    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }
        get getName() {
            return this.firstName + " " + this.lastName;
        }
        set SetName(name) { 
            name = name.split(" ");
            this.firstName = name[0];
            this.lastName = name[1];
        }
    }
    
    let person1 = new Person("Cleo", "Buck")
    console.log(person1.getName);
    person1.SetName = "Lola Buck";
    console.log(person1.getName);
    


})


})();
