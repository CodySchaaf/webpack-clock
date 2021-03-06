import { Title } from "../Title";
import { Clock } from "../Clock";
import { Quote } from "../Quote";

import "./style.css";

export function App() {
  const date = new Date();
  const dayOfTheWeek = date.toLocaleDateString([], { weekday: "long" });
  const time = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  document.title = time;

  Title({ title: `It\'s ${dayOfTheWeek} and the current time is:` });
  const anchor = Clock({ time });

  (requestIdleCallback ?? setTimeout)(async () => {
    const { Tooltip } = await import("../Tooltip");
    Tooltip({ anchor });
  });

  Quote();
}
