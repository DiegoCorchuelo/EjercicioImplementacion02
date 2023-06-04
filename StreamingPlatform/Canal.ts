import { Imagen } from "./Imagen";
import { Stream } from "./Stream";
import { Streamer } from "./Streamer";



export class Canal {
    nombre: string;
	banner: Imagen;
	nombreStreamer: string;
	descripcion: string;
	//plataforma: Plataforma; // Typescript no permite referencia circular
	streams: Array<Stream>;
	streamers: Array<Streamer>;
	

	constructor(nombre: string, banner: Imagen, nombreStreamer: string, descripcion: string) {
		this.nombre = nombre;
		this.banner = banner;
		this.nombreStreamer = nombreStreamer;
		this.descripcion = descripcion;
		this.streams = [];
		this.streamers = [];
	}
}