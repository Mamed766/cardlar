function updateColor() {
  const cards = document.querySelectorAll(".card__cards--card");

  cards.forEach((card) => {
    const logo = card.querySelector(".card__cards--card__logo");
    const btn = card.querySelector(".card__cards--card__btn--btn");

    btn.style.color = "black";
    logo.style.backgroundColor = "black";

    btn.addEventListener("mouseover", () => {
      if (logo.classList.contains("request")) {
        setColor(logo, btn, "#4682B4");
      } else if (logo.classList.contains("pending")) {
        setColor(logo, btn, "#FF5733");
      } else if (logo.classList.contains("done")) {
        setColor(logo, btn, "#5F9EA0");
      } else if (logo.classList.contains("rich")) {
        setColor(logo, btn, "#E5B80B");
      }
      btn.style.color = "white";
    });

    btn.addEventListener("mouseout", () => {
      setColor(logo, btn, "white");
      logo.style.backgroundColor = "black";
      btn.style.color = "black";
    });
  });
}

function setColor(logo, btn, color) {
  logo.style.backgroundColor = color;
  btn.style.backgroundColor = color;
}

updateColor();
