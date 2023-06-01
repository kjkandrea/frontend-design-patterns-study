export interface View<State = unknown> {
  render(): HTMLElement;
  update(state: State): void;
}
