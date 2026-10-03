
document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".nav a").forEach(function (link) {
    link.addEventListener("click", function () {
      var href = link.getAttribute("href");
      if (href && href !== "#") {
        window.location.href = href;
      }
    });
  });

  var trigger = document.querySelector(".menu-trigger");
  var nav = document.querySelector(".main-nav .nav");
  if (trigger && nav) {
    trigger.addEventListener("click", function () {
      nav.classList.toggle("active");
      trigger.classList.toggle("active");
    });
  }
});
