onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    // PERBAIKAN: Cek apakah element ada
    const titleElement = document.getElementById('title');
    
    if (!titleElement) {
      console.error('Element #title tidak ditemukan!');
      return;
    }

    // Debug: Cek element sudah ada
    console.log('Title element found:', titleElement);
    
    const titles = 'ini buat kamu'.split('');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        if (titles[index] === ' ') {
          titleElement.textContent += '\u00A0'; // Non-breaking space
        } else {
          titleElement.textContent += titles[index];
        }
        index++;
        setTimeout(appendTitle, 300);
      }
    }

    appendTitle();
    clearTimeout(c);
  }, 1000);
};

// Music Control
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

window.addEventListener('load', function() {
    setTimeout(() => {
        bgMusic.play().then(() => {
            musicToggle.textContent = '🔊';
            musicToggle.style.background = 'rgba(118, 75, 162, 0.9)';
            isMusicPlaying = true;
        }).catch(err => {
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
    }, 500);
});