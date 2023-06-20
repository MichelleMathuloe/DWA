export class SingleTask extends HTMLElement {
    constructor() {
      super();
      this.inner = this.attachShadow({ mode: "closed" });
    }
  
    connectedCallback() {
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          /* Component's styles here */
        </style>
        <div>
          <!-- Content here -->
        </div>
      `;
      this.inner.appendChild(template.content.cloneNode(true));
    }
  }
  