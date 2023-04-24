import './style.css';
import {createReserveFormEl} from './reservation/form';
import {ReserveCount} from './reservation/ReserveCount';

const appEl = document.querySelector<HTMLDivElement>('#app')!;

const reserveCount: ReserveCount = {
  adultCount: 1,
  kidCount: 0,
};

const reserveFormEl = createReserveFormEl(reserveCount);
appEl.append(reserveFormEl);

reserveFormEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(evt.target as HTMLFormElement);
  console.table({
    adultCount: formData.get('adult-count'),
    kidCount: formData.get('kid-count'),
  });
});
