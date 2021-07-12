import "./style.css";

export function Clock({ time }) {
  const clockElement = document.querySelector(".clock");

  clockElement.innerHTML = time;

  return clockElement;
}
