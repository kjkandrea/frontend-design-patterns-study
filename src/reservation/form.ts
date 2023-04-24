const createTemplate = () => `
  <form>
    <h1>예약하실 인원을 입력하세요.</h1>
    <fieldset>
      <label>
        성인 <input type="number" name="adult-count" value="0" />
      </label>
      명
    </fieldset>
    <fieldset>
      <label>
        유아 <input type="number" name="kid-count" value="0" />
      </label>
      명
    </fieldset>
    <button type="submit">확인</button>
  </form>
`;

export const createReserveFormEl = () => {
  const reserveFormEl = document.createElement('form');

  reserveFormEl.insertAdjacentHTML('beforeend', createTemplate());

  return reserveFormEl;
};
