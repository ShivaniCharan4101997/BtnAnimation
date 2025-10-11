const button = document.querySelector("button");

button.addEventListener("mousemove", (e) => {
  const rect = button.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const offsetX = x - centerX;
  const offsetY = y - centerY;

  const shadowX = offsetX / 5;
  const shadowY = offsetY / 3;

  const insetX = offsetX / 20;
  const insetY = offsetY / 8;

  button.style.boxShadow = `
    inset ${-insetX}px ${-insetY}px 6px var(--white),
    inset ${insetX}px ${insetY}px 6px var(--dark-color),
    ${shadowX}px ${shadowY}px 15px rgba(0,0,0,0.3),
    ${-shadowX}px ${-shadowY}px 15px hsla(207,88%,40%,0.9)
  `;
});

button.addEventListener("mouseleave", () => {
  button.style.boxShadow = `
    inset 0 -2px 2px var(--dark-color),
    inset 0 2px 2px var(--white),
    0 18px 18px -14px #fff,
    -24px 48px 48px hsla(207, 88%, 40%, 0.9)
  `;
});
