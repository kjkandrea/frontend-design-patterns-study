const puppyRepository: {
  array: Puppy[];
} = {
  array: [],
};

const puppyService = {
  addPuppyInArray() {
    const puppy: Puppy = new Puppy('K', 'Welsh corgi', 3);

    puppyRepository.array.push(puppy);
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
    .getElementById('execute-add-puppy-in-array-click-trigger')
    ?.addEventListener('click', () => puppyService.addPuppyInArray());
});
