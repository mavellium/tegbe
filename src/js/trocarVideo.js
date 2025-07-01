function trocarVideo() {
  const video = document.getElementById('bg-video');
  if (!video) return;

  const source = video.querySelector('source');
  if (!source) return;

  const isMobile = window.innerWidth <= 768;
  const src = isMobile
    ? "/public/bg-section-1-mobile.mp4"
    : "/public/bg-section-1.mp4";

  if (source.src.includes(src)) return;

  source.src = src;
  video.load();

  video.muted = true;
  video.play().catch((e) => {
    console.warn("Erro ao tentar reproduzir o vídeo:", e);
  });
}

window.addEventListener('DOMContentLoaded', trocarVideo);
window.addEventListener('resize', trocarVideo);

export default trocarVideo;