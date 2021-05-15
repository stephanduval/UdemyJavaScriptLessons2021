var colour1 = document.querySelector(".colour1");
var colour2 = document.querySelector(".colour2");
var colourHeading = document.querySelector("h3");
var body = document.getElementById("body");

function setGradient(){
    body.style.background =
        "linear-gradient(to right, "
        + colour1.value
        + ", "
        + colour2.value
        + ")";

    /* operates similarly to
     * colourHeading.innerHTML = body.style.background + ";";
     */
    colourHeading.textContent = body.style.background + ";";


}


/* We don't write setGradient() so that the function is called every
 * time the Eventlistener is triggered
 */

 
colour1.addEventListener("input", setGradient)

colour2.addEventListener("input", setGradient)


/* Console Tests
 * console.log(colourHeading);
 * console.log(colour1);
 * console.log(colour2);
 * 
 * 
*/

 