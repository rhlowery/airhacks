import { html, render } from "./lit-html.js";
import "./@ui5/webcomponents/dist/DatePicker.js";

class Header extends HTMLElement {

    connectedCallback() {
        const template = html`
        <ui5-date-picker @change="${e => this.nextDoagConf(e)}" id="myDatepicker1"></ui5-date-picker>
            <button @click="${_ => this.load()}">click</button>
            <h2>Hello, DOAG, vielleicht Oracle</h2>
        `;
        render(template, this);
    }

    nextDoagConf({ detail: { value } }){
        console.log(value);
    }

    async load() { 
        const response = await fetch('guru.json');
        const json = await response.json();
        const { name, age, mountain = 'zugspitze' } = json;
        console.log(name,age,mountain);

    }
}
customElements.define('d-header',Header);