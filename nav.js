
document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.querySelector(".sidebar");
  const btn = document.querySelector(".sidebar__toggle");

  if (!sidebar || !btn) return;

  btn.addEventListener("click", () => {
    sidebar.classList.toggle("is-closed");

    // skift pil-symbol (valgfrit)
    btn.textContent = sidebar.classList.contains("is-closed") ? "▶" : "◀";
  });
});

//pil menu
btn.textContent = sidebar.classList.contains("is-closed") ? "❯" : "❮";
