
export const sortData = (data, sortBy, sortOrder) => {
  const sortedAsc = data.toSorted((a, b) => a[sortBy] > b[sortBy]);
  const sortedDesc = data.toSorted((a, b) => a[sortBy] < b[sortBy]);
  if (sortOrder === "asc") {
    return sortedAsc;
  } else{
    return sortedDesc;
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
