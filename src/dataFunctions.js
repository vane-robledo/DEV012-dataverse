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

// export const sortBounty = (data, sortOrder) => {
//   const bounty = parseFloat(data.facts["bounty"]);
//   console.log(bounty);
//   if (sortOrder === "asc") {
//     return data.sort((a, b) => a[bounty] - b[bounty]);
//   } else if (sortOrder === "desc") {
//     return data.sort((a, b) => b[bounty] - a[bounty]);
//   } else {
//     return data.sort((a, b) => a[bounty] - b[bounty]);
//   }
// };

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
  console.log(sortedCharacters)
  return sortedCharacters;
};


export const filterData = (data, filterBy, value) => {
  return data.filter((item) => {
    if (item.facts[filterBy]) {
      return item.facts[filterBy] === value;
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

export const computeStatsBounty = (data, property, value) => {
  const mapped = data.map(element => element.facts[property] >= value ? 1 : 0);
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const percentage = (reduceData / data.length) * 100;

  return percentage.toFixed(2);
};