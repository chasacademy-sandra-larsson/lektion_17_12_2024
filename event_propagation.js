
const boxes = document.querySelectorAll(".box");

function logEvent(phase, element, event) {
    console.log(`${phase} phase: ${element} target: ${event.target.className}`)
}


// boxes.forEach(box => {
//     box.addEventListener("click", (event) => logEvent("Bubbling", box.className, event))
// });


boxes.forEach(box => {
    box.addEventListener("click", (event) => logEvent("Capturing", box.className, event), true)
});
