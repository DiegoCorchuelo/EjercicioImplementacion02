import { Plataforma } from "./StreamingPlatform/Plataforma";
import { Canal } from "./StreamingPlatform/Canal";
import { Stream } from "./StreamingPlatform/Stream";
import { Streamer } from "./StreamingPlatform/Streamer";
import { App } from "./App";
import { Imagen } from "./StreamingPlatform/Imagen";
import { Empresa } from "./StreamingPlatform/Empresa";
import { Audiencia } from "./StreamingPlatform/Audiencia";
import { Categoria } from "./StreamingPlatform/Categoria";
import { RedSocial } from "./StreamingPlatform/RedSocial";


// Imagen - Logo - Banner
let logoTwitch = new Imagen('Twitch.png');
let logoKick = new Imagen('Kick.png');

let bannerAuronPlayCanal = new Imagen('BannerAuron.png');
let bannerXokasCanal = new Imagen('BannerXokas.png');

let imagenCategoriaJuegos= new Imagen('juegos.png');
let imagenCategoriaRetos = new Imagen('retos.png');

// Redes Sociales
let instagram = new RedSocial('Instagram', 'https://instagram.com');
let twitter = new RedSocial('Twitter', 'https://twitter.com');


// Audiencia 
                //CantidadAudiencia - EdadAudiencia
let audiencia = new Audiencia(5000, 19);
let audiencia1 = new Audiencia(100, 20);
let audiencia2 = new Audiencia(2500, 18);

// Categoria
let categoriaJuegos = new Categoria('Juegos', 'Juegos de rol', imagenCategoriaJuegos);
let categoriaRetos = new Categoria('Retos', 'Retos de comida', imagenCategoriaRetos);


// Empresa Patrocinadora
let amazon = new Empresa('Amazon');
let ibm = new Empresa('IBM');


// Crear Plataforma
let twitch = new Plataforma('Twitch', 'es una plataforma estadounidense que permite realizar transmisiones en vivo.', logoTwitch, amazon);
let kick = new Plataforma('Kick', 'es una plataforma de streaming totalmente nueva que ya está en fase beta.', logoKick, ibm);

// Crear Canal
let auronPlayCanal = new Canal('AuronPlayCanal', bannerAuronPlayCanal, 'AuronPlay', 'Bienvenidos a mi canal :)');
let xokasCanal = new Canal('XokasCanal', bannerXokasCanal, 'Xokas', 'Empecemos!');

// Crear Streamer
let auronPlay = new Streamer('AuronPlay', 'Hola soy AuronPlay y me gusta jugar videojuegos', 20);
let xokas = new Streamer('ElXokas', 'Hola soy ElXokas y me gusta hacer retos', 19);

// Crear Stream 
let auronPlayStream = new Stream('AuronPlayStream', auronPlay)
let auronPlayStream2 = new Stream('AuronPlayStream2', auronPlay)
let xokasStream = new Stream('ElXokasStream', xokas)

// Agregar Audiencia y Categoria a Stream

auronPlayStream.agregarAudiencia(audiencia);
auronPlayStream.agregarCategoria(categoriaJuegos);
auronPlayStream.agregarCategoria(categoriaRetos);

auronPlayStream2.agregarAudiencia(audiencia2);
auronPlayStream2.agregarCategoria(categoriaRetos);

xokasStream.agregarAudiencia(audiencia1);
xokasStream.agregarCategoria(categoriaRetos);




// App

let app = new App();

// Agregar Plataformas
app.agregarPlataforma(twitch);
app.agregarPlataforma(kick);

console.log();

// Agregar Canales
app.agregarCanal(auronPlayCanal);
app.agregarCanal(xokasCanal);

console.log();

// Agregar Streamers
app.agregarStreamer(auronPlay);
app.agregarStreamer(xokas);

console.log();

// Agregar Streams
app.agregarStream(auronPlayStream);
app.agregarStream(xokasStream);
app.agregarStream(auronPlayStream2)

console.log();

// Agregar un Canal a un Streamer
auronPlay.agregarCanal(auronPlayCanal);
xokas.agregarCanal(xokasCanal);

console.log();

// Agregar un Stream a un Streamer
auronPlay.agregarStream(auronPlayStream);
auronPlay.agregarStream(auronPlayStream2);
xokas.agregarStream(xokasStream);

console.log();


// Agregar una Red Social a un Streamer
auronPlay.agregarRedSocial(instagram);
auronPlay.agregarRedSocial(twitter);
xokas.agregarRedSocial(twitter);

console.log();

// Mostrar plataformas
app.mostrarPlataformas();

// Mostrar canales
app.mostrarCanales();

// Mostrar streamers
app.mostrarStreamers();

// Mostrar Streams
app.mostrarStreams();


// Mostrar detalles de una plataforma
app.mostrarDetallePlataforma(twitch);

// Mostrar detalles de un canal
app.mostrarDetalleCanal(auronPlayCanal);

// Mostrar detalles de un streamer
app.mostrarDetalleStreamer(auronPlay);

// Mostrar detalles de un stream
app.mostrarDetalleStream(auronPlayStream);




