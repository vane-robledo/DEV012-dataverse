export const sortData = (data, sortBy, sortOrder) => {
  const sort = data.sort((x, y) => {
    const valX = x[sortBy];
    const valY = y[sortBy];
    if (sortOrder === "asc") {
      if (valX < valY) {
        return -1;
      }
      if (valX > valY) {
        return 1;
      }
    } else if (sortOrder === "desc") {
      if (valX < valY) {
        return 1;
      }
      if (valX > valY) {
        return -1;
      }
    } else {
      return 0;
    }
  });
  return sort;
};
export const sortBounty = (data, sortOrder) => {
  const sortedCharacters = data.sort((a, b) => {
    const bountyA = parseInt(a.facts.bounty.replace(/[^0-9]/g, ''), 10);
    const bountyB = parseInt(b.facts.bounty.replace(/[^0-9]/g, ''), 10);
    if (sortOrder === "asc") {
      return bountyA - bountyB;
    } else if (sortOrder === "desc") {
      return bountyB - bountyA;
    }
  });
  return sortedCharacters;
};
export const filterData = (data, filterBy, value) => {
  return data.filter((object) => {
    if (object.facts[filterBy]) {
      return object.facts[filterBy] === value;
    }
    return false;
  });
};
export const computeStats = (data, property, value) => {
  const mapped = data.map(element => element.facts[property] === value ? 1 : 0);
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const percentage = (reduceData / data.length) * 100;
  return percentage.toFixed(2);
};

export const computeStatsBounty = (data, bounty, value) => {
  const bountyParsed = data.map(element => {
    if (element.facts && element.facts[bounty]) {
      return parseInt(element.facts[bounty].replace(/[^0-9]/g, ''), 10);
    } else {
      return 0;
    }
  });
  const mapped = bountyParsed.map(parsedValue => (parsedValue >= value ? 1 : 0));
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const percentage = (reduceData / data.length) * 100;
  return percentage.toFixed(2);
};