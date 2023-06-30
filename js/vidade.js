export default function idadeMaior(campo) {
    const nasc = new Date(campo.value); //serve para converter o formato de data brasileiro para o estadunidense 
    console.log(maior(nasc));
    if(!maior(nasc)) {
        campo.setCustomValidity('É menor');
    }
}

function maior(data) { //
    const atual = new Date();
    const maioridade = new Date(data.getUTCFullYear()+18, data.getUTCMonth(), data.getUTCDate());
    return atual >= maioridade; //essa função compara a data atual com a data de nascimento da pessoa + 18 anos
}