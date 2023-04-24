import './style.css';
import {createReserveFormEl} from './reservation/form';

const appEl = document.querySelector<HTMLDivElement>('#app')!;
const reserveFormEl = createReserveFormEl();
appEl.append(reserveFormEl);

reserveFormEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(evt.target as HTMLFormElement);
  console.table({
    adultCount: formData.get('adult-count'),
    kidCount: formData.get('kid-count'),
  });
});
