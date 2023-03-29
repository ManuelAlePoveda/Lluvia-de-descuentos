var desvanecido = setTimeout('temporizador()', 10000);

function temporizador() {
    $(function() {
    $(".burbujas").hide(function(){
        desvanecido = setTimeout("temporizador()", 10000);
        });
    });
}