import { Title } from "../Title";
import { Clock } from "../Clock";

import './style.css';

export function App() {
  const date = new Date();
  const dayOfTheWeek = date.toLocaleDateString([], { weekday: "long" });
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.title = time;

  Title({ title: `It\'s ${dayOfTheWeek} and the current time is:` });
  Clock({ time });
}
