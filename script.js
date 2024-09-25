// Toggle between dark and light mode
document.getElementById('modeToggle').addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('dark-mode');

    // Change button text based on current mode
    this.textContent = body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode';
});

// Removed the binary rain animation as per your request
