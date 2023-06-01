import {View} from '../Strategy';

export class CounterView implements View {
  public render(): HTMLElement {
    const rootEl = document.createElement('div');

    const countTextEl = document.createElement('p');
    countTextEl.textContent = String(0);

    const [incrementButtonEl, decrementButtonEl] = [
      this.createClickableButton('increment'),
      this.createClickableButton('decrement'),
    ];

    rootEl.append(incrementButtonEl, countTextEl, decrementButtonEl);
    return rootEl;
  }

  private createClickableButton(text: string): HTMLButtonElement {
    const buttonEl = document.createElement('button');
    buttonEl.textContent = text;
    buttonEl.type = 'button';
    return buttonEl;
  }
}
