//DOM Introducción

/* console.log(window);
console.log(document);
console.log("****************Elementos del Documento***************");
console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
setTimeout(() => {
  console.log(document.getSelection().toString());
}, 3000);
document.write("<h2>Hola mundo desde el DOM</h2>");
 */

//DOM: Nodos, Elementos y Selectores
/* 
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByClassName("card"));
console.log(document.getElementsByName("nombre"));
console.log(document.getElementById("menu"));
//querySelector traer todos los elementos, se especifica si es un id o es una calase o etiqueta
console.log(document.querySelector("#menu"));
console.log(document.querySelector("a"));
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach((el) => console.log(el));
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card"));
console.log(document.querySelectorAll(".card")[2]);
console.log(document.querySelectorAll("#menu li")); */

//Atributos y Data-Attributes

/* console.log(document.documentElement.getAttribute("lang"));
console.log(document.querySelector(".link-dom").href);
console.log(document.querySelector(".link-dom").getAttribute("href"));

console.log((document.documentElement.lang = "en"));
document.documentElement.setAttribute("lang", "es-MX");
console.log(document.documentElement.lang);

const $linkDOM = document.querySelector(".link-dom");
$linkDOM.setAttribute("target", "_blank");
$linkDOM.setAttribute("rel", "noopener ");
$linkDOM.setAttribute(
  "href",
  "https://www.youtube.com/watch?v=p0OH206z9Wg&t=1935s"
);
console.log($linkDOM.hasAttribute("rel"));
$linkDOM.removeAttribute("rel");
console.log($linkDOM.hasAttribute("rel"));

//Data Attributes
console.log($linkDOM.getAttribute("data-description"));
console.log($linkDOM.dataset);
console.log($linkDOM.dataset.description);
$linkDOM.setAttribute("data-description", "Modelo de Objeto del Documento");
console.log($linkDOM.dataset.description);
$linkDOM.dataset.description = "Suscribete please";
console.log($linkDOM.dataset.description);

console.log($linkDOM.hasAttribute("data-id"));
$linkDOM.removeAttribute("data-id");
console.log($linkDOM.hasAttribute("data-id")); */

//Estilos y Variables CSS

/* const $linkDOM = document.querySelector(".link-dom");
console.log($linkDOM.style);

console.log($linkDOM.getAttribute("style"));
console.log($linkDOM.style.backgroundColor);
console.log($linkDOM.style.color);
console.log(window.getComputedStyle($linkDOM));
console.log(getComputedStyle($linkDOM).getPropertyValue("color"));
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";
console.log($linkDOM.style);
console.log($linkDOM.getAttribute("style"));
console.log(getComputedStyle($linkDOM));

//Variables CSS - Custom Properties CSS
const $html = document.documentElement,
  $body = document.body;

//obtener las variables de css
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "#000");
varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");

$body.style.setProperty("background-color", varDarkColor); */

//Clases en CSS

/* const $card = document.querySelector(".card");
console.log($card);
console.log($card.className);
console.log($card.classList);
console.log($card.classList.contains("rotate-45"));
$card.classList.add("rotate-45");
console.log($card.classList.contains("rotate-45"));
console.log($card.className);
console.log($card.classList);
$card.classList.remove("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
console.log($card.classList.contains("rotate-45"));
$card.classList.toggle("rotate-45");
$card.classList.replace("rotate-45", "rotate-135");
$card.classList.add("opacity-80", "sepia");
$card.classList.remove("opacity-80", "sepia");
$card.classList.toggle("opacity-80", "sepia");
 */

//Texto y HTML
/* const $whatIsDom = document.getElementById("que-es");

let text = ` 
  <p>
    El modelo de Objetos del Documento (<b><i>DOM - Document Model</i></b>) es un API para documentos HTML y XML.
  </p>

  <p>
    Éste proveé una representación estructural del documento, permitiendo modificar su contenido y presentación visual
    mediante código js
  </p>

  <p>
    <mark>El DOM no es parte de la especificación de javaScript, es una API para los navegadores

    </mark>
  </p>`;

//$whatIsDom.innerText = text;
$whatIsDom.textContent = text;
$whatIsDom.innerHTML = text;
$whatIsDom.outerHTML = text; //Remplaza el elemento del dom por el contenido que se tiene guardar. */

