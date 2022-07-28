/* Envio dos Dados */
document.getElementById("form-00").addEventListener("submit", function(evento){

    evento.preventDefault();
    evento.stopPropagation();

    console.log(evento)
    document.getElementById("resultado").innerHTML = "Data sent Successfully";
    
});

/* Limpar campos do formulário */
document.getElementById("form-00").addEventListener("submit", function(Limpar){
    
    document.getElementById("First Name").value="";
    document.getElementById("Last Name").value="";
    document.getElementById("Email Address").value="";
    document.getElementById("Password").value="";

});


/* Validação First Name em branco */

function validaFirstName(elemento){

    elemento.addEventListener("focusout", function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector(".mensagem").innerHTML = "First Name cannot be empty";
            document.getElementById("First Name").style.border = "2px solid red";
            this.classlist.add("erro");
            this.parentNode.classlist.add("erro");
            return false;
        } else {
            document.querySelector(".mensagem").innerHTML = "";
            document.getElementById("First Name").style.border = "";
            this.classlist.remove("erro");
            this.parentNode.classlist.remove("erro");
        }

    });

}

/* Validação Last Name em branco */

function validaLastName(elemento){

    elemento.addEventListener("focusout", function(event){

        event.preventDefault();

        if(this.value == ""){
            document.querySelector(".mensagem").innerHTML = "Last Name cannot be empty";
            document.getElementById("Last Name").style.border = "2px solid red";
            document.getElementById("Last Name").inputMode
            this.classlist.add("erro");
            this.parentNode.classlist.add("erro");
            return false;
        } else {
            document.querySelector(".mensagem").innerHTML = "";
            document.getElementById("Last Name").style.border = "";
            this.classlist.remove("erro");
            this.parentNode.classlist.remove("erro");
        }

    });

}


/* Validação campo e-mail */

function validaEmail(elemento){

    elemento.addEventListener("focusout", function(event){

        event.preventDefault();

        const emailValido = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9]+\.[a-z]+(\.[a-z]+)?/i;
        if(this.value.match(emailValido)){
            document.querySelector(".mensagem").innerHTML = "";
            document.getElementById("Email Address").style.border = "";
            this.classlist.remove("erro");
            this.parentNode.classlist.remove("erro");
            return false;
        } else {
            document.querySelector(".mensagem").innerHTML = "Looks like this is not an email - ex: name@host.tld";
            document.getElementById("Email Address").style.border = "2px solid red";
            this.classlist.add("erro");
            this.parentNode.classlist.add("erro");
        }

    });

}

/* Validação senha */

function validaSenha(elemento){

    elemento.addEventListener("focusout", function(event){

        event.preventDefault();

        const senhaValida = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{6,}$/;
        if(this.value.match(senhaValida)){
            document.querySelector(".mensagem").innerHTML = "";
            document.getElementById("Password").style.border ="";
            this.classlist.remove("erro");
            this.parentNode.classlist.remove("erro");
            return false;
        } else {
            document.querySelector(".mensagem").innerHTML = "minimun six digit, with minimun one number, one caracter lowercase and uppercase.";
            document.getElementById("Password").style.border = "2px solid red";
            this.classlist.add("erro");
            this.parentNode.classlist.add("erro");
        }

    });

}

let FirstObrigatorio = document.querySelectorAll("input.FirstN");
let LastObrigatorio = document.querySelectorAll("input.LastN");
let EmailObrigatorio = document.querySelectorAll("input.email");
let SenhaObrigatorio = document.querySelectorAll("input.Senha");

for(let emFoco of FirstObrigatorio) {
    validaFirstName(emFoco);
}
for(let emFoco of LastObrigatorio) {
    validaLastName(emFoco);
}
for(let emFoco of EmailObrigatorio) {
    validaEmail(emFoco);
}
for(let emFoco of SenhaObrigatorio) {
    validaSenha(emFoco);
}