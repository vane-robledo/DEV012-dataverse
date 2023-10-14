export const renderItems = (data) => {
  const ul = document.createElement("ul");
  ul.setAttribute("itemscope", "");
  ul.setAttribute("itemtype", "One Piece");
  data.forEach((element) => {
    const li = document.createElement("li");
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
  const ul = document.createElement("ul");
  const liOrigin = document.createElement("li");
  const liCrew = document.createElement("li");
  const liBounty = document.createElement("li");
  liCrew.classList.add("cards");
  liOrigin.classList.add("cards");
  liBounty.classList.add("cards");
  liOrigin.innerHTML = `
  <h3>Origin</h3>
  <img src="https://cdn.myanimelist.net/s/common/uploaded_files/1447350221-41774e2d831c741252034f3e287dc61d.jpeg" alt="">
  <button class="more-info">More Info</button>
  `;
  liCrew.innerHTML = `
  <h3>Crew</h3>
  <img src="https://i.pinimg.com/originals/ff/e8/e8/ffe8e84d96f9417fec86d2b84470a0b6.jpg" alt="">
  <button class="more-info">More Info</button>
  `;
  liBounty.innerHTML = `
  <h3>Bounty</h3>
  <img src="https://birdsofherme.files.wordpress.com/2021/08/sanji-bounty.jpg" alt="">
  <button class="more-info">More Info</button>
  `;
  const root = document.querySelector("#root");
  ul.appendChild(liOrigin);
  ul.appendChild(liCrew);
  ul.appendChild(liBounty);
  root.appendChild(ul);
  return ul;
}