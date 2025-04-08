// Optional keyboard swipe for desktop
document.addEventListener("keydown", function (e) {
    const container = document.querySelector(".swipe-container");
    if (e.key === "ArrowRight") {
        container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
    } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
    }
});
