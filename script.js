const date = new Date();
const hours = date.getHours();
const body = document.querySelector("body");

if (hours >= 18 || hours <= 8) {
  body.classList.add("dark");
} else {
  body.classList.add("light");
}
