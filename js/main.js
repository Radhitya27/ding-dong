// Typing effect untuk judul
const text = "Untuk Seseorang yang Spesial"; // Ubah sesuai keinginan
let index = 0;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("title").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Panggil setelah halaman load
setTimeout(typeWriter, 2000);

// Hilangkan class "not-loaded" setelah animasi selesai
setTimeout(() => {
    document.body.classList.remove('not-loaded');
}, 1000);

// TAMBAHAN: Music Control
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');
let isMusicPlaying = false;

musicToggle.addEventListener('click', function(e) {
    e.stopPropagation(); // Prevent double trigger
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
        bgMusic.play().then(() => {
            musicToggle.textContent = '🔊';
            musicToggle.style.background = 'rgba(118, 75, 162, 0.9)';
            isMusicPlaying = true;
        }).catch(err => {
            console.log('Autoplay prevented:', err);
        });
    }
    document.removeEventListener('click', autoPlay);
}, { once: true });