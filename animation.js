let audioCtx = null;

function initAudioContext() {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  return audioCtx;
}

function movingAnimation(element, startX, startY, endX, endY, duration) {}

function playSoundAndAnimation(element, startX, startY, endX, endY, duration) {
  try {
    const ctx = initAudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';           // smoothest, least "electronic" waveform
    osc.frequency.value = 800;   // higher = feels lighter/softer than low tones

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 0.005); // very low volume
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05); // fast fade, ~50ms total

    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 0.05);

    movingAnimation(element, startX, startY, endX, endY, duration);
  } catch (e) {
    console.error("Audio error:", e);
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

export { playSoundAndAnimation, sleep };