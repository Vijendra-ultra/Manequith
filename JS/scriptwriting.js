// Select DOM elements
const scriptEditor = document.querySelector(".scriptTextEditor");
const saveButton = document.querySelector(".save-btn");
const scriptNameElement = document.querySelector(".scriptName");
const scriptModal = document.querySelector(".scriptModal");

// Set initial script name
let scriptName = "Untitled Script";
scriptNameElement.textContent = scriptName;

// Load saved script content if it exists
window.onload = () => {
  const savedScript = localStorage.getItem(scriptName);
  if (savedScript) {
    scriptEditor.innerHTML = savedScript;
  }
};

// Save the script content
saveButton.addEventListener("click", () => {
  const scriptContent = scriptEditor.innerHTML;
  localStorage.setItem(scriptName, scriptContent);
  alert(`Script "${scriptName}" saved successfully!`);
});

// Handle script renaming via modal
scriptModal.addEventListener("click", () => {
  const newScriptName = prompt("Enter a new script name:", scriptName);
  if (newScriptName && newScriptName.trim() !== "") {
    scriptName = newScriptName.trim();
    scriptNameElement.textContent = scriptName;
    alert(`Script renamed to "${scriptName}"`);
  }
});

// Keyboard event listener for editor features
// Keyboard event listener for editor features
scriptEditor.addEventListener("keydown", (e) => {
  // Check if the Ctrl key is held down
  if (e.ctrlKey && e.key.length === 1) {
    // A letter key is pressed with Ctrl
    e.preventDefault(); // Prevent default action

    // Check for the specific letter and execute the corresponding action
    if (e.key === "d" || e.key === "D") {
      applyStyleToText({
        margin: "0 1.2rem",
        fontFamily: "Poppins",
        fontWeight: "500",
      });
    }

    if (e.key === "a" || e.key === "A") {
      applyStyleToText({
        margin: "0",
        fontFamily: "serif",
      });
    }

    if (e.key === "n" || e.key === "N") {
      addNewLineWithSuggestion("EXT./INT.", "3.6rem");
    }
  }
});
