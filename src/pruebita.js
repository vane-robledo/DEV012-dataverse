

export const sortData = (data, sortBy, sortOrder) => {
  const sort = data.sort((x, y) => {

    const valX = x[sortBy]
    const valY = y[sortBy]
    console.log(valX, valY)
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