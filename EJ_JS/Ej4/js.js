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
function mostrarPersonaNombres(p,m){
    let personasConNuevoRol = p.map(({ nombre, apellido, edad, rol }) => ({
        nombre,
        apellido,
        edad,
        rol: edad < 18 ? "Estudiante" : rol // Cambiamos el rol solo si la edad es menor a 18
      }));
      mostrarPersonajes(personasConNuevoRol,m);
}

mostrarPersonajes(personajes, miEtiqueta);
mostrarPersonaNombres(personajes,miEtiqueta_);







//console.log(mayoresDeEdad);
mostrarPersonajes(sumaDeEdad, miEtiqueta_);