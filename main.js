const pickBtn = document.getElementById('pickMediaBtn');
const picker = document.getElementById('mediaPicker');
const gallery = document.getElementById('gallery');

// Trigger the hidden file input when button is clicked
pickBtn.addEventListener('click', () => {
    picker.click();
});

// Add selected images to the gallery
picker.addEventListener('change', (event) => {
    const files = event.target.files;

    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = document.createElement('img');
            img.src = e.target.result;
            gallery.appendChild(img);
        };
        reader.readAsDataURL(file);
    });

    // Reset input so user can select the same files again
    picker.value = "";
});
// -------------------------------
// Intro Video JS Code
// -------------------------------
let video = document.getElementById("intro-video");
let splash = document.getElementById("splash");
let content = document.getElementById("main-content");
let playBtn = document.getElementById("play-btn");

// Play button clicked
playBtn.addEventListener("click", () => {
  playBtn.style.display = "none";
  video.style.display = "block";
  video.play(); // sound will work now
});

// When video ends
video.addEventListener("ended", () => {
  splash.style.transition = "opacity 1s ease";
  splash.style.opacity = 0;

  setTimeout(() => {
    splash.style.display = "none";
    content.style.opacity = 1;
  }, 1000);
});