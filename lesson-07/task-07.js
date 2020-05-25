// =========================================
// Task-01
// =========================================

const catigories = document.getElementsByTagName("h2");

let output = (catigories) => {
  Array.from(catigories).forEach((item) => {
    console.log(
      `Categories: ${item.textContent} </b> Quantity: ${item.nextElementSibling.children.length}`
    );
  });
};

output(catigories);

// =========================================
// Task-02
// =========================================

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];

const ul = document.querySelector("#ingredients");

ingredients.forEach((item) => {
  let li = document.createElement("li");
  li.textContent = item;
  ul.append(li);
});

// =========================================
// Task-03
// =========================================

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

let ul = document.querySelector("#gallery");

ul.insertAdjacentHTML(
  "afterbegin",
  images.map((item) => {
    let newImg = document.createElement("img");
    newImg.src = item.url;
    newImg.alt = item.alt;
    return `<li> ${newImg.outerHTML}</li>`;
  })
);

// =========================================
// Task-04
// =========================================

let counterValue = 0;

const incrementButton = document.querySelector(
  "button[data-action='increment']"
);
const decrementButton = document.querySelector(
  "button[data-action='decrement']"
);
const span = document.querySelector("span");

const increment = () => {
  span.textContent = counterValue += 1;
};
const decrement = () => {
  span.textContent = counterValue -= 1;
};

incrementButton.addEventListener("click", increment);
decrementButton.addEventListener("click", decrement);

// =========================================
// Task-05
// =========================================

const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (e) => {
  output.textContent = e.target.value;
  if (output.textContent === "") {
    output.textContent = "Незнакомец";
  }
});

// =========================================
// Task-06
// =========================================

let input = document.querySelector("#validation-input");

input.addEventListener("blur", (e) => {
  if (e.target.value.length === Number(input.getAttribute("data-length"))) {
    input.classList.remove("invalid");
    input.classList.add("valid");
  } else input.classList.add("invalid");
});

// =========================================
// Task-07
// =========================================

let input = document.querySelector("#font-size-control");
let span = document.querySelector("#text");
input.addEventListener("input", (e) => {
  span.style.fontSize = e.currentTarget.value + "px";
});
