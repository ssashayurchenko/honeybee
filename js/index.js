function init() {
  import("./global.header.js");
  import("./index.services-carousel.js");
}

const totalPartials = document.querySelectorAll(
  '[data-hx-trigger="load"], [hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
  loadedPartialsCount++;
  if (loadedPartialsCount === totalPartials) init();
});
