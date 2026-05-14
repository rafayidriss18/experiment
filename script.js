function startApp() {
    const profileScreen = document.getElementById('profile-screen');
    const mainScreen = document.getElementById('main-screen');
    const music = document.getElementById('bg-music');

    // Fade out profile screen
    profileScreen.style.opacity = '0';
    
    setTimeout(() => {
        profileScreen.classList.add('hidden');
        mainScreen.classList.remove('hidden');
        // Start the song
        music.play();
    }, 800);
}

function playVideo() {
    const video = document.getElementById('main-video');
    const music = document.getElementById('bg-music');
    
    if (video.muted) {
        video.muted = false;
        music.pause(); // Pause background music if video has its own sound
    } else {
        video.muted = true;
        music.play();
    }
    video.play();
}
