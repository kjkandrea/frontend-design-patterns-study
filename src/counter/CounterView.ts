import {View} from 'src/Strategy';

export class CounterView implements View {
  public render(): HTMLElement {
    const rootEl = document.createElement('div');
    rootEl.textContent = 'Hello, SOC!';

    return rootEl;
  }
}
