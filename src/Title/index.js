import "./style.css";

export function Title({ title }) {
  document.querySelector(".title").innerHTML = title;
}
