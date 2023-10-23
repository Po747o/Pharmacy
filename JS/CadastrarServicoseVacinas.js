const inputs = document.querySelectorAll("[required]");



const botao = document.querySelector("#btnSalvar");


inputs.forEach((elemento) => {
    elemento.addEventListener("blur", (evento) => {
        validaCampo(evento.target);
        validaCPF(evento.target);
    })

});

botao.addEventListener("click", (evento) => {

    if (valida === 1) {
        evento.preventDefault();
        alert("Insira um CPF válido antes de enviar!");
    }

    if (valida2 === 1) {
        evento.preventDefault();
        alert("Selecione um sexo válido antes de enviar!");
    }
})

function mascaraDuracao(campo) {
    campo.value = campo.value.replace(/\D/g, ''); // Remove caracteres não numéricos
    campo.value = campo.value.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");
}



function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");


    switch (campo.name) {
        case 'nome':
            if (campo.value.length < 15) {
                msnErro.textContent = "Digite o nome do serviço!";
            }
            else {
                msnErro.textContent = "";

            }

            break


        case 'fabricante':

            if (campo.value.length < 15) {
                msnErro.textContent = "Digite o nome do fabricante do serviço(Em caso de vacinas e testes fabricados)!";
            }
            else {
                msnErro.textContent = "";

            }

            break

        case 'duracao':
            campo.value = campo.value.replace(/(\d{2})(\d{2})(\d{2})/, "$1:$2:$3");

            const duracao = campo.value;

            if (!duracao.match(/^\d{2}:\d{2}:\d{2}$/)) {
                msnErro.textContent = "Digite a duracao do serviço(00:00:00)!";
            }
            else {
                msnErro.textContent = "";

            }

            break

        case 'valor':
            campo.value = campo.value.replace(/\D/g, ''); 
            campo.value = "R$" + (parseInt(campo.value) / 100).toFixed(2);
         

            const valor = campo.value;

            if (!valor.match(/^R\$[0-9]{1,6}(,[0-9]{1,2})?$/)) {
                msnErro.textContent = "Digite a valor do serviço(R$00,00)!";

            }

            else {
                msnErro.textContent = "";
            }

            break

        case 'tipo':

            if (campo.value.length < 8) {
                msnErro.textContent = "Digite o tipo do serviço!";
            }
            else {
                msnErro.textContent = "";

            }

            break

        case 'local':

            if (campo.value.length < 6) {
                msnErro.textContent = "Digite o local que o serviço é realizado!";
            }
            else {
                msnErro.textContent = "";

            }
            break

        case 'profissional':

            if (campo.value.length < 6) {
                msnErro.textContent = "Digite o profissional que pode realizar o serviço!";
            }
            else {
                msnErro.textContent = "";

            }
            break

        case 'quant':

    }
}
