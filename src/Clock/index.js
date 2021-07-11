import "./style.css";

export function Clock({ time }) {
  document.querySelector(".clock").innerHTML = time;
}
