import { Streamer } from "./Streamer";
import { Audiencia } from "./Audiencia";
import { Categoria } from "./Categoria";


export class Stream {
    nombre: string;
	streamer: Streamer;
	//canal: Canal;     // Typescript no permite referencia circular
	audiencia: Array<Audiencia>;
	categorias: Array<Categoria>;

	constructor(nombre: string, streamer: Streamer) {
		this.nombre = nombre;
		this.streamer = streamer;
		this.audiencia = [];
		this.categorias = [];
	}

	// Agregar Audiencia
	agregarAudiencia(audiencia: Audiencia): void {
		this.audiencia.push(audiencia);
	}

	// Agregar Categoria
	agregarCategoria(categoria: Categoria): void {
		this.categorias.push(categoria);
	}



}


	