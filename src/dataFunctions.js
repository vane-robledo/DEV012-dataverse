export const sortData = (data, sortBy, sortOrder) => {
  const sort = data.sort((x, y) => {

    const valX = x[sortBy]
    const valY = y[sortBy]

    if (valX < valY) {
      return sortOrder === "asc" ? -1 : 1;
    }
    if (valX > valY) {
      return sortOrder === "asc" ? 1 : -1;

    }
    return 0;

  });

  return sort;
};

export const sortBounty = (data, sortOrder) => {
  const sortedBountyAsc = data.toSorted((a, b) => a["facts"]["bounty"] > b["facts"]["bounty"]);
  const sortedBountyDesc = data.toSorted((a, b) => a["facts"]["bounty"] < b["facts"]["bounty"]);
  if (sortOrder === "asc") {
    return sortedBountyAsc;
  } else {
    return sortedBountyDesc;

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
