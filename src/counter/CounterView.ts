import {View} from '../Strategy';

export type Count = number;

export class CounterView implements View<Count> {
  private readonly stateWrapperEl: HTMLElement;

  constructor(state: Count) {
    this.stateWrapperEl = document.createElement('p');
    this.stateWrapperEl.textContent = String(state);
  }

  public render(): HTMLElement {
    const rootEl = document.createElement('div');

    const [incrementButtonEl, decrementButtonEl] = [
      this.createClickableButton('increment'),
      this.createClickableButton('decrement'),
    ];

    rootEl.append(incrementButtonEl, this.stateWrapperEl, decrementButtonEl);
    return rootEl;
  }

  public update(state: Count) {
    this.stateWrapperEl.textContent = String(state);
  }

  private createClickableButton(text: string): HTMLButtonElement {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = text;
    buttonEl.type = 'button';
    return buttonEl;
  }
}
