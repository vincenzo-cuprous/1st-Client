// This is the script
export function scrollToTop() {
    document.getElementById("scroll_up").addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}
