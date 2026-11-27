const controls = document.querySelector<HTMLDivElement>('.request-controls');
const play = document.querySelector<HTMLButtonElement>('#play-request');
const sound = document.querySelector<HTMLInputElement>('#request-sound');
const status = document.querySelector<HTMLParagraphElement>('#request-status');
const stages = [...document.querySelectorAll<HTMLElement>('[data-stage]')];
const notes = [262, 330, 392, 523];

let timer: number | undefined;
let audio: AudioContext | undefined;

function playNote(index: number) {
  if (audio?.state !== 'running') return;

  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  const now = audio.currentTime;
  oscillator.type = 'sine';
  oscillator.frequency.value = notes[index];
  gain.gain.setValueAtTime(0, now);
  gain.gain.linearRampToValueAtTime(0.065, now + 0.025);
  gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(now);
  oscillator.stop(now + 0.23);
}

if (controls && play && sound && status && stages.length === notes.length) {
  controls.hidden = false;
  status.hidden = false;

  sound.addEventListener('change', async () => {
    try {
      if (sound.checked) {
        audio ??= new AudioContext();
        await audio.resume();
      } else if (audio) {
        await audio.suspend();
      }
    } catch {
      sound.checked = false;
      sound.disabled = true;
      status.textContent = 'Sound is unavailable in this browser.';
    }
  });

  const finish = (message: string) => {
    window.clearTimeout(timer);
    timer = undefined;
    play.textContent = 'Play preview';
    status.textContent = message;
  };

  const runStage = (index: number) => {
    if (index === stages.length) {
      finish('Request complete. The files return to the browser.');
      return;
    }

    stages.forEach((stage, stageIndex) => {
      if (stageIndex === index) stage.setAttribute('aria-current', 'step');
      else stage.removeAttribute('aria-current');
    });

    status.textContent = `Step ${index + 1} of ${stages.length} · ${stages[index].querySelector('h4')?.textContent}`;
    if (sound.checked) playNote(index);
    timer = window.setTimeout(() => runStage(index + 1), 900);
  };

  play.addEventListener('click', () => {
    if (timer !== undefined) {
      finish('Preview stopped.');
      return;
    }

    play.textContent = 'Stop preview';
    runStage(0);
  });

  window.addEventListener('pagehide', () => {
    if (timer !== undefined) finish('Preview stopped.');
  });
}
