import './style.css';

const appEl = document.querySelector<HTMLDivElement>('#app')!;
const reserveFormEl = document.createElement('form');
appEl.append(reserveFormEl);

reserveFormEl.innerHTML = `
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

reserveFormEl.addEventListener('submit', evt => {
  evt.preventDefault();

  const formData = new FormData(evt.target as HTMLFormElement);
  console.table({
    adultCount: formData.get('adult-count'),
    kidCount: formData.get('kid-count'),
  });
});
