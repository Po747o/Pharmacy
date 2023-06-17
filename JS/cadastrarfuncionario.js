const inputs = document.querySelectorAll("[required]"); 
const cpf = document.querySelector("#cpf");
const botao = document.querySelector("#btnSalvar");

var valida = 0;
var valida2 = 1;

inputs.forEach((elemento) => { 
    elemento.addEventListener("blur", (evento) => {
        console.log(evento);
        validaCampo(evento.target);
        validaCPF(evento.target);
    })
});

cpf.addEventListener("keypress",(evento) =>{

    var  St = evento.which;
    console.log(St);

      if(!((St >= 48 && St <= 57) || St === 46 || St === 45)){
        evento.preventDefault()
    }
})

function validaCPF(campo){
    const msnErro = campo.parentNode.querySelector("[data-erro]");
    if(campo.name === 'cpf')
    {
        var cepeefe = campo.value;
        var soma = 0;
        var resto = 0;
        cepeefe = cepeefe.replaceAll('.', '');
        cepeefe = cepeefe.replaceAll('-', '');

        var cpfArray = cepeefe.split('');
        
        if(cpfArray.length === 11){
            var cont = 0;
            for (let i = 0; i < cpfArray.length; i++) {
                if(cpfArray[i] === cpfArray[i+1]){
                  cont += 1;                
                } 
            }

            if(cont < 10){
                for (let i = 0; i < 9; i++) {
                    soma +=  parseInt(cpfArray[i]) * (10 - i)  
                }
                
                resto = (soma * 10) % 11

                if ((resto == 10) || (resto == 11)){
                    resto = 0;
                }
                
                  
                if (resto === parseInt(cpfArray[9])){
                    soma = 0
                    for (let i = 0; i < 10; i++) {
                        soma +=  parseInt(cpfArray[i]) * (11 - i)
                        
                    }
                    resto = (soma * 10) % 11
    
                    if ((resto == 10) || (resto == 11)){
                        resto = 0;
                    }

                    if (resto === parseInt(cpfArray[10])){
                        msnErro.textContent = ''
                        valida = 0;
                    }else
                    {
                        msnErro.textContent = 'CPF inválido!'
                        valida = 1;
                    }

                    
                }else{
                    msnErro.textContent = 'CPF inválido!'
                    valida = 1;
                }
            }

            else{
                msnErro.textContent = 'CPF inválido!'
                valida = 1;
            }

        }else{
            msnErro.textContent = 'CPF inválido!'
            valida = 1;
        }
    }
   
  else
  {
    
  }
}

function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");

    switch (campo.name) {
        case 'nome':
            if (campo.value.length<5) {
                msnErro.textContent = "Digite o nome completo!";
            }
            else {
                msnErro.textContent = "";
            }

            break

        case 'celular':

        var cell = campo.value;

        var mask = cell.split('');

        console.log(mask[0]);

            if (!(mask[2] === ' ' && mask[8] === '-')) {
                msnErro.textContent = "Digite o celular no seguinte formato: 00 00000-0000.";
            }
            else {
                msnErro.textContent = "";
            }

        break

        case 'cpf':

        var cpf = campo.value;

        var mask = cpf.split('');//valor dentro das aspas é o que faz a separação

        if(!(mask[3] === '.' && mask[7] === '.' && mask[11] === '-' )){
            msnErro.textContent = "Digite o CPF no seguinte formato: 000.000.000-00.";
        }

        else {
            msnErro.textContent = "";
        }

        break

        case 'funcao':
            if(campo.value.length<5) {
                msnErro.textContent = "A função deve ter, pelo menos, 5 caracteres.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case 'salario':
            if(campo.value.length<6) {
                msnErro.textContent = "Digite o salário no seguinte formato: R$ 0,00.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case 'rg':
            if(campo.value.length<7) {
                msnErro.textContent = "O RG deve ter, pelo menos, 7 dígitos.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case 'sexo':
             if(valida2 = 1) {
                valida2 = 0;
            }
    }   
}

botao.addEventListener("click", (evento) =>{
    if(valida === 1){
     evento.preventDefault();
     alert("Insira um CPF válido antes de enviar!");
    }

    if(valida2 === 1){
        evento.preventDefault();
        alert("Selecione um sexo antes de enviar!");
    }
})