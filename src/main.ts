import './style.css';
import {createReserveFormEl} from './reservation/form';
import {ReserveCount} from './reservation/ReserveCount';

const appEl = document.querySelector<HTMLDivElement>('#app')!;

const reserveCountLiteral: ReserveCount = {
  adultCount: 1,
  kidCount: 0,
};

const reserveCount = new Proxy(reserveCountLiteral, {});

const reserveFormEl = createReserveFormEl(reserveCountLiteral);
appEl.append(reserveFormEl);

reserveFormEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(evt.target as HTMLFormElement);
  const invalidReserveCount: ReserveCount = {
    adultCount: Number(formData.get('adult-count')),
    kidCount: Number(formData.get('kid-count')),
  };

  try {
    reserveCount.adultCount = invalidReserveCount.adultCount;
    reserveCount.kidCount = invalidReserveCount.kidCount;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      return;
    }
  }

  alert('done');
});
