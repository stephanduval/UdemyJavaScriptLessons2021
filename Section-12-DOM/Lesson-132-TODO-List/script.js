var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

input.addEventListener('keypress', function(event) {
    console.log(event);

    if (input.value.length > 0 && event.keyCode == 13) {
      var li = document.createElement("li");
         li.appendChild(document.createTextNode(input.value));
         ul.appendChild(li);
        input.value = "";
    }

})



button.addEventListener("click", function() {
    console.log(input.value);
    if (input.value.length > 0) { 
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = "";
    }
})