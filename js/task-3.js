const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

nameInput.addEventListener("input", function () {
  const putValue = nameInput.value.trim();
  if (putValue === "") {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = putValue;
  }
});
