import _ from 'lodash';
import './style.css';

function component() {
    var element = document.createElement('div');
    element.classList.add('hello');

    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
}

document.body.appendChild(component());
