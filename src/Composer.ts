import {View} from './Strategy';

interface ViewConstructor<State> {
  new (state: State): View;
}

export class Composer<State> {
  private readonly parentElement: HTMLElement;
  private readonly view: View;

  constructor(parentElement: HTMLElement, View: ViewConstructor<State>) {
    this.parentElement = parentElement;
    this.view = new View(0 as State);
    this.attach();

    // test code
    this.view.update(1);
  }

  private attach() {
    this.parentElement.append(this.view.render());
  }
}
