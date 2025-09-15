const avocado = document.createElement('img');
avocado.src = 'images/avocado mouse.png';
avocado.classList.add('mouse-avocado');
document.body.appendChild(avocado);

// Get the landing page container
const container = document.querySelector('.landing-container');

let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  const mainNav = document.querySelector('main-navigation');
  const isHoveringNav = e.target.closest('main-navigation') !== null;

  if (isHoveringNav) {
    avocado.style.opacity = '0';
    document.body.style.cursor = 'default';
    // Remove hover classes when over the nav
    if (container) {
      container.classList.remove('hover-left', 'hover-right');
    }
  } else {
    avocado.style.opacity = '1';
    document.body.style.cursor = 'none';
    targetX = e.clientX;
    targetY = e.clientY;

    // Handle the split-screen hover effect
    if (container) {
      if (e.clientX < window.innerWidth / 2) {
        container.classList.add('hover-left');
        container.classList.remove('hover-right');
      } else {
        container.classList.add('hover-right');
        container.classList.remove('hover-left');
      }
    }
  }
});

const lerp = (start, end, amt) => {
  return (1 - amt) * start + amt * end;
}

const animate = () => {
  currentX = lerp(currentX, targetX, 0.1);
  currentY = lerp(currentY, targetY, 0.1);

  avocado.style.left = `${currentX}px`;
  avocado.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

// Start the animation only if on the landing page
if (document.body.classList.contains('landing-page')) {
    animate();
} else {
    // If not on the landing page, ensure the avocado and custom cursor are hidden
    avocado.style.display = 'none';
    document.body.style.cursor = 'default';
}
