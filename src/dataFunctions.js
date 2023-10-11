export const sortData = (data, sortBy, sortOrder) => {
  const sortAsc = data.sort((x, y) => {
    if (x[sortBy] > y[sortBy]) {
      if (sortOrder === "asc") {
        return 1;
      } else {
        return -1;
      }
    }
    return 0;
  });
  if (sortOrder === "desc") {
    sortAsc.reverse();
  }
  return sortAsc;
};

export const filterData = (data, filterBy, value) => {
  return data.filter(item => {
    if (item.facts[filterBy]) {
      return item.facts[filterBy] === value;
    }
    return false;
  });
}



