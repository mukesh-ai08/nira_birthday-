 const messageText = "Dear Nira, today marks the beginning of your 18th year — a chapter full of promise and brilliance. Your warm smile brightens every space you enter, your positive energy lifts those around you, and your commitment to your ambitions is truly inspiring. With your intelligence and drive, you are destined for remarkable accomplishments. May this birthday bring you joy, memorable experiences, and the strength to turn every dream into reality. Wishing you a year that shines as brightly as you do! ✨🎂";

let i = 0;
const typewriterEl = document.getElementById('typewriter');

function typeWriter() {
  if (i < messageText.length) {
    typewriterEl.innerHTML += messageText.charAt(i);
    i++;
    setTimeout(typeWriter, 30);
  }
}

// Elegant floating particles
function createFloat() {
  const item = document.createElement('div');
  item.style.position = 'fixed';
  item.style.left = Math.random() * 100 + 'vw';
  item.style.top = '-70px';
  item.style.fontSize = Math.random() * 32 + 26 + 'px';
  item.style.zIndex = '1';
  item.style.opacity = Math.random() * 0.8 + 0.5;
  item.textContent = Math.random() > 0.5 ? '✨' : '❤️';
  document.querySelector('.floating-container').appendChild(item);

  let y = -70;
  const fall = setInterval(() => {
    y += 4.5 + Math.random() * 4;
    item.style.top = y + 'px';
    if (y > window.innerHeight + 100) {
      clearInterval(fall);
      item.remove();
    }
  }, 25);
}

// Premium confetti
function launchConfetti() {
  const emojis = ['🎉', '✨', '🎂', '💫', '🌟', '🦋'];
  for (let k = 0; k < 130; k++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.style.position = 'fixed';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.top = '-40px';
      c.style.fontSize = Math.random() * 14 + 24 + 'px';
      c.style.zIndex = '999';
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(c);

      let pos = -40;
      let rot = Math.random() * 360;
      const anim = setInterval(() => {
        pos += 7 + Math.random() * 8;
        rot += 15;
        c.style.top = pos + 'px';
        c.style.transform = `rotate(${rot}deg)`;
        if (pos > window.innerHeight + 80) {
          clearInterval(anim);
          c.remove();
        }
      }, 20);
    }, k * 5);
  }
}

function launchSurprise() {
  launchConfetti();
  alert("Happy Birthday Nira! May this special day bring you endless happiness and success in all your dreams. ✨");
}

// Initialize
window.onload = () => {
  typeWriter();
  launchConfetti(); // Grand welcome
  
  // Continuous premium particles
  setInterval(() => {
    if (Math.random() > 0.3) createFloat();
  }, 140);
};