//DOM Traversing: Recorriendo el DOM

/* const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);
console.log($cards.children[2]);
console.log($cards.parentElement);
console.log($cards.firstChild);
console.log($cards.firstElementChild);
console.log($cards.lastChild);
console.log($cards.lastElementChild);
console.log($cards.previousSibling);
console.log($cards.previousElementSibling);
console.log($cards.nextElementSibling);
console.log($cards.closest("div"));
console.log($cards.closest("body"));
console.log($cards.children[3].closest("section")); */

/* *********************************************************************************** */
/* //Creando Elementos  y Fragmentos
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals"),
  $cards = document.querySelector(".cards");
$figure2 = document.createElement("figure");

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card"); //agrega la clase cards a la etiqueta figure

$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);
//Otra forma:

$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`;

$figure2.classList.add("card");
$cards.appendChild($figure2);

//Agregar dinamicamente cantidades de elementos de una lista

//Estaciones
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//continentes
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
  $ul2 = document.createElement("ul");
document.write("<h3>Continenetes del mundo:</h3>");

document.body.appendChild($ul2); */

/* continentes.forEach((el) => {
  const $li2 = document.createElement("li");
  $li2.textContent = el;
  $ul2.appendChild($li2);
}); */
/* 
//Otra forma
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//Prectica
const deportes = [
  "atletismo",
  "remo",
  "bádminton",
  "baloncesto",
  "boxeo",
  "canotaje",
  "ciclismo",
  "ecuestre",
  "esgrima",
  "fútbol",
  "gimnasia",
  "halterofilia",
  "balonmano",
  "hockey",
  "judo",
  "natación",
  "pentatlón moderno",
  "taekwondo",
  "tenis",
  "tenis de mesa",
  "tiro",
  "tiro con arco",
  "triatlón",
  "vela",
  "voleibol de playa",
];

const $ul3 = document.createElement("ul");
const $fragment1 = document.createDocumentFragment();
deportes.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment1.appendChild($li);
});
document.write("<h3>Todos los deportes</h3>");
$ul3.appendChild($fragment1);
document.body.appendChild($ul3);

// Para cientos de Elementos
const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

$ul4 = document.createElement("ul");
$fragment = document.createDocumentFragment();

meses.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del año</h3>");
$ul4.appendChild($fragment);
document.body.appendChild($ul4); */
/* *********************************************************************************** */

//Templates HTML
/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment(),
  cardContent = [
    {
      title: "Tecnología",
      img: "https://placeimg.com/200/200/tech",
    },
    {
      title: "Animales",
      img: "https://placeimg.com/200/200/animals",
    },
    {
      title: "Arquitectura",
      img: "https://placeimg.com/200/200/arch",
    },
    {
      title: "Gente",
      img: "https://placeimg.com/200/200/people",
    },
    {
      title: "Naturaleza",
      img: "https://placeimg.com/200/200/nature",
    },
  ];
cardContent.forEach((el) => {
  $template.querySelector("img").setAttribute("src", el.img);
  $template.querySelector("img").setAttribute("alt", el.title);
  $template.querySelector("figcaption").textContent = el.title;

  let $clone = document.importNode($template, true);
  $fragment.appendChild($clone);
});

$cards.appendChild($fragment); */

//Modificación de Elementos
/* const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");
$clonCards = $cards.cloneNode(true);

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption>Any</figcaption>
`;
$newCard.classList.add("card");

//remplazar
//$cards.replaceChild($newCard, $cards.children[2]);

//agregar
//$cards.insertBefore($newCard, $cards.firstElementChild);

//Remover
//$cards.removeChild($cards.lastElementChild);

//clonar las tarjetas
document.body.appendChild($clonCards);
 */

