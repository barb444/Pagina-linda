const cartas = document.querySelectorAll('.c');

cartas.forEach((carta) => {
  const rotation = carta.dataset.rotation;

  carta.dataset.open = "false";

  carta.addEventListener('click', () => {
    const cartaI = carta.querySelector('.cartaI');

    if (carta.dataset.open === "false") {
      carta.style.transform = `rotate(0deg) translateY(-50px)`;
      cartaI.classList.add('show');
      carta.dataset.open = "true";
    } else {
      carta.style.transform = `rotate(${rotation}) translateY(0)`;
      cartaI.classList.remove('show');
      carta.dataset.open = "false";
    }
  });
});
