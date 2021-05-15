var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var space = document.createTextNode(" ");

function inputLength() {
    return input.value.length
    }

function createListElement() {
    var li = document.createElement("li");
    var createDeleteButton = document.createElement("BUTTON");
    createDeleteButton.innerHTML = "Delete";

    //The Whole Beast:
    //document.createElement("li").appendChild(document.createTextNode(input.value))
    li.appendChild(document.createTextNode(input.value));
    li.appendChild(space);
    li.appendChild(createDeleteButton);
    li.setAttribute('id', input.value);

    li.onclick = function () {
        this.remove();
    };
    //The Whole Beast: 
    //document.querySelector("ul").appendChild(document.createElement("li"))
    ul.appendChild(li);  
    input.value = "";
}

function addListAfterClick() {
    if (inputLength() > 0) {
        createListElement();
    }
}

function AddListAfterEnterPress(event) {
        if (inputLength() > 0 && event.keyCode == 13) {
            createListElement();
        }
}



input.addEventListener('keypress', AddListAfterEnterPress); 
button.addEventListener("click", addListAfterClick); 
//document.getElementById(node).addEventListener("click", document.getElementById(node).remove());

/*
 * The two functions:
 *
 * input.addEventListener('keypress', AddListAfterEnterPress);
 * button.addEventListener("click", addListAfterClick);
 *
 * This is something called a callback function. When that line of javascript
 * runs, we don't want the addListAfterClick function to run because we are
 * just adding the event listener now to wait for click or keypress. We want
 * to let it know though that we want this action to happen when a click
 * happens. So the function now automatically gets run (gets added the ()) every time the click happens. So we are passing a reference to the function without running it.
 *
 */