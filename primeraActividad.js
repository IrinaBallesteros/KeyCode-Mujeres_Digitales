// Definir las variables
let nombre = "Pepe";
let edad = 25;
let precio = 99.90;

// Los nombres de tus series favoritas: "Dark", "Mr Robot", "Castlevania"
let seriesFavoritas = ["Dark", "Mr Robot", "Castlevania"];

// Tus películas favoritas, donde cada película debe incluir su nombre, el año de estreno, y una lista con los nombres de sus protagonistas.
let peliculasFavoritas = [
    {
        nombre: "Avenger Endgame",
        ano: 2019,
        protagonistas: ["Robert Downey Jr", "Chris Evans", "Scarlett Johansson"]
    },
    {
        nombre: "Terminator",
        ano: 1984,
        protagonistas: ["Arnold Schwarzenegger", "Linda Hamilton"]
    }

];

// Mostrar todos esos valores por consola
console.log(nombre);
console.log(edad);
console.log(precio);
console.log(seriesFavoritas);
console.log(peliculasFavoritas);

// Mostrar los valores de series favoritas inicial
console.log("Series favoritas inicial:", seriesFavoritas);


// Incrementar la edad en 1 y volver a mostrarla
edad++;
console.log("Edad despues de incrementar:", edad);

// Agregar una serie a la lista de series favoritas y volver a mostrarla
seriesFavoritas.push("Breaking Bad");
console.log("Series favoritas despues de agregar una:", seriesFavoritas);
