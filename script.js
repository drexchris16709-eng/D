document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");
    const loaderContainer = document.getElementById("loader-container");

    video.muted = false;
    video.play().catch(error => {
        console.warn("Autoplay blocked or video playback error:", error);
    });

    setTimeout(() => {
        loaderContainer.classList.add("visible");
        
        setTimeout(() => {
            window.location.href = "Choices/index.html";
        }, 6000);
        
    }, 8000);
});
