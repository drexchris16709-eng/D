const modal = document.getElementById("musicModal");
    const btn = document.getElementById("musicBtn");
    const span = document.getElementsByClassName("close")[0];
    const audio = document.getElementById("horrorAudio");

    btn.onclick = function() {
        modal.style.display = "block";
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    function playMusic() {
        audio.play();
    }

    function pauseMusic() {
        audio.pause();
    }