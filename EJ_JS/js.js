const miEtiqueta = document.getElementById("demo");
miEtiqueta.innerText = "otra cosa";
const personajes = [];

const lisa = { nombre: "Lisa", apellido: "Simpson", rol: "Familia", edad: 7 };
const bart = { nombre: "Bart", apellido: "Simpson", rol: "Familia", edad: 9 };
const moe = { nombre: "Moe", apellido: "Szyslak", rol: "Comerciante", edad: 40 };



personajes.push(lisa);
personajes.push(bart);
personajes.push(moe);


function mostrarPersonajes(p, m){
    let pLen = p.length;
    let etiqueta = "<ul>";
    for (let i = 0; i < pLen; i++) {
        etiqueta += "<li>" + "Nombre: " + p[i].nombre + "\nApellido: " + p[i].apellido + "\nRol: " + p[i].rol + "\nEdad: " + p[i].edad + "</li>";
    }
    etiqueta += "</ul>";
    m.innerHTML = etiqueta;
};

mostrarPersonajes(personajes, miEtiqueta);

let mayoresDeEdad = personajes.filter(personaje => personaje.edad > 18);

const miEtiqueta_ = document.getElementById("demo2");

//console.log(mayoresDeEdad);
mostrarPersonajes(mayoresDeEdad, miEtiqueta_);