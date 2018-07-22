import printMe from "./print.js";
import './style.css';

function component() {
    let element = document.createElement('div');
    element.classList.add('hello');
    let btn = document.createElement('button');
    btn.innerHTML = "Click me and check the console!";
    btn.onclick = printMe;

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = "Hello webpack";
    element.appendChild(btn);

    return element;
}

document.body.appendChild(component());

if (module.hot) {
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        printMe();
    })
}
