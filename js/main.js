
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('ini buat kamu').split('')
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 1000ms delay
      }
    }

    // TAMBAHAN: Music Control
    const bgMusic = document.getElementById('bgMusic');
    const musicToggle = document.getElementById('musicToggle');
    let isMusicPlaying = false;

    musicToggle.addEventListener('click', function() {
        if (isMusicPlaying) {
            bgMusic.pause();
            musicToggle.textContent = '🔇';
            musicToggle.style.background = 'rgba(102, 126, 234, 0.9)';
        } else {
            bgMusic.play();
            musicToggle.textContent = '🔊';
            musicToggle.style.background = 'rgba(118, 75, 162, 0.9)';
        }
        isMusicPlaying = !isMusicPlaying;
    });

    // Auto play on first interaction
    document.addEventListener('click', function autoPlay() {
        if (!isMusicPlaying) {
            bgMusic.play();
            musicToggle.textContent = '🔊';
            musicToggle.style.background = 'rgba(118, 75, 162, 0.9)';
            isMusicPlaying = true;
        }
        document.removeEventListener('click', autoPlay);
    }, { once: true });

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
