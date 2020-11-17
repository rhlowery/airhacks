class Header extends HTMLElement { 

    connectedCallback() { 
        this.innerHTML = `
            <h2>Hello, DOAG, vielleicht Oracle ${this.attributes['msg'].name}!</h2>
        `;
    }

}
customElements.define('d-header',Header);