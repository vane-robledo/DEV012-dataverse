export const renderItems = (data) => {
  data.forEach((element) => {
    const li = document.createElement("li");
    const arr = document.querySelector("ul");
    li.innerHTML = `
      <h2>${element.name}</h2>
      <img src='${element.imageUrl}' alt="${element.id}">
      <p>${element.description}</p>
      <p>${element.facts.bounty}</p>
      `;
    arr.appendChild(li);
    return arr;
  });

  //eslint-disable-next-line no-console
};
