const buttons = document.querySelectorAll('.serverbutton');
const clickSound = document.getElementById('clickSound');


buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault();
        clickSound.currentTime = 0;
        clickSound.play().catch(error => {
            console.error("Audio playback failed:", error);
        });

        setTimeout(() => {
            window.location.href = button.querySelector('a').href; 
        }, 100);
    });
});


clickSound.volume = 0.5;
clickSound.muted = false;
clickSound.playbackRate = 0.25;

const audio = document.getElementById('backgroundMusic');
    const volumeControl = document.getElementById('volumeControl');

    // Set initial volume
    audio.volume = volumeControl.value;

    // Update volume when slider value changes
    volumeControl.addEventListener('input', function() {
        audio.volume = this.value;
    });