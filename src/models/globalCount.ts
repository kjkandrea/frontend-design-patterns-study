type Subscriber = (count: number) => void;

interface GlobalCount {
  state: number;
  increment(): void;
  decrement(): void;
  on(subscriber: Subscriber): void;
}

const model = {
  state: 0,
  subscribers: [],
  increment() {
    model.state += 1;
    model.emit();
  },
  decrement() {
    if (model.state > 0) {
      model.state -= 1;
    }
    model.emit();
  },
  on(subscriber: Subscriber) {
    (model.subscribers as Subscriber[]).push(subscriber);
  },
  emit() {
    (model.subscribers as Subscriber[]).forEach(subscriber =>
      subscriber(model.state)
    );
  },
  reset() {
    model.state = 0;
  },
};

const globalCount: GlobalCount = model;

export default globalCount;
