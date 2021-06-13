export class Select extends HTMLElement{
   
    constructor(label){
        super();
        this.label = label;
        this.innerHTML = `
        <label>${this.label}</label> <select id="${this.label}">
        </select>`;   

    }
  

}

customElements.define('app-select', Select);