
var ejercicios = ['<img src="img/b2_a9/img1.png" alt="alcancía" class="img_peqe"/> <br> Al<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>cía', 
    '<img src="img/b2_a9/img2.png" alt="arcangel" class="img_peqe"/> <br> ar<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />gel', 
    '<img src="img/b2_a9/img3.png" alt="carne" class="img_peqe"/> <br> <input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>ne',
    '<img src="img/b2_a9/img4.png" alt="carpeta" class="img_peqe"/> <br> <input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />peta', 
    '<img src="img/b2_a9/img5.png" alt="cascada" class="img_peqe"/> <br> <input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>cada', 
    '<img src="img/b2_a9/img6.png" alt="calendario" class="img_peqe"/> <br> <input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />endario'];
        var palabras = ['alcancía', 'arcángel', 'carne', 'carpeta', 'cascada', 'calendario'];
        var usados = [];
        var id_boton = "";
        var pos = - 1;
        var resultado;
        $(document).ready(function() {

$(".opcion").click(function(){
id_boton = $(this).attr("id");
        resultado = califica(id_boton);
        if (resultado === true){
bien(id_boton);
        } else{
mal(id_boton);
        }
})
})
       function escribe_palabra(){
        pos = aleatorio();
                $("#cont_palabra").empty();
                $('#cont_palabra').html(ejercicios[pos]);
        }

function aleatorio(){
num = parseInt(Math.random() * (ejercicios.length));
        while ($.inArray(num, usados) !== - 1){
num = parseInt(Math.random() * (ejercicios.length));
        console.log(num);
        }

return num;
}


function califica(boton){
valor = $("#" + boton).text();
        console.log("El valor es: " + valor + " y pos es: " + pos);
        if (pos === 0 && valor === "can"){
return true;
        } else if (pos === 1 && valor === "cán"){
return true;
        } else if (pos === 2 && valor === "car"){
return true;
        } else if (pos === 3 && valor === "car"){
return true;
        } else if (pos === 4 && valor === "cas"){
return true;
        } else if (pos === 5 && valor === "cal"){
return true;
        } else{
return false;
        }

}


function bien(boton){
var id_contenedor = "#palabra_" + (pos + 1);
        $(id_contenedor).val($("#" + boton).text());
        $(id_contenedor).css('background-color', '#7bffa5');
        usados.push(pos);
        muestra_completa();
        if (usados.length === ejercicios.length){
$('#modalExcelente').modal('show');
        } else{
setTimeout('escribe_palabra()', 1500);
}
}

function mal(boton){
var id_contenedor = "#palabra_" + (pos + 1);
        $(id_contenedor).val($("#" + boton).text());
        $(id_contenedor).css('background-color', '#F83939');
}

function muestra_completa(){
$('#palabra_completa').css('visibility', 'visible');
        $('#palabra_completa').
        append($('<button>').
                attr("class", "btn btn-light").
                attr("type", "button").
                attr("value", palabras[pos]).
                text(palabras[pos])
                );
}





