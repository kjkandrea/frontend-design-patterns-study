import globalCount from '../models/globalCount';

export function setupCounter(element: HTMLButtonElement) {
  const renderCounter = () => {
    element.innerHTML = `count is ${globalCount.state}`;
  };

  element.addEventListener('click', () => {
    globalCount.increment();
    renderCounter();
  });
  renderCounter();
}
