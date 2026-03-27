const messageText = "Dear Nira, on your 18th birthday I want to say how wonderful you are. Your smile is contagious, your energy is inspiring, and the way you chase your dreams is truly impressive. Whether your big goal of becoming an IAS Officer or a Doctor, you always bring positivity everywhere. Wishing you a year filled with joy, success, and all the happiness you deserve. Happy Birthday! 🐰✨";

let i = 0;
const typewriterEl = document.getElementById('typewriter');

function typeWriter() {
  if (i < messageText.length) {
    typewriterEl.innerHTML += messageText.charAt(i);
    i++;
    setTimeout(typeWriter, 35);
  }
}

// Floating hearts + rabbits
function createFloat() {
  const item = document.createElement('div');
  item.style.position = 'fixed';
  item.style.left = Math.random() * 100 + 'vw';
  item.style.top = '-50px';
  item.style.fontSize = Math.random() * 25 + 25 + 'px';
  item.style.zIndex = '1';
  item.style.opacity = Math.random() * 0.7 + 0.6;
  item.textContent = Math.random() > 0.5 ? '❤️' : '🐰';
  document.querySelector('.floating-container').appendChild(item);

  let y = -50;
  const fall = setInterval(() => {
    y += 6;
    item.style.top = y + 'px';
    if (y > window.innerHeight + 50) {
      clearInterval(fall);
      item.remove();
    }
  }, 30);
}

function launchConfetti() {
  const emojis = ['🎉', '✨', '💖', '🐰', '🎂'];
  for (let k = 0; k < 90; k++) {
    setTimeout(() => {
      const c = document.createElement('div');
      c.style.position = 'fixed';
      c.style.left = Math.random() * 100 + 'vw';
      c.style.top = '-20px';
      c.style.fontSize = '22px';
      c.style.zIndex = '999';
      c.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      document.body.appendChild(c);

      let pos = -20;
      const anim = setInterval(() => {
        pos += 7 + Math.random() * 6;
        c.style.top = pos + 'px';
        c.style.transform = `rotate(${pos * 4}deg)`;
        if (pos > window.innerHeight) {
          clearInterval(anim);
          c.remove();
        }
      }, 25);
    }, k * 7);
  }
}

function launchSurprise() {
  launchConfetti();
  alert("Wishing you the best year ahead, Nira! Keep smiling and chasing your dreams. 🐰✨");
}

// Start on load
window.onload = () => {
  typeWriter();
  launchConfetti(); 
  
  // Continuous floating bunnies + hearts
  setInterval(() => {
    if (Math.random() > 0.4) createFloat();
  }, 220);
};
