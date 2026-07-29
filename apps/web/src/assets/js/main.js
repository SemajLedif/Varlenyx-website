// VARLENYX site.js — MBO §7/§13: vanilla JS only, no framework runtime.

(function () {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");
  const panel = document.getElementById("nav-mobile-panel");

  if (toggle && panel) {
    toggle.addEventListener("click", () => {
      const isOpen = panel.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  if (nav) {
    const onScroll = () => {
      nav.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }
})();
