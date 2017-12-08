//Prevent form submition
document.querySelector("#myForm").addEventListener("submit", function (event) {
    event.preventDefault();
})

//Variables and Nodes
let ls = window.localStorage;
let myList = document.querySelector("ul");  //Node to the <ul> element
myList.innerHTML = ls.getItem("todoList"); //Set the innerHtml of myList to the Html saved in storage

// Event listeners
document.querySelector("#sendbutton").addEventListener("click", function () {
   addItem();

})

document.addEventListener('click', function (event) {
    if (event.target.nodeName === "LI") {
        toggleDone(event.target);
    }
});

document.querySelector("#removedone").addEventListener("click", function (event) {
    let liArr = document.querySelectorAll("li")
    liArr.forEach(function (currentElement) {
        if (currentElement.style.textDecoration) {
            currentElement.remove();
        }
    })
    saveToLocalStorage(myList.innerHTML);
})

//Functions
function toggleDone(htmlElement) {
    if (!htmlElement.style.textDecoration) {
        htmlElement.style.textDecoration = "line-through"
    } else {
        htmlElement.style.textDecoration = ""
    }
    //save changes to local storage
    saveToLocalStorage(myList.innerHTML);
    console.log(myList.innerHTML)
}

function addItem() {
    //Add item to DOM 
    let content = document.querySelector("#inputtext").value;
    if (content) {
        let newItem = document.createElement("li");
       // let myList = document.querySelector("ul");  //Node to the <ul> element
        newItem.innerText = content;
        myList.appendChild(newItem);
        document.querySelector("#inputtext").value = "";
    }
    //Add item to localStorage
    saveToLocalStorage(myList.innerHTML);
    console.log(myList.innerHTML)

}

function saveToLocalStorage(html){
    ls.setItem("todoList", html)
}