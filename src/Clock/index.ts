export function Clock({ time }: { time: string }) {
  const clockElement = document.querySelector(".clock");

  if (clockElement) {
    clockElement.innerHTML = time;
  }

  return clockElement;
}
