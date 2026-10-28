// Wait for the page to fully load, then remove the "not-loaded" class
// to trigger all the CSS flower growing animations
window.addEventListener("load", function () {
  setTimeout(function () {
    document.body.classList.remove("not-loaded");
  }, 500);
});
