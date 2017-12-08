//Node to link
let myList = document.querySelector("ul")

function buildElement() {
     //Create new <li>
     let myNewLi = document.createElement("li")
     myNewLi.id = index;

     //Create new <input> (checkbox)
     let myNewCheckbox = document.createElement("input") 
         myNewCheckbox.id = index + "checkbox";
         myNewCheckbox.type = "checkbox"
         myNewCheckbox.value = "done"

     //Create new <label> (todo text)
     let myNewLabel = document.createElement("label")
         myNewLabel.htmlFor = myNewCheckbox.id;
         myNewLabel.innerText = " " + content; //empty space for prettiness because HTML adds an empty space to the beging of the innerText.

     //Append to the DOM (render HTML)
     myNewLi.appendChild(myNewCheckbox);
     myNewLi.appendChild(myNewLabel);
     myList.appendChild(myNewLi)

}
buildElement()

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