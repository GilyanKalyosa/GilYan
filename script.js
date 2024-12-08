
        // JavaScript to toggle the glow effect
        document.querySelectorAll('.learnings-box').forEach(box => {
            box.addEventListener('click', () => {
                // Toggle the glowing class when a box is clicked
                box.classList.toggle('glowing');
            });
        });
    