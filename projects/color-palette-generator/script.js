const palette = document.getElementById("palette");
const generateBtn = document.getElementById("generateBtn");

function getRandomColor() {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return "#" + hex.padStart(6, "0");
}

function generatePalette() {
  palette.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
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

    palette.appendChild(box);
  }
}

generateBtn.addEventListener("click", generatePalette);

// Generate initial palette
generatePalette();
