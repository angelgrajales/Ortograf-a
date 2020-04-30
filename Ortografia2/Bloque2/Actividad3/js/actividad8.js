
var cantidad_palabras_buscar=8;
var palabras_encontradas=[];
var id_palabra;

$(document).ready(function () {

    $(".palabra_clic").click(function () {
        id_palabra = $(this).attr("id");
        evalua(id_palabra);
    });
});


function evalua(id){
    if(palabras_encontradas.includes(id)===true){//busca en palabras encontradas si esta elid del elemento que le dieron clic
       //si ya esta es por que ya le dieron clic y no hará nada 
    }else{//en caso de que no le hayan dado clic 
        palabras_encontradas.push(id);//se agrega el id de la palabra que se dio clic
        $("#"+id).css("color", "#7bffa5");//se cambia el color de la letra
        var porcentaje=parseInt((100*palabras_encontradas.length)/cantidad_palabras_buscar);
        $("#avance").attr("style", "width:"+porcentaje+"%");
        $("#avance").attr("aria-valuenow", porcentaje);
        $("#avance").text(porcentaje+"%");
        
        
    }
    if(palabras_encontradas.length===cantidad_palabras_buscar){//si ya encontro todas las palabras despliega el popup
        $('#modalExcelente').modal('show');
    }
    
}











