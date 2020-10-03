import { main } from "./index";
import beach from "./beach.jpg";

function renderMainPage() {
  const content = document.createElement("section");
  main.appendChild(content);
  content.setAttribute("class", "home-page");
  content.dataset.page = "home";

  const head1 = document.createElement("h1");
  content.appendChild(head1);
  head1.textContent = "The Dock";

  const head2 = document.createElement("h2");
  content.appendChild(head2);
  head2.textContent = "Good food from the sea to the shore";

  const image = document.createElement("img");
  image.setAttribute("src", beach);
  image.setAttribute("id", "img1");
  content.appendChild(image);

  const text = document.createElement("p");
  content.appendChild(text);
  text.textContent =
    "Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber earthnut pea peanut soko zucchini. ";
  text.setAttribute("class", "main-text");
}

export { renderMainPage };