//******************************************************* */
//Modificando Elementos (Cool Style);
/* .insertAdjacent...
      .insertAdjacentElement(position, el);
      .insertAdjancentHTML(position,html);
      .insertAdjacentText(position, text);
    
    Posiciones:
      beforebegin(hermano anterior);
      afterbegin(primer hijo);
      beforeend(ultimo hijo)
      afterend(hermano siguiente);
  */
/* const $cards = document.querySelector(".cards");
$newCard = document.createElement("figure");

let $contenCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></figcaption>
`;
$newCard.classList.add("card");

$newCard.insertAdjacentHTML("beforeend", $contenCard);

$newCard.querySelector("figcaption").insertAdjacentText("afterbegin", "any"); */
//$cards.insertAdjacentElement("afterbegin", $newCard);

/* $cards.insertAdjacentElement("afterbegin", $newCard);
$cards.insertAdjacentElement("beforeend", $newCard);
$cards.insertAdjacentElement("afterend", $newCard); */

/* $cards.prepend($newCard);
$cards.before($newCard);
$cards.append($newCard);
$cards.after($newCard); */

/* 
//Manejadores  de Eventos

const holaMundo = () => {
  alert("hola mundo");
  console.log(event);
};

function saludar(nombre = "Desconocid@") {
  alert(`hola ${nombre}`);
  console.log(event);
}

const $eventoSemantico = document.getElementById("evento-semantico"),
  $eventoMultiple = document.getElementById("evento-multiple"),
  $eventoRemover = document.getElementById("evento-remove");

$eventoSemantico.onclick = holaMundo; //sin parentesis
$eventoSemantico.onclick = function (e) {
  alert("Hola mundo Manejador de Eventos Semantico");
  console.log(e);
  console.log(event);
};

$eventoMultiple.addEventListener("click", holaMundo);
$eventoMultiple.addEventListener("click", (e) => {
  alert("manejador de eventos multiples");
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(event);
});

//Pasar paramentros a un evento

$eventoMultiple.addEventListener("click", () => {
  saludar();
  saludar("juan");
  saludar("carlos");
});

//Eliminar eventos de un elemento
const removerDobleClick = (e) => {
  alert(`Removiendo el evento de tipo ${e.type}`);
  console.log(e);
  $eventoRemover.removeEventListener("dblclick", removerDobleClick);
  $eventoRemover.disabled = true;
};

$eventoRemover.addEventListener("dblclick", removerDobleClick);
 */

//stopPropagation & preventDefault

/* const $divEventos = document.querySelectorAll(".eventos-flujo div");
$linkEventos = document.querySelector(".eventos-flujo a");

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this.className}, el click lo originó ${e.target.className}`
  );
  e.stopPropagation();
}

console.log($divEventos);

$divEventos.forEach((div) => {
  //Fase de Burbuja
  div.addEventListener("click", flujoEventos);
  //div.addEventListener("click", flujoEventos, false);
  //Fase de Captura
  //div.addEventListener("click", flujoEventos, true);

  //  div.addEventListener("click", flujoEventos, {
  //capture: true,
  //once: true,
  //});
});

$linkEventos.addEventListener("click", (e) => {
  alert("Hola mundo");
  e.preventDefault();
  e.stopPropagation();
}); */

//****************************************************************
//Delegación de Eventos

function flujoEventos(e) {
  console.log(
    `Hola te saluda ${this}, el click lo originó ${e.target.className}`
  );
}

document.addEventListener("click", (e) => {
  console.log("Click en", e.target);
  if (e.target.matches(".eventos-flujo div")) {
    flujoEventos(e);
  }

  if (e.target.matches(".eventos-flujo a")) {
    alert("Hola mundo");
    e.preventDefault(); //Detener el flujo
  }
});
