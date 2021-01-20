const color1 = document.getElementById("color1");
const color2 = document.getElementById("color2");
const color3 = document.getElementById("color3");
const colorBtn = document.getElementById("changeBtn");
const body = document.querySelector("body");

colorBtn.addEventListener("click", () => {
  let rgb1 = Math.floor(Math.random() * 256);
  let rgb2 = Math.floor(Math.random() * 256);
  let rgb3 = Math.floor(Math.random() * 256);
  color1.innerText = rgb1;
  color2.innerText = rgb2;
  color3.innerText = rgb3;
  body.setAttribute(
    "style",
    `background-color: rgb(${rgb1}, ${rgb2}, ${rgb3})`
  );
});
