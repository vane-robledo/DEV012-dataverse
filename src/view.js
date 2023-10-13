export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.setAttribute("itemscope", "");
  ul.setAttribute("itemtype", "One Piece")
  data.forEach((element) => {
    const li = document.createElement("li");
    li.classList.add("cards")
    
    li.innerHTML = `
    <h3 itemprop="name">${element.name}</h3>
    <img src="${element.imageUrl}" alt="${element.id}">
    <p itemprop="description">${element.description}</p>
    <h4 itemprop="bounty">${element.facts.bounty} Berries</h4>
    `;
    const root = document.querySelector("#root")
    ul.appendChild(li);
    root.appendChild(ul)
  });
  return ul;
};
