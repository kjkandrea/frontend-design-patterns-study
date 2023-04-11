import ButtonCounter from '../views/ButtonCounter';
import globalCount from '../models/globalCount';

export default class CounterController {
  private readonly buttonCounter: ButtonCounter;

  constructor(buttonCounter: ButtonCounter) {
    this.buttonCounter = buttonCounter;
    this.bind();
    this.updateView(globalCount.state);
  }

  bind() {
    this.buttonCounter
      .getElement()
      .addEventListener('click', () => globalCount.increment());

    globalCount.on(count => this.updateView(count));
  }

  updateView(count: number) {
    this.buttonCounter.render(`count is ${count}`);
  }
}
