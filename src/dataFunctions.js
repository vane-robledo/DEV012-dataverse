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

export const sortBounty = (data, sortBy, sortOrder) => {
  const dataFacts = data
    .flatMap((element) => element.facts)
    .map((element) => element.bounty);

  const dataNumber = dataFacts.map((bounty) => {
    const bountyWithDot = bounty.replace(/,/g, "");
    return parseFloat(bountyWithDot);
  });

  const sortBountyOrder = dataNumber.sort((a, b) => {
    if (sortOrder === "bounty-asc") {
      return a - b;
    } else if (sortOrder === "bounty-desc") {
      return b - a;
    }
    return 0;
  });
  console.log(sortBountyOrder);
  return sortBountyOrder;
};
