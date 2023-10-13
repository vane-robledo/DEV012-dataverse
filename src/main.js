import { sortData,filterData, sortBounty } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';

const rootRender = document.querySelector("#root");

rootRender.appendChild(renderItems(data));

const sortName = document.querySelector('[data-testid="select-sort"]');
const sortedBounty = document.querySelector('[data-testid="select-bounty"]')
const filterOrigin = document.querySelector('[data-testid="select-filterOrigin"]');
const filterCrew = document.querySelector('[data-testid="select-filter"]');
const filterStatus = document.querySelector('[data-testid="select-filterStatus"]');
const clearButton = document.querySelector('[data-testid="button-clear"]')

sortName.addEventListener("change", () => {
  const sortOrder = sortName.value;
  const sortedName = sortData(data, "name", sortOrder)
  rootRender.innerHTML = "";
  const sortedList = renderItems(sortedName);
  rootRender.appendChild(sortedList)
});

sortedBounty.addEventListener("change", () => {
  const sortOrder = sortedBounty.value;
  const sortedName = sortBounty(data, sortOrder)
  rootRender.innerHTML = "";
  const sortedList = renderItems(sortedName);
  rootRender.appendChild(sortedList)
});

filterOrigin.addEventListener("change", () => {
  const value = filterOrigin.value;
  const filteredOrigin = filterData(data,"seaOfOrigin", value)
  rootRender.innerHTML = "";
  const filteredList =  renderItems(filteredOrigin);
  rootRender.appendChild(filteredList)
})

filterCrew.addEventListener("change", () => {
  const value = filterCrew.value;
  const filteredCrew = filterData(data,"crewOrigin", value);
  rootRender.innerHTML = "";
  const filteredList = renderItems(filteredCrew);
  rootRender.appendChild(filteredList)
})

filterStatus.addEventListener("change", () => {
  const value = filterStatus.value;
  const filteredStatus = filterData(data, "status", value);
  rootRender.innerHTML = "";
  const filteredList = renderItems(filteredStatus)
  rootRender.appendChild(filteredList)
})

clearButton.addEventListener("click", () => {
  filterOrigin.value = "";
  filterCrew.value = "";
  filterStatus.value = "";
  sortName.value = "";
  sortedBounty.value = "";
  rootRender.innerHTML = "";
  rootRender.appendChild(renderItems(data));
})