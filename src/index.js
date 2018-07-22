import './style.css';

async function getComponent() {
    let element = document.createElement('div');
    const _ = await import(/* webpackChunkName: "lodash" */ 'lodash');
    element.innerHTML = _.join(["Hello", "webpack"], " ");
    return element;
}

getComponent().then(component => {
    document.body.appendChild(component);
});
