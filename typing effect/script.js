const text = "Things work out best for those who make the best of how things work out.";
const typingDelay = 100; // milliseconds
const cursorDelay = 500; // milliseconds

let index = 0;
let isDeleting = false;

function type() {
    const currentText = text.substring(0, index);
    document.getElementById("typing-text").innerText = currentText;

    if (!isDeleting && index === text.length) {
        setTimeout(() => {
            isDeleting = true;
        }, 1000);
    } else if (isDeleting && index === 0) {
        isDeleting = false;
    }

    index += isDeleting ? -1 : 1;
    const delay = isDeleting ? cursorDelay : typingDelay;

    setTimeout(type, delay);
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, cursorDelay);
});
