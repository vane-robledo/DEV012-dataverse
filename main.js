import { sortData } from './dataFunctions.js';                                                                                                                                                     
import { sortBounty } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const rootRender = document.querySelector("#root");
rootRender.appendChild(renderItems(data));

const sort = document.querySelector('[data-testid="select-sort"]');

sort.addEventListener("change", () => {
  const sortOrder = sort.value;
  const sortedName = sortData(data,"name", sortOrder)
  const sortedBounty = sortBounty(data, "bounty", sortOrder)

  rootRender.innerHTML = "";
  const sortedList = renderItems(sortedName);
  const sortedBountyList = renderItems(sortedBounty);
  rootRender.appendChild(sortedList)
  rootRender.appendChild(sortedBountyList)
});

