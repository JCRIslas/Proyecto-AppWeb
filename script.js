document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('background-video');
    const replayButton = document.getElementById('replay-button');
    const forgotLink = document.getElementById('forgot-link');
    const forgotModal = document.getElementById('forgot-modal');
    const closeButton = document.getElementById('close-button');

    video.play();

    // Pausar/Reanudar el video cuando se hace clic en él
    video.addEventListener('click', () => {
        if (video.paused) {
            video.play();
        } else {
            video.pause();
        }
    });

    // Añadir la clase fade-out en los últimos 2 segundos del video
    video.addEventListener('timeupdate', () => {
        const fadeStart = video.duration - 2; // Last 2 seconds of the video
        if (video.currentTime >= fadeStart) {
            video.classList.add('fade-out');
        } else {
            video.classList.remove('fade-out');
        }
    });

    // Mostrar el botón de "Reproducir de nuevo" cuando el video termina
    video.addEventListener('ended', () => {
        video.classList.remove('fade-out'); // Ensure the video does not loop
        replayButton.classList.remove('hidden');
        replayButton.style.display = 'block'; // Show replay button
    });

    // Reproducir el video de nuevo cuando se hace clic en el botón
    replayButton.addEventListener('click', () => {
        video.currentTime = 0;
        video.play();
        replayButton.classList.add('hidden');
        replayButton.style.display = 'none'; // Hide replay button
    });

    // Abrir el modal cuando se hace clic en el enlace "Olvidé mi contraseña"
    forgotLink.addEventListener('click', (event) => {
        event.preventDefault();
        forgotModal.style.display = 'block';
    });

    // Cerrar el modal cuando se hace clic en el botón de cerrar
    closeButton.addEventListener('click', () => {
        forgotModal.style.display = 'none';
    });

    // Cerrar el modal cuando se hace clic fuera del contenido del modal
    window.addEventListener('click', (event) => {
        if (event.target === forgotModal) {
            forgotModal.style.display = 'none';
        }
    });
});
