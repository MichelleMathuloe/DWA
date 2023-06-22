import { css, html, useState } from 'https://cdn.skypack.dev/haunted';

const MAX_NUMBER = 15;
const MIN_NUMBER = -5;
const STEP_AMOUNT = 1;

const TallyCounter = () => {
  const [count, setCount] = useState(0);

  const handleSubtract = () => {
    const newValue = count - STEP_AMOUNT;
    setCount(newValue < MIN_NUMBER ? MIN_NUMBER : newValue);
  };

  const handleAdd = () => {
    const newValue = count + STEP_AMOUNT;
    setCount(newValue > MAX_NUMBER ? MAX_NUMBER : newValue);
  };

  const handleReset = () => {
    setCount(0);
  };

  return html`
    <style>
      ${styles}
    </style>

    <main class="counter">
      <input class="counter_value" readonly .value=${count} />

      <div class="counter_actions">
        <sl-button class="counter_button counter_button_first" size="small" @click=${handleSubtract}>-</sl-button>
        <sl-button class="counter_button" size="small" @click=${handleAdd}>+</sl-button>
      </div>
    </main>

    <sl-button class="reset_button" @click=${handleReset}>Reset</sl-button>
  `;
};

customElements.define('tally-counter', component(TallyCounter));

const styles = css`
  .counter {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-top: 2rem;
  }

  .counter_value {
    width: 5rem;
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
    border: 1px solid var(--sl-color-neutral-300);
    border-radius: var(--sl-border-radius-medium);
    padding: 0.5rem;
  }

  .counter_actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .counter_button_first {
    margin-bottom: 0.5rem;
  }

  .reset_button {
    margin-top: 1rem;
  }
`;
