function trocarVideo() {
  const video = document.getElementById('bg-video');
  if (!video) return;

  const isMobile = window.innerWidth <= 768;
  const src = isMobile
    ? "/public/bg-section-1-mobile.mp4"
    : "/public/bg-section-1.mp4";

  // Se já estiver no src certo, não troca
  if (video.src.includes(src)) return;

  video.src = src;
  video.load();
  video.play();
}

window.addEventListener('DOMContentLoaded', trocarVideo);
window.addEventListener('resize', trocarVideo);

export default trocarVideo;
