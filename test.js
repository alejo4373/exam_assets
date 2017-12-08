//Node to link
let myList = document.querySelector("ul")

//Create new <li>
let myNewLi = document.createElement("li")
    myNewLi.id = "1";

//Create new <input> (checkbox)
let myNewCheckbox = document.createElement("input") 
    myNewCheckbox.id = "something"
    myNewCheckbox.type = "checkbox"
    myNewCheckbox.value = "done"

//Create new <label> (todo text)
let myNewLabel = document.createElement("label")
    myNewLabel.htmlFor = myNewCheckbox.id;
    myNewLabel.innerText = " " + "Go for a walk"; //empty space for prettiness because HTML adds an empty space to the beging of the innerText.

    myNewLi.appendChild(myNewCheckbox);
    myNewLi.appendChild(myNewLabel);
    myList.appendChild(myNewLi)

/*
    #<li> stated on HTML source
    childNodes: (5) [text, input#walk, text, label, text]
    children: (2) [input#walk, label, walk: input#walk]

    innerHTML: "<input id="something" type="checkbox" value="done"><label for="something"> Go for a walk</label>"
    innerText: " Go for a walk"

-------------------------------------------------------
    ##<li> created with function the above function
    childNodes: (2) [input#something, label]
    children: (2) [input#something, label, something: input#something]

    innerHTML: "<input id="something" type="checkbox" value="done"><label for="something">Go for a walk</label>"
    innerText :"Go for a walk"

*/