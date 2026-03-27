 // Typewriter
const msg = "Hey Nira! Turning 18 today—wow. You're amazing, always smiling, chasing big dreams like IAS or Doctor. Hope this year brings you tons of joy and wins. Happy birthday! 🌸";
let idx = 0;
const typewriter = document.getElementById('typewriter');

function type() {
  if (idx < msg.length) {
    typewriter.textContent += msg.charAt(idx);
    idx++;
    setTimeout(type, 50);
  }
}

// Floating hearts
function heart() {
  const h = document.createElement('div');
  h.textContent = '❤️';
  h.style.position = 'absolute';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.fontSize = '2rem';
  h.style.opacity = 0.8;
  h.style.animation = 'float 8s linear infinite';
  document.querySelector('.hearts-container').appendChild(h);
  setTimeout(() => h.remove(), 8000);
}

setInterval(heart, 300);

// Confetti on button
function confettiBurst() {
  for (let i = 0; i < 80; i++) {
    const c = document.createElement('div');
    c.textContent = ['🎉','✨','🌸'] ;
    c.style.position = 'fixed';
    c.style.left = Math.random()*100 + 'vw';
    c.style.top = '-20px';
    c.style.fontSize = '1.5rem';
    document.body.appendChild(c);
    setTimeout(() => {
      let y = 0;
      const fall = setInterval(() => {
        y += 10;
        c.style.top = y + 'px';
        if (y > window.innerHeight) clearInterval(fall), c.remove();
      }, 30);
    }, i*20);
  }
}

document.querySelector('.surprise').onclick = confettiBurst;

// Start
window.onload = () => {
  type();
  setTimeout(() => confettiBurst(), 2000);
};
