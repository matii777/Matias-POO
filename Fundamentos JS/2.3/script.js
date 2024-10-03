console.log("page loaded...");

// Selecciona el elemento de video
const video = document.getElementById('main-video');

// Agrega el evento para reproducir el video cuando el mouse pasa sobre él
video.addEventListener('mouseover', () => {
    video.play();
});

// Agrega el evento para pausar el video cuando el mouse sale del área del video
video.addEventListener('mouseout', () => {
    video.pause();
});
