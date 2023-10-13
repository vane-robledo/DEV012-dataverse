
import { sortData, filterData, sortBounty } from '../src/dataFunctions.js';
import { names, crew, arrBounty } from './data.js';


describe('sortData', () => {
  it('returns characters sorted by name in ascending or descending order`', () => {
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

    expect(sortData(names, "name", "asc")).toEqual(resultNames)
    expect(sortData(names, "name", "desc")).toEqual(resultNames2)
  });
});

describe("sortBounty", () => {
  it("returns bounty sorted by numbers in ascending order", () => {

    const resultBounty = [
      {facts: {bounty: 30000000}},
      {facts: {bounty: 66000000}},
      {facts: {bounty: 320000000}},
      {facts: {bounty: 330000000}},
      {facts: {bounty: 1500000000}},
    ];
    const resultBounty2 = [
      {facts: {bounty: 1500000000}},
      {facts: {bounty: 330000000}},
      {facts: {bounty: 320000000}},
      {facts: {bounty: 66000000}},
      {facts: {bounty: 30000000}},
    ];
    expect(sortBounty(arrBounty, "asc")).toEqual(resultBounty);
    expect(sortBounty(arrBounty, "desc")).toEqual(resultBounty2);
  });
});

describe('filterData', () => {

  it('characters filtered by Crew', () => {
    expect(filterData(crew, "crew", "Straw Hat Pirates")).toBe(sortBounty);
  });
});
