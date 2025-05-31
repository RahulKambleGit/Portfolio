function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

function generateAnalogousPalette() {
  const baseHue = Math.floor(Math.random() * 360);
  const paletteContainer = document.getElementById("palette");
  paletteContainer.innerHTML = "";

  for (let i = -2; i <= 2; i++) {
    const hue = (baseHue + i * 20 + 360) % 360;
    const color = hslToHex(hue, 70, 60);

    const box = document.createElement("div");
    box.className = "color-box";
    box.style.backgroundColor = color;

    const code = document.createElement("div");
    code.className = "hex-code";
    code.innerText = color;

    box.appendChild(code);
    box.addEventListener("click", () => {
      navigator.clipboard.writeText(color);
      code.innerText = "Copied!";
      setTimeout(() => (code.innerText = color), 1000);
    });

    paletteContainer.appendChild(box);
  }
}

generateAnalogousPalette();
