import './style.css';
import {ReserveCount, createReserveFormEl, reserveHandler} from './reserve';

const appEl = document.querySelector<HTMLDivElement>('#app')!;

const reserveCountLiteral: ReserveCount = {
  adultCount: 0,
  kidCount: 0,
};

const reserveCount = new Proxy(reserveCountLiteral, reserveHandler);

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
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      const input = document.querySelector<HTMLInputElement>(
        "[name='adult-count']"
      )!;
      input.value = '';
      input.focus();
      return;
    }
  }

  try {
    reserveCount.kidCount = invalidReserveCount.kidCount;
  } catch (error) {
    if (error instanceof Error) {
      alert(error.message);
      const input =
        document.querySelector<HTMLInputElement>("[name='kid-count']")!;
      input.value = '';
      input.focus();
      return;
    }
  }

  alert('완료 : 콘솔 창을 확인하세요.');
  console.table(reserveCountLiteral);
});
