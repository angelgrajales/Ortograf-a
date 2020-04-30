
var ejercicios = ['a í b a h<input id="palabra_1" class="in_text4 border border-success"/>',
    'a h a e t a c u c <input id="palabra_2" class="in_text4 border border-success"/>',
    'h a g o o <input id="palabra_3" class="in_text4 border border-success"/>',
    'h r a o a <input id="palabra_4" class="in_text4 border border-success"/>',
    'r p i o h o b i d <input id="palabra_5" class="in_text4 border border-success" />',
    'e í o l c h v u <input id="palabra_6" class="in_text4 border border-success"/>',
    'a í l l e h <input id="palabra_7" class="in_text4 border border-success" />',
    'o l e h n a <input id="palabra_8" class="in_text4 border border-success"  />',
    'l h o a c o l <input id="palabra_9" class="in_text4 border border-success" />',
    'ú b h o <input id="palabra_10" class="in_text4 border border-success"  />',
    'c e i f e e n h t a <input id="palabra_11" class="in_text4 border border-success"/>',
    'r o o r h a <input id="palabra_12" class="in_text4 border border-success" />',
    'r a c r o a h <input id="palabra_13" class="in_text4 border border-success"  />',
    'o n c í h a <input id="palabra_14" class="in_text4 border border-success" />'];
var palabras = ['bahía', 'cacahuate', 'ahogo', 'ahora', 'prohibido', 'vehículo',
    'alhelí', 'anhelo', 'alcohol', 'búho', 'fehaciente', 'ahorro', 'ahorcar', 'ahínco'];
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
    valor = valor.toLowerCase();



    if (pos === 0 && valor === "bahía") {
        return true;
    } else if (pos === 1 && valor === "cacahuate") {
        return true;
    } else if (pos === 2 && valor === "ahogo") {
        return true;
    } else if (pos === 3 && valor === "ahora") {
        return true;
    } else if (pos === 4 && valor === "prohibido") {
        return true;
    } else if (pos === 5 && valor === "vehículo") {
        return true;
    } else if (pos === 6 && valor === "alhelí") {
        return true;
    } else if (pos === 7 && valor === "anhelo") {
        return true;
    } else if (pos === 8 && valor === "alcohol") {
        return true;
    } else if (pos === 9 && valor === "búho") {
        return true;
    } else if (pos === 10 && valor === "fehaciente") {
        return true;
    } else if (pos === 11 && valor === "ahorro") {
        return true;
    } else if (pos === 12 && valor === "ahorcar") {
        return true;
    } else if (pos === 13 && valor === "ahínco") {
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









