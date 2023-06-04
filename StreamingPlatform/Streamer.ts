import { Persona } from "./Persona";
import { RedSocial } from "./RedSocial";
import { Stream } from "./Stream";
import { Canal } from "./Canal";






export class Streamer extends Persona {
	nickname: string;
	descripcion: string;
	streams: Array<Stream>;   
	canales: Array<Canal>;    
	redSocial: Array<RedSocial>;	


    constructor(nickname: string, descripcion: string, edad: number){
        super(edad);
        this.nickname = nickname;
        this.descripcion = descripcion;
        this.redSocial = [];
        this.streams = [];
        this.canales = [];
    }

    // Agregar un Canal a un Stramer
    agregarCanal(canal: Canal): void {
        this.canales.push(canal);
        console.log(canal.nombre + ' añadido con exito! al streamer ' + this.nickname);
    }


    // Agregar un Strem a un Streamer
    agregarStream(stream: Stream): void {
        this.streams.push(stream);
        console.log(stream.nombre + ' añadido con exito! al streamer ' + this.nickname);
    }

    // Agregar una Red social a un Streamer
    agregarRedSocial(redSocial: RedSocial): void {
        this.redSocial.push(redSocial);
        console.log(redSocial.nombre + ' añadido con exito! al streamer ' + this.nickname);
    }


}

