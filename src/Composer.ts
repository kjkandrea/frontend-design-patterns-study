import {View} from './Strategy';

export class Composer {
  private readonly parentElement: HTMLElement;
  private readonly view: View;

  constructor(parentElement: HTMLElement, view: View) {
    this.parentElement = parentElement;
    this.view = view;
    this.attach();
  }

  private attach() {
    this.parentElement.append(this.view.render());
  }
}
