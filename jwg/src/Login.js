class Login extends HTMLElement { 


    connectedCallback() { 
        this.innerHTML = `
            <h2>Login</h2>
        `
    }

}
customElements.define('d-login',Login);