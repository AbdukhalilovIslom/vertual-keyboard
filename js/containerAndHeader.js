import Control from './control.js';

class ContainerAndHeader extends Control {
    constructor(parent) {
        super(parent, 'div', 'container');
        this.titlle = new Control(this.element, 'h1', 'tittle');
        this.titlle.element.innerHTML = 'VERTUAL KEYBOARD ';


    }
}

const createContainerAndHeader = () => new ContainerAndHeader(document.body);

export default createContainerAndHeader;