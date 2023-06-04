import { Imagen } from "./Imagen";



export class Categoria {
	nombre: string;
	descripcion: string;
	//streams: Array<Stream>;       // Typescript no permite referencia circular
	imagen: Imagen;
	
    constructor(nombre: string, descripcion: string, imagen: Imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
    }
}
