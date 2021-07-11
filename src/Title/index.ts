export function Title({ title }: { title: string }) {
  const titleDiv = document.querySelector(".title");

  if (titleDiv) {
    titleDiv.innerHTML = title;
  }
}
