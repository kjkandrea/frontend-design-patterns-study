const puppyRepository: {
  array: Puppy[];
} = {
  array: [],
};

const puppyService = {
  creatPuppy() {
    return new Puppy('K', 'Welsh corgi', 3);
  },
  cashArray(puppy: Puppy) {
    puppyRepository.array.push(puppy);
  },
  renderPuppy(containerElement: HTMLElement, puppy: Puppy) {
    const puppyElement = this._createPuppyElement(puppy);
    containerElement.append(puppyElement);
  },
  _getPuppies(): Puppy[] {
    return puppyRepository.array;
  },
  _createPuppyElement(puppy: Puppy): HTMLElement {
    const rootElement = document.createElement('li');
    const breedElement = document.createElement('span');
    const ageElement = document.createElement('span');
    const indexElement = document.createElement('span');

    rootElement.dataset.id = puppy.id;
    breedElement.textContent = `🐶 ${puppy.breed}`;
    ageElement.textContent = String(puppy.age);
    indexElement.textContent = String(this._getPuppies().length);

    rootElement.append(breedElement, ageElement, indexElement);

    return rootElement;
  },
};

class Puppy {
  id: string;
  breed: string;
  age: number;

  constructor(id: string, breed: string, age: number) {
    this.id = id;
    this.breed = breed;
    this.age = age;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document
    .getElementById('execute-add-puppy-in-array-click-trigger')!
    .addEventListener('click', () => {
      const puppy = puppyService.creatPuppy();
      puppyService.cashArray(puppy);
      puppyService.renderPuppy(document.getElementById('puppies')!, puppy);
    });
});
