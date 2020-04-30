var ejercicios = ['A<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>tar',
        'Su<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />rencia',
        '<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>mnasio',
        'Ca<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />ta',
        'Tra<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>nar',
        'A<input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />ncia',
        'Can<input id="palabra_7" class="in_text border border-success" maxlength="3" />ar',
        '<input id="palabra_8" class="in_text border border-success" maxlength="3" />tano ',
        'Con<input id="palabra_9" class="in_text border border-success" maxlength="3" />lar',
        '<input id="palabra_10" class="in_text border border-success" maxlength="3" disabled/>nete',
        'Ve<input id="palabra_11" class="in_text border border-success" maxlength="3" disabled/>z',
        'Oxi<input id="palabra_12" class="in_text border border-success" maxlength="3" disabled/>no',
        'A<input id="palabra_13" class="in_text border border-success" maxlength="3" disabled/>no',
        'Aco<input id="palabra_14" class="in_text border border-success" maxlength="3" disabled/>nado',
        'Conta<input id="palabra_15" class="in_text border border-success" maxlength="3" disabled/>ar',
        'Bru<input id="palabra_16" class="in_text border border-success" maxlength="3" disabled/>ría',
        '<input id="palabra_17" class="in_text border border-success" maxlength="3" disabled/>stación',
        'Cru<input id="palabra_18" class="in_text border border-success" maxlength="3" disabled/>ente',
        'Ve<input id="palabra_19" class="in_text border border-success" maxlength="3" disabled/>ga',
        'Le<input id="palabra_20" class="in_text border border-success" maxlength="3" disabled/>slar'
];
var palabras = ['Agitar', 'Sugerencia', 'Gimnasio', 'Cajeta', 'Trajinar', 'Agencia', 'Canjear', 'Gitano', 'Congelar',
        'Jinete', 'Vejez', 'Oxigeno', 'Ajeno', 'Acojinado', 'Contagiar', 'Brujería', 'Gestación', 'Crujiente', 'Vejiga', 'Legislar'
];
var usados = [];
var id_boton = "";
var pos = -1;
var resultado;
$(document).ready(function () {

        $(".opcion").click(function () {
                id_boton = $(this).attr("id");
                resultado = califica(id_boton);
                if (resultado === true) {
                        bien(id_boton);
                } else {
                        mal(id_boton);
                }
        })
})

function escribe_palabra() {
        pos = aleatorio();
        $("#cont_palabra").empty();
        $('#cont_palabra').html(ejercicios[pos]);
}

function aleatorio() {
        num = parseInt(Math.random() * (ejercicios.length));
        while ($.inArray(num, usados) !== -1) {
                num = parseInt(Math.random() * (ejercicios.length));
                console.log(num);
        }

        return num;
}

function califica(boton) {
        valor = $("#" + boton).text();

        if (pos === 0 && valor === "gi") {
                return true;
        } else if (pos === 1 && valor === "ge") {
                return true;
        } else if (pos === 2 && valor === "gi") {
                return true;
        } else if (pos === 3 && valor === "je") {
                return true;
        } else if (pos === 4 && valor === "ji") {
                return true;
        } else if (pos === 5 && valor === "ge") {
                return true;
        } else if (pos === 6 && valor === "je") {
                return true;
        } else if (pos === 7 && valor === "gi") {
                return true;
        } else if (pos === 8 && valor === "ge") {
                return true;
        } else if (pos === 9 && valor === "ji") {
                return true;
        } else if (pos === 10 && valor === "je") {
                return true;
        } else if (pos === 11 && valor === "ge") {
                return true;
        } else if (pos === 12 && valor === "je") {
                return true;
        } else if (pos === 13 && valor === "ji") {
                return true;
        } else if (pos === 14 && valor === "gi") {
                return true;
        } else if (pos === 15 && valor === "je") {
                return true;
        } else if (pos === 16 && valor === "ge") {
                return true;
        } else if (pos === 17 && valor === "ji") {
                return true;
        } else if (pos === 18 && valor === "ji") {
                return true;
        } else if (pos === 19 && valor === "gi") {
                return true;

                return false;
        }

}


function bien(boton) {
        var id_contenedor = "#palabra_" + (pos + 1);
        $(id_contenedor).val($("#" + boton).text());
        $(id_contenedor).css('background-color', '#7bffa5');
        usados.push(pos);
        muestra_completa();
        cambia_imagen();
        if (usados.length === ejercicios.length) {
                $('#modalExcelente').modal('show');
        } else {
                setTimeout('escribe_palabra()', 1500);
        }
}

function mal(boton) {
        var id_contenedor = "#palabra_" + (pos + 1);
        $(id_contenedor).val($("#" + boton).text());
        $(id_contenedor).css('background-color', '#F83939');
}

function muestra_completa() {
        $('#palabra_completa').css('visibility', 'visible');
        $('#palabra_completa').
        append($('<button>').attr("class", "btn btn-light").attr("type", "button").attr("value", palabras[pos]).text(palabras[pos]));
}

function cambia_imagen() {
        var ruta = "img/b1_a2/img" + (usados.length) + ".png";
        $('#imagen').attr('src', ruta);
}