import "./style.scss";

export function Clock({ time }) {
  document.querySelector(".clock").innerHTML = time;
}
