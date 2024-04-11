// Setup our Variables
const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Add EventListeners (ES5 style)
left.addEventListener("mouseenter", function() {
    // add a class of 'hover' to event listener
    container.classList.add("hover-left");
});

// Remove Listener (ES5 style)
left.addEventListener("mouseleave", function() {
    container.classList.remove("hover-left");
});

// Add EventListener (ES6 style, arrow function)
right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

// Remove Listener (ES6 style ,arrow function)
right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});