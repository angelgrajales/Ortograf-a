/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var cartas = new Array( 
  {nombre: 'Güera <br> <img src="img/b3_a19/1b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, {nombre: 'Cigüeña <br> <img src="img/b3_a19/2b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, 
  {nombre: 'Pingüino <br> <img src="img/b3_a19/3b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, {nombre: 'Zarigüeya <br> <img src="img/b3_a19/4b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, 
  {nombre: 'Lengüita <br> <img src="img/b3_a19/5b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, {nombre: 'Agüita <br> <img src="img/b3_a19/6b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, 
  
  {nombre: 'Güera <br> <img src="img/b3_a19/1b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, {nombre: 'Cigüeña <br> <img src="img/b3_a19/2b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, 
  {nombre: 'Pingüino <br> <img src="img/b3_a19/3b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, {nombre: 'Zarigüeya <br> <img src="img/b3_a19/4b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, 
  {nombre: 'Lengüita <br> <img src="img/b3_a19/5b.png" alt="Güera" class="img_peqe"/>', seleccion: false}, {nombre: 'Agüita <br> <img src="img/b3_a19/6b.png" alt="Güera" class="img_peqe"/>', seleccion: false} );
        
var intentos = 0;
var jugada1 = "";
var jugada2 = "";
var identificadorJ1 = "";
var identificadorJ2 = "";

function iniciarJuego () {  
  var dato = document.getElementById("juego");
  dato.style.opacity = 1;

  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 12 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
  }
};

function resetearJuego () {
  cartas.sort(function() {return Math.random() - 0.5});
  for ( var i = 0 ; i < 12 ; i++ ) {
    var carta = cartas[i].nombre;
    var dato = document.getElementById( i.toString() );
    dato.dataset.valor = carta;
    colorCambio( i, '#16c98c', '?');
  } 
}

function girarCarta () {
  var evento = window.event;

  jugada2 = evento.target.dataset.valor;
  identificadorJ2 = evento.target.id;


  if ( jugada1 !== "" ) {

    if ( jugada1 === jugada2 && identificadorJ1 !== identificadorJ2 && cartas[parseInt(identificadorJ2)].seleccion != true &&               cartas[parseInt(identificadorJ1)].seleccion != true) {
      
      cartas[parseInt(identificadorJ1)].seleccion = true;
      cartas[parseInt(identificadorJ2)].seleccion = true;

      colorCambio(identificadorJ2, "#ffffff", jugada2);
      vaciar();
      comprobar();
    }else if(identificadorJ1 !== identificadorJ2){
      var self = this;
      setTimeout(function(){
        colorCambio(self.identificadorJ1, "#16c98c", "?")
        colorCambio(self.identificadorJ2, "#16c98c", "?")
        vaciar()
      },200); 

      colorCambio(identificadorJ2, "#ffffff", jugada2);
    }
  } else if(jugada2 !== "valor") {

    colorCambio(identificadorJ2, "#ffffff", jugada2);

    jugada1 = jugada2;
    identificadorJ1 = identificadorJ2;
  }
};

function vaciar ()  {
  jugada1 = ""; 
  jugada2 = ""; 

  identificadorJ1 = "";
  identificadorJ2 = "";
}

function colorCambio (posicion, color, contenido) {
  document.getElementById(posicion.toString()).style.backgroundColor = color;
  document.getElementById(posicion.toString()).innerHTML = contenido;
}   

function comprobar () {
  var aciertos = 0;
  for( var i = 0 ; i < 12 ; i++ ){
    if ( cartas[i].seleccion == true ) {
      aciertos ++;
    }

  }

  if(aciertos == 12){
    $('#modalExcelente').modal('show');
  }
}

function resetearJuego () {
            cartas.sort(function() { return Math.random() - 0.5});
            for ( var i = 0; i < 12 ; i++ ) {
                var carta = cartas[i].nombre;
                var dato = document.getElementById( i.toString() );
                dato.dataset.valor = carta;
                colorCambio(i, '#16c98c', '?');
            }
        };


