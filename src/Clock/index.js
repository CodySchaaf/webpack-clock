export function Clock({ time }) {
  document.querySelector(".clock").innerHTML = time;

  console.log(...["hi", "bye", "ok"]);
}
