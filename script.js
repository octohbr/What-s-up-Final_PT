const menuToggle = document.getElementById('mobile-menu');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('close-btn');

menuToggle.addEventListener('click', () => {
    sidebar.style.width = '250px';
});

closeBtn.addEventListener('click', () => {
    sidebar.style.width = '0';
});

const hoverSound = new Audio('tunetank.com_menu-interface-selection.wav');


const hoverImages = document.querySelectorAll('.hover-sfx-img');


hoverImages.forEach(img => {
  img.addEventListener('mouseenter', () => {
    hoverSound.currentTime = 0;
    hoverSound.play();
  });
});