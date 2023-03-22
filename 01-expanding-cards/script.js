const container = document.querySelector(".container");
const cards = document.querySelectorAll(".card");

const expand = (e) => {
  if (e.target.classList.contains("card")) {
    cards.forEach((card) => card.classList.remove("active"));
    e.target.classList.add("active");
  }
};

container.addEventListener("click", expand);
