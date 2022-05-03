const sliderEle = document.querySelector(".slider");

const cardsEle = document.createElement("div");
cardsEle.setAttribute("class", "cards");
sliderEle.appendChild(cardsEle);

let isPressed = false;
let xSpace;

const imageUrls = [
  "https://i.ibb.co/93gR20n/bgg1.jpg",
  "https://i.ibb.co/X3Gmvhw/bgg2.jpg",
  "https://i.ibb.co/YLp1Ntv/bgg3.jpg",
  "https://i.ibb.co/KX62vHS/bgg4.jpg",
  "https://i.ibb.co/tJgFvRY/bgg5.jpg",
];

const eachCardGenerator = (imageUrl) => {
  const cardEle = document.createElement("div");
  cardEle.setAttribute("class", "card");
  cardsEle.appendChild(cardEle);

  const imageEle = document.createElement("img");
  imageEle.src = imageUrl;
  imageEle.setAttribute("class", "card-image");
  cardEle.appendChild(imageEle);
};

imageUrls.forEach((each) => eachCardGenerator(each));

sliderEle.addEventListener("mousedown", (event) => {
  isPressed = true;
  xSpace = event.offsetX - cardsEle.offsetLeft;
  /* console.log(cardsEle.offsetLeft); */
  sliderEle.style.cursor = "grabbing";
});

sliderEle.addEventListener("mouseup", () => {
  sliderEle.style.cursor = "grab";
});

window.addEventListener("mouseup", () => {
  isPressed = false;
});

sliderEle.addEventListener("mouseout", () => {
    sliderEle.style.cursor = 'grab'
})

sliderEle.addEventListener("mousemove", (event) => {
  if (!isPressed) return;
  event.preventDefault();
  cardsEle.style.left = `${event.offsetX - xSpace}px`;
  boundaryCheck();
});

const boundaryCheck = () => {
  const slider_rect = sliderEle.getBoundingClientRect();
  const cards_rect = cardsEle.getBoundingClientRect();

  if (parseInt(cardsEle.style.left) > 0) {
    cardsEle.style.left = 0;
  } else if (cards_rect.right < slider_rect.right) {
    cardsEle.style.left = `-${cards_rect.width - slider_rect.width}px`;
  }
};


