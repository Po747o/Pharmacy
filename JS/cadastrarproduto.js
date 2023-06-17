const inputs = document.querySelectorAll("[required]"); 
const botao = document.querySelector("#btnSalvar");

inputs.forEach((elemento) => { 
    elemento.addEventListener("blur", (evento) => {
        console.log(evento);
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

        console.log(mask[0]);

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
            if(campo.value.length<6) {
                msnErro.textContent = "Digite o valor de compra no seguinte formato: R$ 0,00.";
            }
            else {
                msnErro.textContent = "";
            }
        break

        case 'valorvenda':
            if(campo.value.length<6) {
                msnErro.textContent = "Digite o valor de venda no seguinte formato: R$ 0,00.";
            }
            else {
                msnErro.textContent = "";
            }
        break
    }   
}