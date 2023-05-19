const puppyRepository: {
  array: Puppy[];
  map: Map<Puppy['id'], Puppy>;
} = {
  array: [],
  map: new Map(),
};

const puppyService = {
  creatPuppy() {
    return new Puppy('K', 'Welsh corgi', 3);
  },
  cashArray(puppy: Puppy) {
    puppyRepository.array.push(puppy);
  },
  cashMap(puppy: Puppy) {
    const exist = puppyRepository.map.has(puppy.id);

    if (exist) return;

    puppyRepository.map.set(puppy.id, puppy);
  },
  renderPuppy(containerElement: HTMLElement, puppy: Puppy) {
    const puppyElement = this._createPuppyElement(puppy);
    containerElement.append(puppyElement);
  },
  _createPuppyElement(puppy: Puppy): HTMLElement {
    const rootElement = document.createElement('li');
    const breedElement = document.createElement('span');
    const ageElement = document.createElement('span');
    const indexElement = document.createElement('span');

    rootElement.dataset.id = puppy.id;
    breedElement.textContent = `🐶 ${puppy.breed}`;
    ageElement.textContent = String(puppy.age);

    rootElement.append(breedElement, ageElement, indexElement);

    return rootElement;
  },
};

class Puppy {
  readonly id: string;
  readonly breed: string;
  readonly age: number;

  constructor(id: string, breed: string, age: number) {
    this.id = id;
    this.breed = breed;
    this.age = age;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('execute-add-puppy-in-array-save-click-trigger')!
    .addEventListener('click', () => {
      const puppy = puppyService.creatPuppy();
      puppyService.cashArray(puppy);
      puppyService.renderPuppy(document.getElementById('puppies')!, puppy);
    });

  document
    .getElementById('execute-add-puppy-in-map-save-click-trigger')!
    .addEventListener('click', () => {
      const puppy = puppyService.creatPuppy();
      puppyService.cashMap(puppy);
      puppyService.renderPuppy(document.getElementById('puppies')!, puppy);
    });
});
