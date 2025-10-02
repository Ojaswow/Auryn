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