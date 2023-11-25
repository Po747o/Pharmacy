const inputs = document.querySelectorAll("[required]"); 
const botao = document.querySelector("#btnSalvar");

inputs.forEach((elemento) => { 
    elemento.addEventListener("blur", (evento) => {
        validaCampo(evento.target);
    })
});

function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");

    switch (campo.name) {
        case 'nome':
            if (campo.value.length<10) {
                msnErro.textContent = "Digite o nome completo!";
            }
            else {
                msnErro.textContent = "";
            }

            break

            case 'tipo':
                if (campo.value.length<5) {
                    msnErro.textContent = "Quantidade de caracteres insuficiente. Digite o nome do tipo por extenso.";
                }
                else {
                    msnErro.textContent = "";
                }
    
            break

            case 'pesovolume':
            var pesovolume = campo.value;

                if (!(pesovolume.includes("g") || pesovolume.includes("mg") ||
                 pesovolume.includes("mcg") || pesovolume.includes("ml"))) {
                    msnErro.textContent = "Digite no seguinte formato: 00 mg ou 00 ml";
                }
            
                else {
                    msnErro.textContent = "";
                }   
        break

        case 'codigo':

        var codigo = campo.value;

        var mask = codigo.split('');

            if (!(mask[3] === '-' && mask[10] === '-')) {
                msnErro.textContent = "Digite o código no seguinte formato: 000-000000-000.";
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

        case 'fornecedor':
            if(campo.value.length<5) {
                msnErro.textContent = "Quantidade de caracteres insuficiente.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case 'estoque':
            if(campo.value.length<1) {
                msnErro.textContent = "O número mínimo para o estoque deve ser 1.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case '':
            if(campo.value.length<1) {
                msnErro.textContent = "O número mínimo para o estoque deve ser 1.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case 'valorcompra':
            campo.value = campo.value.replace(/\D/g, ''); 
            campo.value = "R$ " + (parseInt(campo.value) / 100).toFixed(2);
            const valor = campo.value;

            /*if (!valor.match(/^R\$[0-9]{1,6}(,[0-9]{1,2})?$/)) {
                msnErro.textContent = "Digite o valor de compra no seguinte formato: R$ 0,00.";

            }*/
        break

        case 'valorvenda':
            campo.value = campo.value.replace(/\D/g, ''); 
            campo.value = "R$" + (parseInt(campo.value) / 100).toFixed(2);
            const valor2 = campo.value;

        break
    }   
}

document.getElementById('codigo').addEventListener('input', function (e) {
    let value = e.target.value.replace(/\D/g, ''); 
    if (value.length > 3) {
        value = value.substring(0, 3) + '-' + value.substring(3);
    }
    if (value.length > 10) {
        value = value.substring(0, 10) + '-' + value.substring(10);
    }
    if (value.length > 14) {
        value = value.substring(0, 14) + '-' + value.substring(14);
    }
    e.target.value = value;
});