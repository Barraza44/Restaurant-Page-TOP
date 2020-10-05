import "./styles.css";
import { renderMainPage } from "./mainPage";
import { renderMenuPage, Card } from "./menu-page";
import { renderContactPage } from "./contactPage";

const main = document.querySelector("main");

function renderContent() {
  const navigation = document.createElement("nav");
  main.appendChild(navigation);

  const list = document.createElement("ul");
  navigation.appendChild(list);

  const homeElement = document.createElement("li");
  list.appendChild(homeElement);
  homeElement.textContent = "Home";
  homeElement.classList.add("el0");

  const entriesElement = document.createElement("li");
  list.appendChild(entriesElement);
  entriesElement.textContent = "Menu";
  entriesElement.classList.add("el1");

  const mainDishesElement = document.createElement("li");
  list.appendChild(mainDishesElement);
  mainDishesElement.textContent = "Contact";
  mainDishesElement.classList.add("el2");
  renderMainPage();
}
renderContent();

const home = document.querySelector(".el0");
const foodMenu = document.querySelector(".el1");
const contactMenu = document.querySelector(".el2");

home.addEventListener("click", () => {
  const pageContent = document.querySelector("section");
  if (pageContent.dataset.page !== "home") {
    Card.removeCard();
    pageContent.parentNode.removeChild(pageContent);
    renderMainPage();
  }
});

foodMenu.addEventListener("click", () => {
  const pageContent = document.querySelector("section");
  if (pageContent.dataset.page !== "food-menu") {
    pageContent.parentNode.removeChild(pageContent);
    renderMenuPage();
  }
});

contactMenu.addEventListener("click", () => {
  const pageContent = document.querySelector("section");
  if (pageContent.dataset.page !== "contact-menu") {
    Card.removeCard();
    pageContent.parentNode.removeChild(pageContent);
    renderContactPage();
  }
});

export { main };
