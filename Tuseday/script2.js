
// INLINE EVENT

function inlineFunction() {
    alert("Inline Event Triggered");
}

// CLICK EVENT

const clickBtn =document.getElementById("clickBtn");
clickBtn.addEventListener("click", () => {
    alert("Button Clicked");
});

// DOUBLE CLICK

const dblBtn =document.getElementById("dblBtn");
dblBtn.addEventListener("dblclick", () => {
    alert("Double Clicked");
});

// MOUSEOVER / MOUSEOUT

const hoverBox =document.getElementById("hoverBox");
hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "yellow";
});

hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "";
});

// KEYDOWN / KEYUP

const keyboardInput =document.getElementById("keyboardInput");
const keyOutput =document.getElementById("keyOutput");

keyboardInput.addEventListener("keydown",() => {
        keyOutput.innerText ="Key Down";
    });

keyboardInput.addEventListener("keyup",() => {
        keyOutput.innerText ="Key Up";
    });


// INPUT EVENT

const message =document.getElementById("message");

const count =document.getElementById("count");

message.addEventListener("input", () => {
    count.innerText =message.value.length;
});

// CHANGE EVENT

const country =document.getElementById("country");

country.addEventListener("change",() => {
        document.getElementById("selectedCountry").innerText =country.value;
    });

// FOCUS / BLUR

const focusInput =document.getElementById("focusInput");

focusInput.addEventListener("focus",() => {
        focusInput.style.backgroundColor ="lightgreen";
    });

focusInput.addEventListener("blur",() => {
        focusInput.style.backgroundColor ="";
    });

// FORM VALIDATION

const form =document.getElementById("registerForm");

form.addEventListener("submit",(event) => {

        // prevent page refresh
        event.preventDefault();
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        document.getElementById("password").value;
        const error =document.getElementById("errorMessage");
        error.innerText = "";

        if (name.trim() === "") {
            error.innerText ="Name is required";
            return;
        }

        const emailPattern =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            error.innerText ="Invalid Email";
            return;
        }
        if (password.length < 8) {
            error.innerText ="Password must be at least 8 characters";
            return;
        }
        alert("Form Submitted Successfully");
    }
);
// COLOR PICKER

const colorBox =document.getElementById("colorBox");
const swatches =document.querySelectorAll(".swatch");

swatches.forEach((swatch) => {
    swatch.addEventListener("click",() => {
        colorBox.style.backgroundColor =getComputedStyle(swatch).backgroundColor;
        }
    );
});

// EVENT BUBBLING

const parent = document.getElementById("parent");
const child =document.getElementById("child");

parent.addEventListener("click",() => {
        console.log("Parent Clicked");
    });

child.addEventListener("click",(event) => {
        console.log("Child Clicked");
        // stop bubbling
        event.stopPropagation();
    });

// EVENT CAPTURING

parent.addEventListener("click",() => {
        console.log("Capturing Parent");
    },
    true
);

// EVENT TARGET

document.addEventListener("click",(event) => {
        console.log("Clicked Element:",event.target);
    }
);

// EVENT DELEGATION

const taskInput =    document.getElementById("taskInput");
const addItemBtn =    document.getElementById("addItemBtn");
const taskList =    document.getElementById("taskList");

addItemBtn.addEventListener("click",() => {
        const text =taskInput.value.trim();
        if (!text) return;

        const li =    document.createElement("li");
        li.innerText = text;
        taskList.appendChild(li);
        taskInput.value = "";
    }
);

// One listener handles ALL li items
taskList.addEventListener("click",(event) => {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("completed");
        }
    }
);