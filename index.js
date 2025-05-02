const botonAtras = document.getElementById('button-back');
const botonAdelante = document.getElementById('button-next');
let nroPagina = 1;

//const cargarPeliculas = require('./cargarPeliculas.js');

const paginaAnterior = () => {
	if (nroPagina < 1) {
		botonAtras.style.pointerEvents = "none";
		botonAtras.style.cursor = "none";
		nroPagina = 1;
		console.log('hasta aca llegaste');
	} else {
		nroPagina--;
		botonAdelante.style.cursor = "pointer";
		botonAdelante.style.pointerEvents = "auto";
		console.log(`nro de pagina, ${nroPagina}`);
	}
}

const paginaSiguiente = () => {
	if (nroPagina < 8) {
		nroPagina++;
		botonAtras.style.cursor = "pointer";
		botonAtras.style.pointerEvents = "auto";
		console.log(`nro de pagina, ${nroPagina}`);
	} else {
		botonAdelante.style.cursor = "none";
		botonAdelante.style.pointerEvents = "none";
		console.log('hasta aca llegaste');
	}
}


botonAtras.addEventListener('click', paginaAnterior);
botonAdelante.addEventListener('click', paginaSiguiente);
