export class Time extends HTMLElement {

     constructor(){
        super();
        this.getTime();
     }

     getTime(){
        return setInterval(
            () => {
              this.innerText = new Date().toLocaleTimeString();
            },
            1000,
        );
    }

}

customElements.define('app-time', Time);