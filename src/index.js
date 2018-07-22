import printMe from "./print.js";

function component() {
    let element = document.createElement('div');
    let btn = document.createElement('button');
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello webpack";
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());
