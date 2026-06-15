                                    // SELECTING ELEMENTS   


// getElementById
const title = document.getElementById("title");

// querySelector (first matching element)
const contentBox = document.querySelector("#contentBox");

// querySelectorAll (all matching elements)
const paragraphs = document.querySelectorAll(".demo");

// getElementsByClassName
const demoElements =document.getElementsByClassName("demo");

console.log(title);
console.log(contentBox);
console.log(paragraphs);
console.log(demoElements);


                                    // MODIFYING CONTENT

// innerText
title.innerText ="DOM Manipulation Practice";

// textContent
contentBox.textContent ="Changed using textContent";

// innerHTML
contentBox.innerHTML ="<strong>Changed using innerHTML</strong>";



                                    // MODIFYING ATTRIBUTES

const image =document.getElementById("myImage");

// Change image source
image.setAttribute("src","1.jpg");

// Get attribute value
console.log(image.getAttribute("src"));

// Remove attribute
image.removeAttribute("alt");



                                        // MODIFYING STYLES

// Direct CSS styling
title.style.color = "blue";
title.style.backgroundColor = "#eee";
title.style.padding = "10px";


                                        // CLASSLIST METHODS


// Add class
contentBox.classList.add("highlight");

// Check if class exists
console.log(contentBox.classList.contains("highlight"));

// Remove class after 3 seconds
setTimeout(() => {
    contentBox.classList.remove("highlight");
}, 3000);

// Toggle class after 5 seconds
setTimeout(() => {
    contentBox.classList.toggle("highlight");
}, 5000);


                                    // LOOP THROUGH querySelectorAll


paragraphs.forEach((para) => {
    para.style.color = "green";
});



                                    // CREATE ELEMENT


const newParagraph =document.createElement("p");

newParagraph.innerText = "This paragraph was created using createElement()";



                                    // APPENDCHILD


document.body.appendChild(newParagraph);



                                    // APPEND


const appendText =document.createElement("p");

appendText.innerText ="Added using append()";

document.body.append(appendText);



                                    // PREPEND


const topHeading =document.createElement("h2");

topHeading.innerText ="Added using prepend()";

document.body.prepend(topHeading);



                                    // INSERT BEFORE


const list =document.getElementById("taskList");

const sampleItem =document.createElement("li");

sampleItem.innerText ="Inserted using insertBefore()";

// Create first child so insertBefore works
const firstChild =document.createElement("li");

firstChild.innerText ="Existing Item";

list.appendChild(firstChild);

// Insert before first child
list.insertBefore(
    sampleItem,
    firstChild
);



// REMOVE()


const removeExample =document.createElement("p");

removeExample.innerText ="This will be removed in 4 seconds";

document.body.appendChild(removeExample);

setTimeout(() => {       
    removeExample.remove();
}, 4000);


// REMOVECHILD()

const parentDiv =document.createElement("div");

const childPara =document.createElement("p");

childPara.innerText ="removeChild Example";

parentDiv.appendChild(childPara);

document.body.appendChild(parentDiv);

setTimeout(() => {
    parentDiv.removeChild(childPara);
}, 6000);


// TODO LIST PROJECT

const taskInput =document.getElementById("taskInput");
const addTaskBtn =document.getElementById("addTaskBtn");

addTaskBtn.addEventListener("click", () => {

    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Enter a task");
        return;
    }
    // Create task item
    const li = document.createElement("li");
    li.classList.add("task-item");

    // Task text
    const taskSpan =document.createElement("span");
    taskSpan.innerText = taskText;

    // Complete button
    const completeBtn =document.createElement("button");
        completeBtn.innerText ="Complete";
        completeBtn.addEventListener("click",() => {
            taskSpan.classList.toggle("completed");
        });

    // Delete button
    const deleteBtn =
        document.createElement("button");
        deleteBtn.innerText ="Delete";
        deleteBtn.addEventListener("click",() => {
            li.remove();
        });

    li.append(taskSpan,completeBtn,deleteBtn);
    list.appendChild(li);
    taskInput.value = "";
});


// CHARACTER COUNTER

const messageBox =document.getElementById("messageBox");
const charCount =document.getElementById("charCount");

// Update count while typing
messageBox.addEventListener("input",() => {
        charCount.innerText =messageBox.value.length;
    }
);