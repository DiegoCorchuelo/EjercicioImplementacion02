import { Persona } from "./Persona";



export class Audiencia extends Persona {
	cantidadAudiencia: number;
	//stream: Stream;       // Typescript no permite referencia circular

    constructor(cantidadAudiencia: number, edad: number){
        super(edad);
        this.cantidadAudiencia = cantidadAudiencia;
    }
	
}