interface GlobalCount {
  state: number;
  increment(): void;
  decrement(): void;
}

const model = {
  state: 0,
  increment() {
    model.state += 1;
  },
  decrement() {
    if (model.state > 0) {
      model.state -= 1;
    }
  },
  reset() {
    model.state = 0;
  },
};

const globalCount: GlobalCount = model;

export default globalCount;
