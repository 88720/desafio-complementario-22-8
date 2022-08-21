//Base de datos de actividades del club
class act {
  constructor(categoria, actividad, profe, modo, precio) {
    this.categoria = categoria;
    this.actividad = actividad;
    this.profe = profe;
    this.modo = modo;
    this.precio = precio;
  }
}
let act1 = new act(
  "infantil",
  "Mini Handbol",
  "Juan Smith",
  "presencial",
  3000
);
let act2 = new act(
  "infantil",
  "Natación delfin",
  "Lorena Matos",
  "presencial",
  3500
);
let act3 = new act(
  "infantil",
  "Gimnasia artística",
  "Natalia Perez",
  "presencial",
  2000
);
let act4 = new act(
  "infantil",
  "Expresión Corporal",
  "Valeria Sosa",
  "presencial",
  2500
);
let act5 = new act(
  "infantil",
  "Juegos recreativos",
  "Jhony Paredes",
  "virtual",
  1500
);

let act6 = new act("juvenil", "Voley", "Pablo Gomez", "presencial", 2000);
let act7 = new act(
  "juvenil",
  "Natación Tiburón",
  "Carlos Bona",
  "presencial",
  3500
);
let act8 = new act("juvenil", "Hockey", "Raul Careye", "presencial", 1500);
let act9 = new act("juvenil", "Crossfit", "Valeria Memes", "presencial", 2500);
let act10 = new act("juvenil", "Eutonía", "Marcela Gazcón", "virtual", 2500);

let act11 = new act("adulto", "Futbol", "Ricardo Calderón", "presencial", 2000);
let act12 = new act("adulto", "Meditación", "Lorena Perez", "virtual", 1500);
let act13 = new act(
  "adulto",
  "Gimnasia adultos",
  "Jimena Britos",
  "presencial",
  2500
);
let act14 = new act("adulto", "Newcom", "Horacio Tebes", "presencial", 3500);
let act15 = new act(
  "adulto",
  "Atletismo",
  "Carolina Fernández",
  "presencial",
  2500
);

const actividades = [];
actividades.push(
  act1,
  act2,
  act3,
  act4,
  act5,
  act6,
  act7,
  act8,
  act9,
  act10,
  act11,
  act12,
  act13,
  act14,
  act15
);

let actividadesHtml = " ";
for (let i = 0; i < actividades.length; i++) {
  actividadesHtml =
    actividadesHtml +
    "<div><h3> categoria:" +
    actividades[i].categoria +
    "<h3><p>actividad:" +
    actividades[i].actividad +
    "<p><p>profe:" +
    actividades[i].profe +
    "<p><p>modo:" +
    actividades[i].modo +
    "<p><p>precio:" +
    actividades[i].precio +
    "<p><div>";
}

//Listado de funciones

function noSocio() {
  let aviso =
    "Para poder disfrutar del club debés ser socio/a \nNos interesa comunicarnos con vos para coordinar el modo de asociarte.";
  let contacto = Number(prompt("Datos un teléfono de contacto: "));
  document.getElementById("noSocio").innerHTML =
    aviso + " Los datos que ingresaste son: " + nombreOut + " " + contacto;
  listaNoSocios = contacto;
}

