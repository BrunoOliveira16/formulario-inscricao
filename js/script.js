/* Envio dos Dados */
document.getElementById("form-00").addEventListener("submit", function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    console.log(evento)
    document.getElementById("resultado").innerHTML = "Data sent Successfully";

});

/* Validação campo em branco */




let CampoObrigatorio = document.querySelectorAll("input");

for(let emFoco of CampoObrigatorio) {
    validaCampo(emFoco);
}