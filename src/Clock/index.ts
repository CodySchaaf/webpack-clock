export function Clock({ time }: { time: string }) {
  const clockDiv = document.querySelector(".clock");

  if (clockDiv) {
    clockDiv.innerHTML = time;
  }
}
