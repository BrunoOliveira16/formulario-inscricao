/* Envio dos Dados */
document.getElementById("form-00").addEventListener("submit", function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    console.log(evento)
    document.getElementById("resultado").innerHTML = "Data sent Successfully";

});

/* Validação campo em branco */

function validaCampo(elemento){

    elemento.addEventListener("focusout", function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector(".mensagem").innerHTML = "[Field Name] cannot be empty";
            this.classlist.add("erro");
            this.parentNode.classlist.add("erro");
            return false;
        } else {
            document.querySelector(".mensagem").innerHTML = "";
            this.classlist.remove("erro");
            this.parentNode.classlist.remove("erro");
        }

    });

}

/* Validação campo e-mail */

function validaEmail(elemento){

    elemento.addEventListener("focusout", function(event){

        event.preventDefault();

        const emailValido = /^[a-zA-Z0-9.]+@[a-zA-Z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)){
            document.querySelector(".mensagem").innerHTML = "";
            this.classlist.remove("erro");
            this.parentNode.classlist.remove("erro");
            return false;
        } else {
            document.querySelector(".mensagem").innerHTML = "Looks like this is not an email - ex: name@host.tld";
            this.classlist.add("erro");
            this.parentNode.classlist.add("erro");
        }

    });

}


let CampoObrigatorio = document.querySelectorAll("input.Obrigatorio");
let EmailObrigatorio = document.querySelectorAll("input.email");

for(let emFoco of CampoObrigatorio) {
    validaCampo(emFoco);
}
for(let emFoco of EmailObrigatorio) {
    validaEmail(emFoco);
}
