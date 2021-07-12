import { createPopper } from "@popperjs/core";
import Quotes from "../Tooltip/quotes.json";

export function Tooltip({ anchor }) {
    const tooltip = document.createElement("div");
    tooltip.setAttribute("role", "tooltip");
    tooltip.classList.add("tooltip");

    const [quote, person] = Quotes[Math.floor(Math.random() * Quotes.length)];

    tooltip.innerHTML = `
    <blockquote>
        <p>"${quote}"</p>
        <cite>- ${person}</cite>
    </blockquote>
    <div class="arrow" data-popper-arrow></div>
  `;

    document.body.append(tooltip);

    const popperInstance = createPopper(anchor, tooltip, {
        modifiers: [
            {
                name: "offset",
                options: {
                    offset: [0, 8],
                },
            },
        ],
    });

    setTimeout(() => {
        tooltip.setAttribute("data-show", "");
        popperInstance.update();
    }, 1000);
}
