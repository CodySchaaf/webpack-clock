import "./styles.css";

export function Quote() {
  const quoteElement = document.querySelector(".quote");

  const observer = new IntersectionObserver(
    async ([{ isIntersecting, isVisible }]) => {
      if (isIntersecting) {
        const Quotes = await import("./quotes.json");

        const [quote, person] =
          Quotes[Math.floor(Math.random() * Quotes.length)];

        quoteElement.innerHTML = `
                <div>
                    <blockquote>
                        <p>"${quote}"</p>
                        <cite>- ${person}</cite>
                    </blockquote>
                </div>
            `;

        quoteElement.offsetHeight; // force a css repaint to apply 0 opacity before making visible so it animates in

        quoteElement.classList.add("visible");
      }
    },
    {
      threshold: 1,
    }
  );

  observer.observe(quoteElement);
}
