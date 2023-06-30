import idadeMaior from "./vidade.js";

const inputs = document.querySelectorAll("[required]");
inputs.forEach((elemento)=> {
    elemento.addEventListener("blur", (evento)=> {
        validaCampo(evento.target)
    });
    elemento.addEventListener("invalid", evento => evento.preventDefault);
});

const erros = [ //lista dos erros a serem verificados. São erros reconhecidos pelo JS e retornam true para acionados 
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
]

const mensagensErro = {
    nome:{
        valueMissing: "O campo nome é obrigatório, deixe de preguiça e digite seu nome completo!",
        patterMismatch: "Por favor, preencha com um nome válido"
    },
    email:{
        valueMissing: "O campo de email é obrigatório!",
        typeMismatch: "Por favor, preencha com um email corretamente!",
        tooShort: "Por favor, preencha com um email válido."
    },
    nascimento:{
        valueMissing: "O campo de nascimento é obrigatório!",
        customError: "Você deve ser mairo que 18 anos para fazer o cadastro."
    },
    celular:{
        valueMissing: "O campo celular é obrigatório!",
        patterMismatch: "Por favor, preencha um nome válido, no formato (00) 00000-0000.",
        tooShort: "O campo celular não tem caracteres o suficiente."
    }
}

function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");
    let mensagem = "";
    if(campo.name === 'nascimento' && campo.value != "") {
        idadeMaior(campo);
    }
    erros.forEach(erro => {
        if(campo.validity[erro]){
            mensagem = mensagensErro[campo.name][erro]
        }
    });
    const inputValida = campo.checkValidity();
    if(!inputValida){
        msnErro.textContent = mensagem;
    } else {
        msnErro.textContent = "Campo OK"
    }
}
