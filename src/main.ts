import './style.css';
import {Composer} from './Composer';
import {CounterView} from './counter/CounterView';

const rootEl = document.querySelector<HTMLDivElement>('#app')!;

new Composer(rootEl, new CounterView());
