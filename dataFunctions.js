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
  if (sortOrder === "asc") {
    return data.sort((a, b) => a.facts.bounty - b.facts.bounty);
  } else if (sortOrder === "desc") {
    return data.sort((a, b) => b.facts.bounty - a.facts.bounty);
  } else {
    return data.sort((a, b) => a.facts.bounty - b.facts.bounty);
  }
};

export const filterData = (data, filterBy, value) => {
  return data.filter((item) => {
    if (item.facts[filterBy]) {
      return item.facts[filterBy] === value;
    }
    return false;
  });
};

export const computeStats = (data, targetProperty, targetValue) => {
  const mapped = data.map (element => element.facts[targetProperty] === targetValue ? 1:0);
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const percentage = (reduceData / data.length) * 100;

  return percentage.toFixed(2);
};

export const computeStatsBounty = (data, targetProperty, targetValue) => {
  const mapped = data.map (element => element.facts[targetProperty] >= targetValue ? 1:0);
  const reduceData = mapped.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const percentage = (reduceData / data.length) * 100;

  return percentage.toFixed(2);
};