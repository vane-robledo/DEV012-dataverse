export const renderItems = (data) => {
  const li = document.createElement("li");
  li.innerHTML = data;
  return li;

};
const arr = document.querySelector("ul");

arr.appendChild(renderItems("Prueba1"))


// eslint-disable-next-line no-console

