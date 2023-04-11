import './style.css';
import ButtonCounter from './views/ButtonCounter';
import CounterController from './controllers/CounterController';

interface App {
  rootElement: HTMLElement;
  buttonCounters: CounterController[];
  init(): void;
}

const app: App = {
  rootElement: document.querySelector<HTMLDivElement>('#app')!,
  buttonCounters: [],
  init() {
    app.rootElement = document.querySelector<HTMLDivElement>('#app')!;
    const buttonLength = 5;
    this.buttonCounters = Array.from({length: buttonLength}, () => {
      return new CounterController(new ButtonCounter(app.rootElement));
    });
  },
};

document.addEventListener('DOMContentLoaded', () => app.init());
