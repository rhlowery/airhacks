import { html, render } from "./lit-html.js";

class Header extends HTMLElement { 

    connectedCallback() { 
        const template = html`
            <button @click="${_=>this.load()}">click</button>
            <h2>Hello, DOAG, vielleicht Oracle</h2>
        `;
        render(template,this);
    }

    async load() { 
        const response = await fetch('guru.json');
        const json = await response.json();
        const { name, age, mountain = 'zugspitze' } = json;
        console.log(name,age,mountain);

    }
}
customElements.define('d-header',Header);