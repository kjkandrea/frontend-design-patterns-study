export default class ButtonCounter {
  private readonly app: HTMLElement;
  private readonly buttonCounterElement: HTMLButtonElement;

  constructor(app: HTMLElement) {
    this.app = app;
    this.buttonCounterElement = this.createElement();
    this.app.append(this.buttonCounterElement);
  }

  public render(buttonText: string) {
    this.buttonCounterElement.textContent = buttonText;
  }

  public getElement() {
    return this.buttonCounterElement;
  }

  private createElement() {
    const buttonCounterElement = document.createElement('button');
    buttonCounterElement.id = ButtonCounter.uid;
    buttonCounterElement.type = 'button';
    buttonCounterElement.style.margin = '0px 5px';

    return buttonCounterElement;
  }

  static uid = 'button-counter';
}
