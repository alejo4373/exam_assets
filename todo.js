//Nodes
let theList = document.querySelector("#thelist");  //Node to the <ul> element
let todo = document.querySelector("#todotext");

document.querySelector("#myForm").addEventListener("submit", function (event) {
    event.preventDefault(); //Prevent form submition (refresh page)
    addItemToDom(todo.value);
    todo.value = ''
})

document.addEventListener('click', function (event) {
    if (event.target.nodeName === "LI") {
        removeTodo(event.target);
    }
});

//Functions
function removeTodo(node) {
   theList.removeChild(node); 
}

function addItemToDom(title) {
    if (title) {
            //Create new <li>
            let myNewLi = document.createElement("li")
            myNewLi.innerText = " " + title; //empty space for prettiness because HTML adds an empty space to the beging of the innerText.

            //Append to the DOM (render HTML)
            theList.appendChild(myNewLi);

  } else {
      window.alert("Please insert some text first")
  }
}
