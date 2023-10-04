export const renderItems = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("cards")
    const arr = document.querySelector("ul");

    li.innerHTML = `
      <h2 itemprop="name">${element.name}</h2>
      <img src="${element.imageUrl}" alt="${element.id}">
      <p itemprop="description">${element.description}</p>
      <p itemprop="bounty">${element.facts.bounty}</p>
      `;
    arr.appendChild(li);
    return arr;
  });

};
