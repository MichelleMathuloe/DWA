import { CounterComponent } from ''
import {LitElement, css, html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 5;

class CounterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  static properties = {
    value: { type: Number },
    subtractDisabled: { type: Boolean },
    addDisabled: { type: Boolean },
  };

  constructor() {
    super();
    this.value = 0;
    this.subtractDisabled = true;
    this.addDisabled = false;
  }

  subtractHandler() {
    this.value -= STEP_AMOUNT;

    if (this.addDisabled) {
      this.addDisabled = false;
    }

    if (this.value <= MIN_NUMBER) {
      this.subtractDisabled = true;
    }
  }

  addHandler() {
    this.value += STEP_AMOUNT;

    if (this.subtractDisabled) {
      this.subtractDisabled = false;
    }

    if (this.value >= MAX_NUMBER) {
      this.addDisabled = true;
    }
  }

  render() {
    return html`
      <input type="number" .value=${this.value} disabled />
      <button @click=${this.subtractHandler} ?disabled=${this.subtractDisabled}>Subtract</button>
      <button @click=${this.addHandler} ?disabled=${this.addDisabled}>Add</button>
    `;
  }
}
customElements.define('counter-component', CounterComponent);

/*In this example, I've created a CounterComponent class that extends LitElement. The component has three properties: value, subtractDisabled, and addDisabled. The initial values are set in the constructor.

The subtractHandler and addHandler methods are defined as event handlers for the subtract and add buttons, respectively. They update the value property based on the step amount and enable/disable the buttons based on the defined conditions.

The render method defines the component's template using the Lit's html tagged template literal. The input element is bound to the value property, and the buttons have event listeners that call the respective event handler methods.

To use this component in your HTML, you can include the <counter-component></counter-component> tag.*/