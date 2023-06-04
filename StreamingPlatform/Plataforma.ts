import { Empresa } from "./Empresa";
import { Imagen } from "./Imagen";
import { Canal } from "./Canal";



export class Plataforma {
    nombre: string;
	descripcion: string;
	canales: Array<Canal>;
	imagen: Imagen;
	empresa: Empresa;


    constructor(nombre: string, descripcion: string, imagen: Imagen, empresa: Empresa) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.imagen = imagen;
        this.empresa = empresa;
        this.canales = [];
    }
}