function buscar() {
  let busc = Number(
    prompt(
      "Vamos a filtrar tu actividad, marcá: \n" +
        "1 si querés presencial \n" +
        "2 si querés virtual \n" +
        "3 si buscás categoria infantil \n" +
        "4 si buscas categoría juvenil \n" +
        "5 si buscas categoría adulto"
    )
  );
  switch (busc) {
    case 1:
      let busc1 = actividades.filter((act) => act.modo == "presencial");
      let busc11 = " ";
      for (let i = 0; i < busc1.length; i++) {
        busc11 =
          busc11 +
          "<div><h3> categoria: " +
          busc1[i].categoria +
          "<h3><p>actividad: " +
          busc1[i].actividad +
          "<p><p>profe: " +
          busc1[i].profe +
          "<p><p>modo: " +
          busc1[i].modo +
          "<p><p>precio: " +
          busc1[i].precio +
          "<p><div>";
      }
      document.getElementById("actividades").innerHTML = busc11;

      break;
    case 2:
      let busc2 = actividades.filter((act) => act.modo == "virtual");
      let busc12 = " ";
      for (let i = 0; i < busc2.length; i++) {
        busc12 =
          busc12 +
          "<div><h3>categoria: " +
          busc2[i].categoria +
          "<h3><p>actividad: " +
          busc2[i].actividad +
          "<p><p>profe: " +
          busc2[i].profe +
          "<p><p>modo: " +
          busc2[i].modo +
          "<p><p>precio: " +
          busc2[i].precio +
          "<p><div>";
      }
      document.getElementById("actividades").innerHTML = busc12;
      break;

    case 3:
      let busc3 = actividades.filter((act) => act.categoria == "infantil");
      let busc13 = " ";
      for (let i = 0; i < busc3.length; i++) {
        busc13 =
          busc13 +
          "<div><h3>categoria: " +
          busc3[i].categoria +
          "<h3><p>actividad: " +
          busc3[i].actividad +
          "<p><p>profe: " +
          busc3[i].profe +
          "<p><p>modo: " +
          busc3[i].modo +
          "<p><p>precio: " +
          busc3[i].precio +
          "<p><div>";
      }
      document.getElementById("actividades").innerHTML = busc13;
      break;

    case 4:
      let busc4 = actividades.filter((act) => act.categoria == "juvenil");
      let busc14 = " ";
      for (let i = 0; i < busc4.length; i++) {
        busc14 =
          busc14 +
          "<div><h3>categoria: " +
          busc4[i].categoria +
          "<h3><p>actividad: " +
          busc4[i].actividad +
          "<p><p>profe: " +
          busc4[i].profe +
          "<p><p>modo: " +
          busc4[i].modo +
          "<p><p>precio: " +
          busc4[i].precio +
          "<p><div>";
      }
      document.getElementById("actividades").innerHTML = busc14;
      break;

    case 5:
      let busc5 = actividades.filter((act) => act.categoria == "adulto");
      let busc15 = " ";
      for (let i = 0; i < busc5.length; i++) {
        busc15 =
          busc15 +
          "<div><h3>categoria: " +
          busc5[i].categoria +
          "<h3><p>actividad: " +
          busc5[i].actividad +
          "<p><p>profe: " +
          busc5[i].profe +
          "<p><p>modo: " +
          busc5[i].modo +
          "<p><p>precio: " +
          busc5[i].precio +
          "<p><div>";
      }
      document.getElementById("actividades").innerHTML = busc15;
      break;

    default:
      document.getElementById("actividades").innerHTML =
        "Error - número no válido";
      break;
  }
}
function completo() {
  document.getElementById("completo").innerHTML =
    "Ahora verás el listado completo, recordá que para filtrarlo debés elegir otra opción";
  document.getElementById("actividades").innerHTML = actividadesHtml;
}

let listaNoSocios;
let nombreOut;
function saludo() {
  let nombre = prompt("Hola! ¿Cuál es tu nombre?");
  nombreOut = nombre;
  //let socio = confirm("¿Sos socio/a del club");
  let socio = prompt(nombre + " ¿Sos socio/a del club?").toLowerCase();
  if (socio == "si") {
    document.getElementById("actSocio").innerHTML =
      "Fantástico! veamos que podés hacer en el club";
  } else {
    noSocio();
    //esta salida simula lo que sería una base de datos interna, no visible al usuario
    console.log("El teléfono de " + nombre + " es " + listaNoSocios);
  }
}

//inicio de interacción

saludo();

let pregunta = prompt(
  "Tenemos una actividad para vos. Marcá 1 si querés ver el listado completo o 2 si querés buscarla"
);

if (pregunta == 1) {
  completo();
} else buscar();

let final = prompt(
  "¿Querés buscar otra vez?. Marcá 1 si querés filtrar resultados o 2 si querés salir"
);

if (final == 1) {
  buscar();
  document.getElementById("saludo").innerHTML = "Gracias por visitarnos!!";
} else {
  document.getElementById("saludo").innerHTML = "Gracias por visitarnos!!";
}
