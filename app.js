// Template
const appDiv = document.getElementById("app");
const valueText = document.getElementById("value");
window.onkeypress = rKey;
const clickArea = document.getElementById("clickArea");
clickArea.addEventListener("click", eventAction);

// Functions
// --------------------------------- //
// Template
function updateTemplate(text, randomBackgroundColor) {
  valueText.innerHTML = text;
  appDiv.className = "fade-in";
  appDiv.style.backgroundColor = "#" + randomBackgroundColor;
}

// --------------------------------- //
// Capturing keys
function rKey(e) {
  if (e && e.code === "KeyR") {
    eventAction();
  }
}

function eventAction() {
  appDiv.className = "fade-out";
  setTimeout(async () => {
    const { adj, color } = await (await fetch("./api")).json();
    updateTemplate(adj, color);
  }, 400);
}
