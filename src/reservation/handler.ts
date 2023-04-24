import {ReserveCount} from './ReserveCount';

export const reserveHandler: ProxyHandler<ReserveCount> = {
  set(target: ReserveCount, key: keyof typeof target, value: number) {
    if (Number.isNaN(value)) {
      throw new Error('숫자를 입력해주세요.');
    }

    target[key] = value;
    return true;
  },
};
