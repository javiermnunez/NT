const miEtiqueta = document.getElementById("demo");
miEtiqueta.innerText = "otra cosa";
const miEtiqueta_ = document.getElementById("demo2");
const personajes = [];

const lisa = { nombre: "Lisa", apellido: "Simpson", rol: "Familia", edad: 7 };
const bart = { nombre: "Bart", apellido: "Simpson", rol: "Familia", edad: 10 };
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
function mostrarPersonaSuma(p,m){
    let sumaDeEdad =  p.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    m.innerHTML = "<ul><li>"+sumaDeEdad+"</li></ul>";
}

mostrarPersonajes(personajes, miEtiqueta);

mostrarPersonaSuma(personajes,miEtiqueta_);





//console.log(mayoresDeEdad);
mostrarPersonajes(sumaDeEdad, miEtiqueta_);