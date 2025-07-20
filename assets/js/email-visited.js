document.addEventListener("DOMContentLoaded", function () {
  const emailLink = document.querySelector(".email-link");

  if (!emailLink) return;

  emailLink.addEventListener("click", function () {
    emailLink.classList.add("clicked");
    localStorage.setItem("emailLinkClicked", "true");
  });

  if (localStorage.getItem("emailLinkClicked") === "true") {
    emailLink.classList.add("clicked");
  }
});