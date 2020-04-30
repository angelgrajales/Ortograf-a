
var ejercicios = ['<img src="img/b2_a7/img1.png" alt="dientes" class="img_peqe"/> <br> Dien<input id="palabra_1" class="in_text border border-success" maxlength="3" disabled/>', 
    '<img src="img/b2_a7/img2.png" alt="doctor" class="img_peqe"/> <br> Doc<input id="palabra_2" class="in_text border border-success" maxlength="3" disabled />', 
    '<img src="img/b2_a7/img3.png" alt="guitarra" class="img_peqe"/> <br> Gui<input id="palabra_3" class="in_text border border-success" maxlength="3" disabled/>ra',
    '<img src="img/b2_a7/img4.png" alt="pastel" class="img_peqe"/> <br> Pas<input id="palabra_4" class="in_text border border-success" maxlength="3" disabled />', 
    '<img src="img/b2_a7/img5.png" alt="patines" class="img_peqe"/> <br> Pa<input id="palabra_5" class="in_text border border-success" maxlength="3" disabled/>es', 
    '<img src="img/b2_a7/img6.png" alt="tanque" class="img_peqe"/> <br> <input id="palabra_6" class="in_text border border-success" maxlength="3" disabled />que',
    '<img src="img/b2_a7/img7.png" alt="tornillo" class="img_peqe"/> <br> <input id="palabra_7" class="in_text border border-success" maxlength="3" />nillo', 
    '<img src="img/b2_a7/img8.png" alt="tortuga" class="img_peqe"/> <br> <input id="palabra_8" class="in_text border border-success" maxlength="3" />tuga'];
        var palabras = ['dientes', 'doctor', 'guitarra', 'pastel', 'patines', 'tanque', 'tornillo', 'tortuga'];
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
        if (pos === 0 && valor === "tes"){
return true;
        } else if (pos === 1 && valor === "tor"){
return true;
        } else if (pos === 2 && valor === "tar"){
return true;
        } else if (pos === 3 && valor === "tel"){
return true;
        } else if (pos === 4 && valor === "tin"){
return true;
        } else if (pos === 5 && valor === "tan"){
return true;
        } else if (pos === 6 && valor === "tor"){
return true;
        } else if (pos === 7 && valor === "tor"){
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





