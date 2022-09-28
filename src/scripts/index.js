// The following line makes sure your styles are included in the project. Don't remove this.
import "../styles/main.scss";
// Import any additional modules you want to include below \/
import jsonRecipes from "./data";

// \/ All of your javascript should go here \/
const recipes = JSON.parse(jsonRecipes);
console.log(recipes);
const cakeDiv = document.getElementById("cakes");

recipes.cakes.forEach((cake) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.style.width = "18rem";
  div.style.margin = "0 1em";

  const img = document.createElement("img");
  img.src = cake.image;
  img.height = 200;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerHTML = cake.title;

  const subTitle = document.createElement("h6");
  subTitle.classList.add("card-subtitle", "mb-2", "text-muted");
  subTitle.innerHTML = cake.author;

  const footer = document.createElement("div");
  footer.classList.add("card-footer");
  footer.style.height = "6rem";

  const footerText = document.createElement("small");
  footerText.classList.add("text-muted");
  footerText.innerHTML = `ingredients: ${cake.ingredients}`;

  footer.appendChild(footerText);
  cardBody.appendChild(title);
  cardBody.appendChild(subTitle);
  div.appendChild(img);
  div.appendChild(cardBody);
  div.appendChild(footer);
  cakeDiv.appendChild(div);
});

const biscuitsDiv = document.getElementById("biscuits");
recipes.biscuits.forEach((biscuit) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.style.width = "18rem";
  div.style.margin = "0 1em";

  const img = document.createElement("img");
  img.src = biscuit.image;
  img.height = 200;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerHTML = biscuit.title;

  const subTitle = document.createElement("h6");
  subTitle.classList.add("card-subtitle", "mb-2", "text-muted");
  subTitle.innerHTML = biscuit.author;

  const footer = document.createElement("div");
  footer.classList.add("card-footer");
  footer.style.height = "6rem";

  const footerText = document.createElement("small");
  footerText.classList.add("text-muted");
  footerText.innerHTML = `ingredients: ${biscuit.ingredients}`;

  footer.appendChild(footerText);
  cardBody.appendChild(title);
  cardBody.appendChild(subTitle);
  div.appendChild(img);
  div.appendChild(cardBody);
  div.appendChild(footer);
  biscuitsDiv.appendChild(div);
});
const breadDiv = document.getElementById("bread");
recipes.bread.forEach((breads) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.style.width = "18rem";
  div.style.margin = "0 1em";

  const img = document.createElement("img");
  img.src = breads.image;
  img.height = 200;

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");

  const title = document.createElement("h5");
  title.classList.add("card-title");
  title.innerHTML = breads.title;

  const subTitle = document.createElement("h6");
  subTitle.classList.add("card-subtitle", "mb-2", "text-muted");
  subTitle.innerHTML = breads.author;

  const footer = document.createElement("div");
  footer.classList.add("card-footer");
  footer.style.height = "6rem";

  const footerText = document.createElement("small");
  footerText.classList.add("text-muted");
  footerText.innerHTML = `ingredients: ${breads.ingredients}`;

  footer.appendChild(footerText);
  cardBody.appendChild(title);
  cardBody.appendChild(subTitle);
  div.appendChild(img);
  div.appendChild(cardBody);
  div.appendChild(footer);
  breadDiv.appendChild(div);
});
