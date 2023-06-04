import { Plataforma } from "./StreamingPlatform/Plataforma";
import { Canal } from "./StreamingPlatform/Canal";
import { Stream } from "./StreamingPlatform/Stream";
import { Streamer } from "./StreamingPlatform/Streamer";




export class App {
    plataformas: Array<Plataforma>;
    canales: Array<Canal>;
    streams: Array<Stream>;
    streamers: Array<Streamer>;
    
    constructor() {
        this.plataformas = [];
        this.canales = [];
        this.streams = [];
        this.streamers = [];
    }



    // Agregar una plataforma
    agregarPlataforma(plataforma: Plataforma): void {
        this.plataformas.push(plataforma);
        console.log(plataforma.nombre + ' añadida con exito!');
    }

    // Agregar un canal
    agregarCanal(canal: Canal): void {
        this.canales.push(canal);
        console.log(canal.nombre + ' añadido con exito!');
        
    }

    // Agregar un streamer
    agregarStreamer(streamer: Streamer): void {
        this.streamers.push(streamer);
        console.log(streamer.nickname + ' añadido con exito!');
    }

    // Agregar un stream
    agregarStream(stream: Stream): void {
        this.streams.push(stream);
        console.log(stream.nombre + ' añadido con exito!');
    }


    // Mostrar Listado de Plataformas
    mostrarPlataformas(): void {
        console.log('Lista de plataformas creadas:');
        console.log();
        this.plataformas.forEach((plataforma, index) => {
            console.log(index + 1 + '. ' + plataforma.nombre);
        });
        console.log();
        console.log();
    }


    // Mostrar Listado de canales 
    mostrarCanales(): void {
        console.log('Lista de canales creados:');
        console.log();
        this.canales.forEach((canal, index) => {
            console.log(index + 1 + '. ' + canal.nombre);
        });
        console.log();
        console.log();
    }


    // Mostrar Listado de streamers
    mostrarStreamers(): void {
        console.log('Lista de streamers creados:');
        console.log();
        this.streamers.forEach((streamer, index) => {
            console.log(index + 1 + '. ' + streamer.nickname);
        });
        console.log();
        console.log();
    }


    // Mostrar Listado de streams
    mostrarStreams(): void {
        console.log('Lista de streams creados:');
        console.log();
        this.streams.forEach((stream, index) => {
            console.log(index + 1 + '. ' + stream.nombre);
        });
        console.log();
        console.log();
    }

    // Mostrar Detalle de una Plataforma
    mostrarDetallePlataforma(plataforma: Plataforma): void {
        console.log('Detalles de la Plataforma "' + plataforma.nombre + '":');
        console.log('Nombre: ' + plataforma.nombre);
        console.log('Descripción: ' + plataforma.descripcion);
        console.log('Imagen: ' + plataforma.imagen.nombre);
        console.log('Empresa que lo patrocina: ' +plataforma.empresa.nombre);
        console.log();
        console.log();
    }

    // Mostrar Detalle de un Canal
    mostrarDetalleCanal(canal: Canal): void {
        console.log('Detalles del canal "' + canal.nombre + '":');
        console.log('Nombre: ' + canal.nombre);
        console.log('Banner: ' + canal.banner.nombre);
        console.log('Nombre Streamer: ' + canal.nombreStreamer);
        console.log('Descripción: ' + canal.descripcion);
        console.log();
        console.log();
    }

     // Mostrar Detalle de un Streamer
    mostrarDetalleStreamer(streamer: Streamer): void {
        console.log('Detalles del streamer "' + streamer.nickname + '":');
        console.log('Nombre: ' + streamer.nickname);
        console.log('Descripción: ' + streamer.descripcion);
        console.log('Edad: ' + streamer.edad);
        console.log('Redes Sociales: ' + streamer.redSocial.map(x => x.nombre).join(', '));
        console.log('Streams: ' + streamer.streams.map(x => x.nombre).join(', '));
        console.log('Canales: ' + streamer.canales.map(x => x.nombre).join(', '));
        console.log();
        console.log();
    }

    // Mostrar Detalle de un Stream
    mostrarDetalleStream(stream: Stream): void {
        console.log('Detalles del stream "' + stream.nombre + '":');
        console.log('Nombre: ' + stream.nombre);
        console.log('Cantidad Audiencia: ' + stream.audiencia.map(a => a.cantidadAudiencia).join(', '));
        console.log('Edad Audiencia: ' + stream.audiencia.map(a => a.edad).join(', '));
        console.log('Categorias: ' + stream.categorias.map(a => a.nombre).join(', '));
        console.log();
        console.log();
    }

}