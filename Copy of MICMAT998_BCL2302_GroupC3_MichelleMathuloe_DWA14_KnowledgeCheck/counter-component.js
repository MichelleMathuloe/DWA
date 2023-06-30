import { html, css, LitElement } from 'lit';

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
      <input class="counter_value" data-key="number" readonly .value=${this.value} />

      <div class="counter_actions">
        <button data-key="subtract" class="counter_button counter_button_first" @click=${this.subtractHandler}
          ?disabled=${this.subtractDisabled}>-</button>
        <button data-key="add" class="counter_button" @click=${this.addHandler} ?disabled=${this.addDisabled}>+</button>
      </div>
    `;
  }
}

customElements.define('counter-component', CounterComponent);
