document.addEventListener("DOMContentLoaded", () => {
  const textarea = document.querySelector("#message");
  const counter = document.querySelector("#charCount");

  if (!textarea || !counter) return;

  textarea.addEventListener("input", () => {
    counter.textContent = `characters: ${textarea.value.length}`;
  });
});