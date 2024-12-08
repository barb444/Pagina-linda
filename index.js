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

function relojTiempoJuntos() {
  const reloj = document.getElementById("reloj");

  // Fecha de inicio: 8 de junio del año actual
  const fechaInicio = new Date(new Date().getFullYear(), 5, 8); // 5 es junio (los meses son 0-indexados)

  function actualizarReloj() {
    const ahora = new Date(); // Hora y fecha actual
    const tiempoTranscurrido = ahora - fechaInicio; // Tiempo transcurrido desde el 8 de junio

    // Calcula días, horas, minutos y segundos transcurridos
    const dias = Math.floor(tiempoTranscurrido / (1000 * 60 * 60 * 24));
    const horas = String(Math.floor((tiempoTranscurrido % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))).padStart(2, "0");
    const minutos = String(Math.floor((tiempoTranscurrido % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, "0");
    const segundos = String(Math.floor((tiempoTranscurrido % (1000 * 60)) / 1000)).padStart(2, "0");

    // Actualiza el contenido del reloj en el formato dd/hh/mm/ss
    reloj.textContent = `${dias}:${horas}:${minutos}:${segundos}`;
  }

  // Llama a la función cada segundo
  setInterval(actualizarReloj, 1000);
}

// Inicia el reloj
relojTiempoJuntos();
