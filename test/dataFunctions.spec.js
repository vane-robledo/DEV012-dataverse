
import { sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


describe('sortData', () => {
  it('returns characters sorted by name in ascending order`', () => {

    // const names = [
    //   { name: "Monkey D. Luffy" },
    //   { name: "Eustass Kid" },
    //   { name: "Nami" },
    //   { name: "Roronoa Zoro" },
    //   { name: "Sir Crocodile" }
    // ];

    const resultNames = [
      { name: "Eustass Kid" },
      { name: "Monkey D. Luffy" },
      { name: "Nami" },
      { name: "Roronoa Zoro" },
      { name: "Sir Crocodile" }
    ];
    const resultNames2 = [
      { name: "Sir Crocodile" },
      { name: "Roronoa Zoro" },
      { name: "Nami" },
      { name: "Monkey D. Luffy" },
      { name: "Eustass Kid" }
    ];

    expect(sortData(fakeData, "name", "asc")).toEqual(resultNames)
    expect(sortData(fakeData, "name", "desc")).toEqual(resultNames2)
  });
});

// describe('anotherExample', () => {

//   it('returns `anotherExample`', () => {
//     expect(filterData()).toBe(sortBounty);
//   });
// });
