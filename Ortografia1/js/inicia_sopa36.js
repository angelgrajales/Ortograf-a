function iniciaSopa() {
    var words = ["alambrado", "sembrar", "hembra", "embudo", "desembarcar", "bombón", "calambre", "alfombra", "chimpacé", "campo", "lámpara", "imprimir", "empollar", "empleo", "computadora", "competencia"]; /*Poner las palabras para generar la sopa de letras*/
    var gamePuzzle = wordfindgame.create(words, '#juego', '#Palabras'); /*id de los contenedores donde se escribe tanto la sopa de letras y las palabras del array words*/
    var puzzle = wordfind.newPuzzle(words, {height: 20, width: 20, fillBlanks: false}); /*Se configura el número de filas y columnas que tendra la sopa de letras*/
    wordfind.print(puzzle);
}
