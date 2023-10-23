const inputs = document.querySelectorAll("[required]"); 
const cpf = document.querySelector("#cpf");
const botao = document.querySelector("#btnSalvar");

var valida = 0;
var valida2 = 1;

inputs.forEach((elemento) => { 
    elemento.addEventListener("blur", (evento) => {
        validaCampo(evento.target);
        validaCPF(evento.target);
    })
});

cpf.addEventListener("keypress",(evento) =>{

    var  St = evento.which;

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

        /*case 'celular':

        var cell = campo.value;

        var mask = cell.split('');

        console.log(mask[0]);

            if (!(mask[2] === ' ' && mask[8] === '-')) {
                msnErro.textContent = "Digite o celular no seguinte formato: 00 00000-0000.";
            }
            else {
                msnErro.textContent = "";
            }

        break*/

        case 'cpf':

        var cpf = campo.value;

        var mask = cpf.split('');

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

            campo.value = campo.value.replace(/\D/g, ''); 
            campo.value = "R$" + (parseInt(campo.value) / 100).toFixed(2);
            const valor = campo.value;

            
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
});

document.getElementById('celular').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 2) {
        value = `(${value.substring(0, 2)}) ${value.substring(2)}`;
    }
    if (value.length >10) {
        value = `${value.substring(0, 10)}-${value.substring(10)}`;
    }
    e.target.value = value;
});

document.getElementById('cpf').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.substring(0, 3) + '.' + value.substring(3);
    }
    if (value.length > 7) {
        value = value.substring(0, 7) + '.' + value.substring(7);
    }
    if (value.length > 11) {
        value = value.substring(0, 11) + '-' + value.substring(11, 13);
    }
    e.target.value = value;
});