class Logout extends HTMLElement { 


    connectedCallback() { 
        this.innerHTML = `
            <h2>Logout</h2>
        `
    }

}
customElements.define('d-logout',Logout);