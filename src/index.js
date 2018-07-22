
import './style.css';

function component() {
    let button = document.createElement('button');
    const br = document.createElement("br");
    let element = document.createElement('div');
    element.innerHTML = "Hello world";
    button.innerHTML = "Click me and look at the console!";
    button.onclick = e => import(/* webpackChunkName: "print" */ './print').then(module => {
        const print = module.default;
        print();
    });

    element.appendChild(br);
    element.appendChild(button);
    return element;
}

document.body.appendChild(component());
