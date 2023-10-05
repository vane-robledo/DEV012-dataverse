export const renderItems = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("cards")
    const arr = document.querySelector("ul");

    li.innerHTML = `
      <h3 itemprop="name">${element.name}</h3>
      <img src="${element.imageUrl}" alt="${element.id}">
      <p itemprop="description">${element.description}</p>
      <h4 itemprop="bounty">${element.facts.bounty}</h4>
      `;
    arr.appendChild(li);
    return arr;
  });
};
