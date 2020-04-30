function iniciaSopa() {
    var words = ["elogio", "gitano", "corregir", "gimnasia", "digital", "girasol", "gigantesco", "higiene", "gis", "imaginación", 
        "gemelo", "digestión", "geranio", "margen", "oxígeno", "gelatina", "germinado", "origen", "exagerar", "gerencia"]; /*Poner las palabras para generar la sopa de letras*/
    var gamePuzzle = wordfindgame.create(words, '#juego', '#Palabras'); /*id de los contenedores donde se escribe tanto la sopa de letras y las palabras del array words*/
    var puzzle = wordfind.newPuzzle(words, {height: 50, width: 50, fillBlanks: false}); /*Se configura el número de filas y columnas que tendra la sopa de letras*/
    wordfind.print(puzzle);
}