/* Envio dos Dados */
document.getElementById("form-00").addEventListener("submit", function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    console.log(evento)
    document.getElementById("Envio").innerHTML = "";

});