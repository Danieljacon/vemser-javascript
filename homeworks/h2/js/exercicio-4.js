const exercicio4 = () => {
  const sepia = document.getElementById("sepia");
  const opacity = document.getElementById("opacity");
  const image = document.getElementById("e4-image");

  const changeFilter = (filter, value) =>
    (image.style.filter = `${filter}(${value})`);

  sepia.addEventListener("input", () => {
    changeFilter("sepia", `${sepia.value}%`);
  });

  const greyscale = document.getElementById("greyscale");
  greyscale.addEventListener("click", () => {
    changeFilter("grayscale", `100%`);
  });

  opacity.addEventListener("click", () => {
    changeFilter("opacity", `70%`);
  });
};
