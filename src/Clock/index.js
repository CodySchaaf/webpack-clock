import Dog from "./dog.jpg";

export function Clock({ time }) {
  document.querySelector(".clock").innerHTML = time;

  // Add the image to our existing div.
  const myIcon = new Image();
  myIcon.setAttribute("src", Dog);
  myIcon.setAttribute("width", "100%");

  document.querySelector(".clock").after(myIcon);
}
