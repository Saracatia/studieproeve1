// theme.js
document.addEventListener("DOMContentLoaded", () => {
    const themeLink = document.getElementById("theme-css");
    const btn = document.getElementById("theme-toggle");
    
    if (!themeLink || !btn) return;
    
    const THEME_KEY = "theme";
    const paths = {
        light: "../css/themes/light.css",
        dark: "../css/themes/dark.css"
    };
    
    function setTheme(mode) {
        themeLink.href = paths[mode];
        localStorage.setItem(THEME_KEY, mode);
        btn.textContent = mode === "dark" ? "☀" : "☾";
        btn.setAttribute("aria-label", mode === "dark" ? "Skift til lyst tema" : "Skift til mørkt tema");
    }
    
    // Check for saved theme or prefer-color-scheme
    const saved = localStorage.getItem(THEME_KEY);
    if (saved) {
        setTheme(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
        setTheme("dark");
    } else {
        setTheme("light");
    }
    
    // Toggle on click
    btn.addEventListener("click", () => {
        const isDark = themeLink.href.includes("dark.css");
        setTheme(isDark ? "light" : "dark");
    });
});