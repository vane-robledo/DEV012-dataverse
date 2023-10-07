import { sortData } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const rootRender = document.querySelector("#root");
rootRender.appendChild(renderItems(data));

const sort = document.querySelector('[data-testid="select-sort"]');

sort.addEventListener("change", () => {
  const sortOrder = sort.value;
  const sortedData = sortData(data,"name", sortOrder)

  rootRender.innerHTML = "";
  const sortedList = renderItems(sortedData);
  rootRender.appendChild(sortedList)
});

