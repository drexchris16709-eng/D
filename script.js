document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("bgVideo");
    const loaderContainer = document.getElementById("loader-container");

    const fallbackImage = "R.png";

    const setFallbackBackground = () => {
        video.style.display = "none";
        document.body.style.backgroundImage = `url('${fallbackImage}')`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
        document.body.style.backgroundRepeat = "no-repeat";
    };

    video.addEventListener("error", setFallbackBackground);

    video.muted = true;
    video.play().catch(error => {
        console.warn("Autoplay blocked by browser. Falling back to background image.");
        setFallbackBackground();
    });

    setTimeout(() => {
        loaderContainer.classList.add("visible");
        
        setTimeout(() => {
            window.location.href = "Choices/index.html";
        }, 6000);
        
    }, 8000);
});
