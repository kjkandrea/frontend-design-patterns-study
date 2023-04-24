import {ReserveCount} from './ReserveCount';

const createTemplate = (defaultReserveCount: ReserveCount) => `
  <form>
    <h1>예약하실 인원을 입력하세요.</h1>
    <fieldset>
      <label>
        성인 <input type="text" name="adult-count" value=${defaultReserveCount.adultCount} />
      </label>
      명
    </fieldset>
    <fieldset>
      <label>
        유아 <input type="text" name="kid-count" value=${defaultReserveCount.kidCount} />
      </label>
      명
    </fieldset>
    <button type="submit">확인</button>
  </form>
`;

export const createReserveFormEl = (defaultReserveCount: ReserveCount) => {
  const reserveFormEl = document.createElement('form');

  reserveFormEl.insertAdjacentHTML(
    'beforeend',
    createTemplate(defaultReserveCount)
  );

  return reserveFormEl;
};
