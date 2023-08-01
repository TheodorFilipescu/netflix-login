const button = document.querySelector('.container-nav-el-3-btn-asp');
const container = document.querySelector('.container-nav-move-total');
let isAtLeft = true;

button.addEventListener('click', () => {
  if (isAtLeft) {
    container.animate([{ left: '0%' }], { duration: 200, easing: 'linear', fill: 'both' });
  } else {
    container.animate([{ left: '100%' }], { duration: 200, easing: 'linear', fill: 'both' });
  }
  isAtLeft = !isAtLeft;
});