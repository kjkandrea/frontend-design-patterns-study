import {ReserveCount} from './ReserveCount';

export const reserveHandler: ProxyHandler<ReserveCount> = {
  set(target: ReserveCount, key: keyof typeof target, value: number) {
    if (Number.isNaN(value)) {
      throw new Error('숫자를 입력해주세요.');
    }

    if (!Number.isInteger(value)) {
      throw new Error('1 단위의 정수를 입력해주세요.');
    }

    if (0 > value) {
      throw new Error('0 이상으로 입력해주세요.');
    }

    if (key === 'adultCount' && 1 > value) {
      throw new Error('성인이 1명 이상이여야 합니다.');
    }

    target[key] = value;
    return true;
  },
};
