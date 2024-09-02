const miEtiqueta = document.getElementById("demo");
miEtiqueta.innerText = "otra cosa";
const miEtiqueta_ = document.getElementById("demo2");

const miEtiqueta__ = document.getElementById("demo3");
//FOrma de agregar elementos al array en el codigo.
const personajes = [];

const lisa = { nombre: "Lisa", apellido: "Simpson", rol: "Familia", edad: 7 };
const bart = { nombre: "Bart", apellido: "Simpson", rol: "Familia", edad: 10 };
const moe = { nombre: "Moe", apellido: "Szyslak", rol: "Comerciante", edad: 40 };



personajes.push(lisa);
personajes.push(bart);
personajes.push(moe);


//Forma de agregar directamente en el codigo un array con elementos.
let nuevaFamilia = [
    { nombre: "Pedro", apellido: "Sánchez", edad: 28, rol: "User" },
    { nombre: "Lucía", apellido: "Sánchez", edad: 25, rol: "User" },
    { nombre: "Mario", apellido: "Sánchez", edad: 10, rol: "Menor" }
  ];


function mostrarPersonajes(p, m){
    let pLen = p.length;
    let etiqueta = "<ul>";
    for (let i = 0; i < pLen; i++) {
        etiqueta += "<li>" + "Nombre: " + p[i].nombre + "\nApellido: " + p[i].apellido + "\nRol: " + p[i].rol + "\nEdad: " + p[i].edad + "</li>";
    }
    etiqueta += "</ul>";
    m.innerHTML = etiqueta;
};
function combinarDosListas(l1, l2){
    let nuevaLista = [...l1, ...l2];
    mostrarPersonajes(nuevaLista, miEtiqueta__);

}

mostrarPersonajes(personajes, miEtiqueta);
mostrarPersonajes(nuevaFamilia, miEtiqueta_ );
combinarDosListas(personajes, nuevaFamilia);

