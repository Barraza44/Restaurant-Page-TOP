import "./styles.css";
import { renderMainPage } from "./mainPage";

const main = document.querySelector("main");

window.onload = () => {
  const navigation = document.createElement("nav");
  main.appendChild(navigation);

  const createList = document.createElement("ul");
  navigation.appendChild(createList);

  for (let i = 0; i <= 3; i += 1) {
    const list = document.createElement("li");
    list.setAttribute("class", `el${i}`);
    createList.appendChild(list);
  }

  const list1 = document.querySelector(".el0");
  list1.textContent = "Home";
  renderMainPage();
};
