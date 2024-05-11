let list1 = document.querySelector(".second_line");
let list2 = document.querySelector(".third_line");
list1.classList.add("grid-item");
list1.classList.add("second_line");

// adding Array:
const products1 = [
  {
    title: "Gray T-Shirt",
    price: "$14.99",
    img: "GrayTShirt.png",
  },
  {
    title: "Black Jeans",
    price: "$34.99",
    img: "BlackJeans.png",
  },
  {
    title: "Green Jacket",
    price: "$59.95",
    img: "GreenJacket.png",
  },
  {
    title: "White Sneakers",
    price: "$49.95",
    img: "WhiteSneakers.png",
  },
];

// creating forEach Function for FIRST LINE:

products1.forEach(function (element) {
  // Creating Card:
  let card = document.createElement("div");
  card.classList.add("card");

  // creating image:
  let img = document.createElement("img");

  // Creating text_content:
  let text_content = document.createElement("div");
  text_content.classList.add("text_content");

  // creating spans:
  // product Name
  let productName = document.createElement("span");
  productName.classList.add("name");

  // product Price
  let productPrice = document.createElement("span");
  productPrice.classList.add("price");

  // Appending items:
  card.appendChild(img);
  card.appendChild(text_content);
  text_content.appendChild(productName);
  text_content.appendChild(productPrice);

  // transfering content
  img.src = "./photos/" + element.img;
  productName.textContent = element.title;
  productPrice.textContent = element.price;

  list1.appendChild(card);
});

const products2 = [
  {
    title: "Blue Sweatshirt",
    price: "$29.95 - $179.95",
    img: "BlueSweatshirt.png",
    colors: ["blue", "black"],
  },
  {
    title: "Red Hoodie",
    price: "$24.95 - $149.95",
    img: "RedHoodie.png",
    colors: ["red", "green"],
  },
  {
    title: "Yellow Pullover",
    price: "$19.95 - $129.95",
    img: "YellowPullover.png",
    colors: ["yellow", "orange"],
  },
  {
    title: "Purple Jacket",
    price: "$39.95 - $199.95",
    img: "PurpleJacket.png",
    colors: ["purple", "pink"],
  },
];

products2.forEach(function (element) {
  // Creating Card:
  let card = document.createElement("div");
  card.classList.add("card");

  // creating product img
  let img = document.createElement("img");

  // creating product text content
  let text_content = document.createElement("div");
  text_content.classList.add("text_content");
  // creating text content text

  let productName = document.createElement("span");
  productName.classList.add("name");

  let productPrice = document.createElement("span");
  productPrice.classList.add("price");

  let colorOption = document.createElement("div");
  colorOption.classList.add("color");

  let colorOption1 = document.createElement("div");
  let colorOption2 = document.createElement("div");

  let colorImg1 = document.createElement("img");
  let colorImg2 = document.createElement("img");
  colorImg1.src = "items/Item (1).svg";
  colorImg2.src = "items/Item.svg";

  // appending items:
  colorOption1.appendChild(colorImg1);
  colorOption2.appendChild(colorImg2);

  colorOption.appendChild(colorOption1);
  colorOption.appendChild(colorOption2);

  text_content.appendChild(productName);
  text_content.appendChild(productPrice);
  text_content.appendChild(colorOption);

  card.appendChild(img);
  card.appendChild(text_content);

  img.src = "./photos/" + element.img;
  productName.textContent = element.title;
  productPrice.textContent = element.price;

  list2.appendChild(card);
});
