const main = document.querySelector("main");

function renderMainPage() {
  const content = document.createElement("div");
  main.appendChild(content);
  content.setAttribute("class", "home-page");
}

export { renderMainPage };
