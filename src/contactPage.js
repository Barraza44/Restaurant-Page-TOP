import { main } from "./index";

function renderContactPage() {
  const content = document.createElement("section");
  main.appendChild(content);
  content.setAttribute("class", "contact-page");
  content.dataset.page = "contact.menu";

  const title = document.createElement("h1");
  content.appendChild(title);
  title.textContent = "Contact";
}

export { renderContactPage };
