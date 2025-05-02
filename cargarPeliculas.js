export const cargarPeliculas = async (nroPagina, contenedorPosterPeliculas) => {
	try {
		const respuesta = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=ab3f9a83f28cce5171b34efb493c5991&language=es-MX&page=${nroPagina}`);

		if (respuesta.status === 200) {
			const datos = await respuesta.json();

			let peliculas = '';
			datos.results.forEach(pelicula => {
				peliculas += `
					<div class="pelicula">
						<img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
						<h3 class="titulo">${pelicula.title}</h3>
					</div>
				`;
			});

			contenedorPosterPeliculas.innerHTML = peliculas;

		} else if (respuesta.status === 401) {
			console.log('Pusiste la llave mal');
		} else if (respuesta.status === 404) {
			console.log('La película que buscas no existe');
		} else {
			console.log('Hubo un error y no sabemos qué pasó');
		}

	} catch (error) {
		console.log(error);
	}
};
