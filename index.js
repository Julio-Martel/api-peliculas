const botonAtras = document.getElementById('button-back');
const botonAdelante = document.getElementById('button-next');
const contenedorPosterPeliculas = document.getElementById('movies');
let nroPagina = 1;

import { cargarPeliculas } from 'cargarPeliculas.js';


// funcion que permite volver a la pagina anterior

const paginaAnterior = () => {
	if (nroPagina < 1) {
		botonAtras.style.pointerEvents = "none";
		botonAtras.style.cursor = "none";
		nroPagina = 1;
	} else {
		nroPagina--;
		botonAdelante.style.cursor = "pointer";
		botonAdelante.style.pointerEvents = "auto";
	}
	cargarPeliculas(nroPagina, contenedorPosterPeliculas);
}

// funcion que permite ir a la pagina siguiente

const paginaSiguiente = () => {
	if (nroPagina < 8) {
		nroPagina++;
		botonAtras.style.cursor = "pointer";
		botonAtras.style.pointerEvents = "auto";
	} else {
		botonAdelante.style.cursor = "none";
		botonAdelante.style.pointerEvents = "none";
	}
	cargarPeliculas(nroPagina, contenedorPosterPeliculas);
}

botonAtras.addEventListener('click', paginaAnterior);
botonAdelante.addEventListener('click', paginaSiguiente);

cargarPeliculas(nroPagina, contenedorPosterPeliculas);
