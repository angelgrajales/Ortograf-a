
var ejercicios = ['<img src="img/b5_a32/trompo.png" alt="trompo" class="img_peqe"/> <br> <input id="palabra_1" class="in_text4 border border-success"/>rompo',
    '<img src="img/b5_a32/luis.png" alt="Luis" class="img_peqe"/> <br> <input id="palabra_2" class="in_text4 border border-success" />uis',
    '<img src="img/b5_a32/mexico.png" alt="México" class="img_peqe"/> <br> <input id="palabra_3" class="in_text4 border border-success"/>éxico',
    '<img src="img/b5_a32/casa.png" alt="casa" class="img_peqe"/> <br> <input id="palabra_4" class="in_text4 border border-success"/>asa',
    '<img src="img/b5_a32/hormiga.png" alt="hormigas" class="img_peqe"/> <br> <input id="palabra_5" class="in_text4 border border-success" />ormigas',
    '<img src="img/b5_a32/loli.png" alt="Loli" class="img_peqe"/> <br> <input id="palabra_6" class="in_text4 border border-success"/>oli',
    '<img src="img/b5_a32/clara.png" alt="Clara" class="img_peqe"/> <br> <input id="palabra_7" class="in_text4 border border-success"  />lara',
    '<img src="img/b5_a32/ciudad.png" alt="ciudad" class="img_peqe"/> <br> <input id="palabra_8" class="in_text4 border border-success"  />iudad',
    '<img src="img/b5_a32/cuentos_nev.png" alt="Cuentos nevados" class="img_peqe"/> <br> <input id="palabra_9" class="in_text4 border border-success"  />uentos nevados',
    '<img src="img/b5_a32/cuentos.png" alt="cuentos" class="img_peqe"/> <br> <input id="palabra_10" class="in_text4 border border-success"  />uentos',
    '<img src="img/b5_a32/pipo.png" alt="Pipo" class="img_peqe"/> <br> <input id="palabra_11" class="in_text4 border border-success"  />ipo',
    '<img src="img/b5_a32/paris.png" alt="París" class="img_peqe"/> <br> <input id="palabra_12" class="in_text4 border border-success"  />arís'];
var palabras = ['gorila', 'estómago', 'gusano', 'dragón', 'ganar', 'aguja', 'ganso', 'bigote', 'abogado', 'aguantar'];
var usados = [];
var id_boton = "";
var pos = -1;
var resultado;
$(document).ready(function () {

    $("#revisar").click(function () {
        resultado = califica();
        if (resultado === true) {
            bien();
        } else {
            mal();
        }
    })
})


function inicio() {

    escribe_palabra();
    muestra_completa();
}

function escribe_palabra() {
    pos = aleatorio();
    $("#cont_palabra").empty();
    $('#cont_palabra').html(ejercicios[pos]);
}

function aleatorio() {
    num = parseInt(Math.random() * (ejercicios.length));//obtiene un numero aleatorio

    while (usados.includes(num) === true) {//Mientras el numero este en la lista
        num = parseInt(Math.random() * (ejercicios.length));//sigue buscando mas numeros        
    }
    return num;
}


function aleatorio_puro() {
    var numero;
    numero = parseInt(Math.random() * (ejercicios.length));//obtiene un numero aleatorio  
    return numero;
}

function califica() {
    valor = $("#palabra_" + (pos + 1)).val();
    



    if (pos === 0 && valor === "t") {
        return true;
    } else if (pos === 1 && valor === "L" ) {
        return true;
    } else if (pos === 2 && valor === "M") {
        return true;
    } else if (pos === 3 && valor === "c") {
        return true;
    } else if (pos === 4 && valor === "h") {
        return true;
    } else if (pos === 5 && valor === "L") {
        return true;
    } else if (pos === 6 && valor === "C") {
        return true;
    } else if (pos === 7 && valor === "c") {
        return true;
    } else if (pos === 8 && valor === "C") {
        return true;
    } else if (pos === 9 && valor === "c") {
        return true;
    } else if (pos === 10 && valor === "P") {
        return true;
    } else if (pos === 11 && valor === "P") {
        return true;
    } else {
        return false;
    }

}


function bien() {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).css('background-color', '#7bffa5');
    usados.push(pos);
    if (usados.length === ejercicios.length) {
        $('#modalExcelente').modal('show');
    } else {
        setTimeout('escribe_palabra()', 1500);
    }
}

function mal() {
    var id_contenedor = "#palabra_" + (pos + 1);
    $(id_contenedor).css('background-color', '#F83939');
}









