// Event handlingin JS
// Drawback - ek event ko ek baar likhke ek hi baar handle kar sakte hai

let btn1 = document.querySelector("#btn1");

btn1.onclick =  () => {
    
    console.log("btn1 was clicked"); // action1
    let a = 25;
    a++;
    console.log(a); //action2
}

// if an event is handled in both ways, inline as well as in js then the js one is give priority
// one event can't be handled more than once or else the event gets overwritten by the most recent one 

// Event object - a special object that has details about the event.
// All event handlers have access to the Event Object's properties and methods

let btn2 = document.querySelector("#btn2");

// btn2.onclick =  (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

let div = document.querySelector("div");

div.onmouseover =  (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX, evt.clientY);
}

// Event Listeners

// Add Event Listeners

btn2.addEventListener("click", (evt) => {
    console.log("btn2 was clicked - handler 1");
    // console.log(evt);
    // console.log(evt.type);
    // console.log(evt.target);
    // console.log(evt.clientX, evt.clientY);
})

btn2.addEventListener("click", () => {
    console.log("btn2 was clicked - handler 2");
})

const handler3 = () => {
    console.log("btn2 was clicked - handler 3");
}
btn2.addEventListener("click", handler3);

btn2.addEventListener("click", () => {
    console.log("btn2 was clicked - handler 4");
})

// Remove Event Listeners 
// node.addEventListener(event, callback)
// node.removeEventListener(event, callback)
// Note: the callback refence should be same to remove

btn2.removeEventListener("click", handler3);


// Practice
// Create a toggle button that changes the screen to dark mode when clicked ans light mode when clicked again

let modebtn = document.querySelector("#mode");
let currMode = "light";

// let body = document.querySelector("body");

modebtn.addEventListener("click", () => {
    // console.log("You are trying to change mode");
    if(currMode == "light"){
        currMode = "dark";
        // body.classList.add("dark");
        document.querySelector("body").style.backgroundColor = "black";
    }
    else{
        currMode = "light";
        // body.classList.add("light");
        document.querySelector("body").style.backgroundColor = "white";
    }

    console.log(currMode);
})