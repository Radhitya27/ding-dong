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

    appendTitle();

    clearTimeout(c);
  }, 1000);
};


// TAMBAHAN: Music Control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

musicToggle.addEventListener('click', function(e) {
    e.stopPropagation();
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

// Auto play music saat halaman load (animasi bunga mulai)
window.addEventListener('load', function() {
    setTimeout(() => {
        bgMusic.play().then(() => {
            musicToggle.textContent = '🔊';
            musicToggle.style.background = 'rgba(118, 75, 162, 0.9)';
            isMusicPlaying = true;
        }).catch(err => {
            // Jika browser block autoplay, play saat user interact
            console.log('Autoplay prevented, waiting for user interaction');
            document.addEventListener('click', function playOnClick() {
                bgMusic.play().then(() => {
                    musicToggle.textContent = '🔊';
                    musicToggle.style.background = 'rgba(118, 75, 162, 0.9)';
                    isMusicPlaying = true;
                }).catch(e => console.log(e));
                document.removeEventListener('click', playOnClick);
            }, { once: true });
        });
    }, 500); // Delay 0.5 detik setelah halaman load
});