import {
  sortData,
  filterData,
  sortBounty,
  computeStats,
  computeStatsBounty
} from "./dataFunctions.js";
import { renderItems, renderStats } from "./view.js";
import data from "./data/dataset.js";
const rootRender = document.querySelector("#root");
rootRender.appendChild(renderItems(data));
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
const charactersTitle = document.querySelector("h2")

filterOrigin.addEventListener("change", () => {
  const value = filterOrigin.value;
  const filteredOrigin = filterData(data, "seaOfOrigin", value);
  rootRender.innerHTML = "";
  const filteredList = renderItems(filteredOrigin);
  rootRender.appendChild(filteredList);
});
filterCrew.addEventListener("change", () => {
  const value = filterCrew.value;
  const filteredCrew = filterData(data, "crewOrigin", value);
  rootRender.innerHTML = "";
  const filteredList = renderItems(filteredCrew);
  rootRender.appendChild(filteredList);
});
filterStatus.addEventListener("change", () => {
  const value = filterStatus.value;
  const filteredStatus = filterData(data, "status", value);
  rootRender.innerHTML = "";
  const filteredList = renderItems(filteredStatus);
  rootRender.appendChild(filteredList);

});

sortName.addEventListener("change", () => {
  let value;
  let filterBy;
  const crewValue = filterCrew.value;
  const originValue = filterOrigin.value;
  const statusValue = filterStatus.value;
  const sortOrder = sortName.value;
  if (crewValue !== "") {
    value = crewValue
    filterBy = "crewOrigin"
  }
  else if (originValue !== "") {
    value = originValue
    filterBy = "seaOfOrigin"
  }
  else if (statusValue !== "") {
    value = statusValue
    filterBy = "status"

  }

  const filtered = filterData(data, filterBy, value);
  const sortedName = sortData(filtered, "name", sortOrder);
  rootRender.innerHTML = "";
  const sortedList = renderItems(sortedName);
  rootRender.appendChild(sortedList);
}

);



sortedBounty.addEventListener("change", () => {
  let value;
  let filterBy;
  const crewValue = filterCrew.value;
  const originValue = filterOrigin.value;
  const statusValue = filterStatus.value;
  const sortOrder = sortedBounty.value;
  if (crewValue !== "") {
    value = crewValue
    filterBy = "crewOrigin"
  }
  else if (originValue !== "") {
    value = originValue
    filterBy = "seaOfOrigin"
  }
  else if (statusValue !== "") {
    value = statusValue
    filterBy = "status"

  }

  const filtered = filterData(data, filterBy, value);
  const sortedName = sortData(filtered, "name", sortOrder);
  let filterSortNameData;
  if (filtered && sortedName !== " ") {
    filterSortNameData = filtered && sortedName;
  }
  const sortedBountyResult = sortBounty(filterSortNameData, sortOrder);
  rootRender.innerHTML = "";
  const sortedList = renderItems(sortedBountyResult);
  rootRender.appendChild(sortedList);
});
clearButton.addEventListener("click", () => {
  filterOrigin.value = "";
  filterCrew.value = "";
  filterStatus.value = "";
  sortName.value = "";
  sortedBounty.value = "";
  rootRender.innerHTML = "";
  rootRender.appendChild(renderItems(data));
});

factsButton.addEventListener("click", (e) => {
  e.preventDefault;
  rootRender.innerHTML = "";
  charactersTitle.innerHTML = "Facts"
  rootRender.appendChild(renderStats());
  const origen = document.querySelector("#idOrigin");
  origen.innerHTML = "Did you know that " + computeStats(data, "seaOfOrigin", "East Blue") + "% of the characters come from East Blue.";

  const crew = document.querySelector("#idCrew");

  crew.innerHTML = "Did you know that " + computeStats(data, "crewOrigin", "Straw Hat Pirates") + "% of the characters are from Luffy's crew (Straw Hat Pirates)."

  const bounty = document.querySelector("#idBounty");
  bounty.innerHTML = "Did you know that " + computeStatsBounty(data, "bounty", "315,000,000") + "% of the characters have a bounty over 315,000,000."

});