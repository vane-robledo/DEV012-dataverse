export const sortData = (data, sortBy, sortOrder) => {
  const sortAsc = data.sort((x, y) => {
    if (x.name > y.name) {
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
