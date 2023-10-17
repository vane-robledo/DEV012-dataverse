export const renderItems = (data) => {
  const ul = document.createElement("ul");
  data.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "One Piece");
    li.classList.add("cards");
    li.innerHTML = `
    <h3 itemprop="name">${element.name}</h3>
    <img src="${element.imageUrl}" alt="${element.id}">
    <p itemprop="description">${element.description}</p>
    <h4 itemprop="bounty">${element.facts.bounty} Berries</h4>
    `;
    const root = document.querySelector("#root");
    ul.appendChild(li);
    root.appendChild(ul);
  });
  return ul;
};
export const renderStats = () => {
  const root = document.querySelector("#root");
  const ul = document.createElement("ul");
  //Render Origin Card
  const liOrigin = document.createElement("li");
  liOrigin.classList.add("cards");
  const h3Origin = document.createElement("h3");
  h3Origin.innerHTML = "Origin Fact";
  const imgOrigin = document.createElement("img");
  imgOrigin.classList.add("img-origin");
  const pOrigin = document.createElement("p");
  pOrigin.id = "origin";
  liOrigin.appendChild(h3Origin);
  liOrigin.appendChild(imgOrigin);
  liOrigin.appendChild(pOrigin);
  ul.appendChild(liOrigin);
  //Render Crew Card
  const liCrew = document.createElement("li");
  liCrew.classList.add("cards");
  const h3Crew = document.createElement("h3");
  h3Crew.innerHTML = "Crew Fact";
  const imgCrew = document.createElement("img");
  imgCrew.classList.add("img-crew");
  const pCrew = document.createElement("p");
  pCrew.id = "crew";
  liCrew.appendChild(h3Crew);
  liCrew.appendChild(imgCrew);
  liCrew.appendChild(pCrew);
  ul.appendChild(liCrew);
  //Render Bounty Card
  const liBounty = document.createElement("li");
  liBounty.classList.add("cards");
  const h3Bounty = document.createElement("h3");
  h3Bounty.innerHTML = "Bounty Fact";
  const imgBounty = document.createElement("img");
  imgBounty.classList.add("img-Bounty");
  const pBounty = document.createElement("p");
  pBounty.id = "bounty";
  liBounty.appendChild(h3Bounty);
  liBounty.appendChild(imgBounty);
  liBounty.appendChild(pBounty);
  ul.appendChild(liBounty);
  root.appendChild(ul);
  return ul;
};