function updateColor() {
  const cards = document.querySelectorAll(".card__cards--card");

  cards.forEach((card) => {
    const logo = card.querySelector(".card__cards--card__logo");
    const btn = card.querySelector(".card__cards--card__btn--btn");

    if (logo.classList.contains("request")) {
      setColor(logo, btn, "#4682B4");
    } else if (logo.classList.contains("pending")) {
      setColor(logo, btn, "#FF5733");
    } else if (logo.classList.contains("done")) {
      setColor(logo, btn, "#5F9EA0");
    }
  });
}

function setColor(logo, btn, color) {
  logo.style.backgroundColor = color;
  btn.style.backgroundColor = color;
}

updateColor();
