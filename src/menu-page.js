import { main } from "./index";
import shrimpImg1 from "./shrimp1.jpg";
import shrimpImg2 from "./shrimp2.jpg";
import squidRings from "./rings.jpg";
import pufflefishNuggets from "./pufflefish-n.jpg";
import shrimpPlatter from "./platter.jpg";
import octopus from "./fried-octopus.jpg";
import blackberry from "./blackberry-cheesecake.jpg";

const entreesContainer = document.createElement("div");
const mainDishesContainer = document.createElement("div");
const dessertsContainer = document.createElement("div");

class Card {
  constructor(name, imgSrc, type) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.type = type;
  }
  renderCard() {
    const cardContainer = document.createElement("div");
    if (this.type === "entree") {
      entreesContainer.appendChild(cardContainer);
    } else if (this.type === "mainDish") {
      mainDishesContainer.appendChild(cardContainer);
    } else if (this.type === "dessert") {
      dessertsContainer.appendChild(cardContainer);
    }
    cardContainer.setAttribute("class", "food-card");

    const createImage = document.createElement("img");
    createImage.setAttribute("src", this.imgSrc);
    cardContainer.appendChild(createImage);

    const createText = document.createElement("p");
    createText.textContent = this.name;
    cardContainer.appendChild(createText);
  }

  static removeCard() {
    const cards = document.querySelectorAll(".food-card");
    cards.forEach((card) => card.remove());
  }
}

const shrimp1 = new Card("Shrimps in peach sauce", shrimpImg1, "entree");
const shrimp2 = new Card("Shimps in misterious sauce", shrimpImg2, "entree");
const squidRing = new Card("Fried squid rings", squidRings, "entree");

const pufflefish = new Card(
  "Pufferfish nuggets",
  pufflefishNuggets,
  "mainDish"
);

const bigShrimpPlatter = new Card(
  "The Big Shrimp Platter",
  shrimpPlatter,
  "mainDish"
);

const friedOctopus = new Card("Fried octopus", octopus, "mainDish");

const cheesecake = new Card("Blackberry cheesecake", blackberry, "dessert");

function renderMenuPage() {
  const content = document.createElement("section");
  content.dataset.page = "food-menu";
  main.appendChild(content);

  const title1 = document.createElement("h1");
  content.appendChild(title1);
  title1.textContent = "Menu";

  const textEntrees = document.createElement("h2");
  textEntrees.textContent = "Entrees";
  content.appendChild(textEntrees);
  textEntrees.setAttribute("class", "food-head");

  content.appendChild(entreesContainer);
  entreesContainer.dataset.content = "seafood-entrees";
  entreesContainer.className = "card-container";

  const textMainDishes = document.createElement("h2");
  textMainDishes.textContent = "Main Dishes";
  content.appendChild(textMainDishes);
  textMainDishes.setAttribute("class", "food-head");

  content.appendChild(mainDishesContainer);
  mainDishesContainer.dataset.content = "seafood-main-dishes";
  mainDishesContainer.className = "card-container";

  const textDesserts = document.createElement("h2");
  textDesserts.textContent = "Desserts";
  textDesserts.setAttribute("class", "food-head");

  content.appendChild(dessertsContainer);
  dessertsContainer.dataset.content = "seafood-desserts";
  dessertsContainer.className = "card-container";

  shrimp1.renderCard();
  shrimp2.renderCard();
  squidRing.renderCard();

  pufflefish.renderCard();
  bigShrimpPlatter.renderCard();
  friedOctopus.renderCard();
}

export { renderMenuPage, Card };
