import {
  sortData,
  filterData,
  sortBounty,
  computeStats,
  computeStatsBounty
} from "./dataFunctions.js";
import { renderItems, renderStats } from "./view.js";
import data from "./data/dataset.js";

let result = data;
const rootRender = document.querySelector("#root");
rootRender.appendChild(renderItems(result));
const sortName = document.querySelector('[data-testid="select-sort"]');
const sortedBounty = document.querySelector('[data-testid="select-bounty"]');
const filterOrigin = document.querySelector(
  '[data-testid="select-filterOrigin"]'
);
const filterCrew = document.querySelector('[data-testid="select-filter"]');
const filterStatus = document.querySelector(
  '[data-testid="select-filterStatus"]'
);
const clearButton = document.querySelector('[data-testid="button-clear"]');
const factsButton = document.getElementById("facts");
const charactersTitle = document.querySelector("h2");

filterOrigin.addEventListener("change", (e) => {
  e.preventDefault();
  const value = filterOrigin.value;
  const filteredOrigin = filterData(data, "seaOfOrigin", value);
  rootRender.innerHTML = "";
  filterCrew.value = "";
  filterStatus.value = "";
  const filteredList = renderItems(filteredOrigin);
  rootRender.appendChild(filteredList);
  result = filteredOrigin;


});
filterCrew.addEventListener("change", (e) => {
  e.preventDefault();
  const value = filterCrew.value;
  const filteredCrew = filterData(data, "crewOrigin", value);
  rootRender.innerHTML = "";
  filterOrigin.value = "";
  filterStatus.value = "";
  const filteredList = renderItems(filteredCrew);
  rootRender.appendChild(filteredList);
  result = filteredCrew;
});
filterStatus.addEventListener("change", (e) => {
  e.preventDefault();
  const value = filterStatus.value;
  const filteredStatus = filterData(data, "status", value);
  rootRender.innerHTML = "";
  filterOrigin.value = "";
  filterCrew.value = "";
  const filteredList = renderItems(filteredStatus);
  rootRender.appendChild(filteredList);
  result = filteredStatus;
});
sortName.addEventListener("change", (e) => {
  e.preventDefault();
  const sortOrder = sortName.value;
  const sortedName = sortData(result, "name", sortOrder);
  rootRender.innerHTML = "";
  sortedBounty.value = "";
  const sortedList = renderItems(sortedName);
  rootRender.appendChild(sortedList);
}
);
sortedBounty.addEventListener("change", (e) => {
  e.preventDefault();
  const sortOrder = sortedBounty.value;
  const sortedResultBounty = sortBounty(result, sortOrder)
  rootRender.innerHTML = "";
  sortName.value = "";
  const sortedList = renderItems(sortedResultBounty);
  rootRender.appendChild(sortedList);
});
clearButton.addEventListener("click", (e) => {
  e.preventDefault();
  filterOrigin.value = "";
  filterCrew.value = "";
  filterStatus.value = "";
  sortName.value = "";
  sortedBounty.value = "";
  rootRender.innerHTML = "";
  rootRender.appendChild(renderItems(data));
  result = data;
});
factsButton.addEventListener("click", (e) => {
  e.preventDefault();
  rootRender.innerHTML = "";
  charactersTitle.innerHTML = "Facts"
  rootRender.appendChild(renderStats());
  const origen = document.querySelector("#idOrigin");
  origen.textContent = "Did you know that " + computeStats(data, "seaOfOrigin", "East Blue") + "% of the characters come from East Blue.";
  const crew = document.querySelector("#idCrew");
  crew.textContent = "Did you know that " + computeStats(data, "crewOrigin", "Straw Hat Pirates") + "% of the characters are from Luffy's crew (Straw Hat Pirates)."
  const bounty = document.querySelector("#idBounty");
  bounty.textContent = "Did you know that " + computeStatsBounty(data, "bounty", 315000000) + "% of the characters have a bounty over 315,000,000."
});