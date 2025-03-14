const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

  const line1 = document.querySelector('.line1');
  const line2 = document.querySelector('.line2');
  const line3 = document.querySelector('.line3');

  menuToggle.addEventListener('click', () => {

    if (menuToggle.classList.contains('open')) {
        // Volta ao hambúrguer
        line1.style.transform = "translateY(0) rotate(0)";
        line2.style.opacity = "1";
        line3.style.transform = "translateY(0) rotate(0)";
      } else {
        // Transforma em "X"
        line1.style.transform = "translateY(8px) rotate(45deg)";
        line2.style.opacity = "0";
        line3.style.transform = "translateY(-8px) rotate(-45deg)";
      }
});

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('open');
    menu.classList.toggle('flex');
    menu.classList.toggle('hidden');
});