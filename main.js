var desvanecido = setTimeout('temporizador()', 10000);

function temporizador() {
    $(function() {
    $(".descuentos").hide(function(){
        desvanecido = setTimeout("temporizador()", 10000);
        });
    });
}