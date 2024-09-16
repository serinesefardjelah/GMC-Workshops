const colorBox = document.getElementById("color-box");
const changeColorButton = document.getElementById("change-color-btn");

function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random() * 16);
    color += letters[index];
  }
  return color;
}

changeColorButton.addEventListener("click", () => {
  let color = getRandomColor();
  colorBox.style.backgroundColor = color;
  console.log(color);
});


