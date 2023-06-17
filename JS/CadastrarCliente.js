const inputs = document.querySelectorAll("[required]");

const cpf = document.querySelector("#cpf");

const botao = document.querySelector("#btnSalvar");

var valida = 0;

var valida2 = 1;

inputs.forEach((elemento) =>{
    console.log(elemento);
    elemento.addEventListener("blur",(evento)=>{
        console.log(evento);
        
        validaCampo(evento.target);    
        validaCPF(evento.target);  
    })
    
});


cpf.addEventListener("keypress",(evento) =>{

    console.log(evento);
    var  St = evento.which;
  
    console.log(St);


      if(!((St >= 48 && St <= 57) || St === 46 || St === 45)){
        evento.preventDefault()
      }


     
})
botao.addEventListener("click", (evento) =>{
      
    if(valida === 1){
        evento.preventDefault();
        alert("Insira um CPF válido antes de enviar!");
       }

    console.log(valida2);
       if(valida2 === 1){
        evento.preventDefault();
        alert("Selecione um sexo válido antes de enviar!");
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
        console.log('if 0 ativado');

        var cpfArray = cepeefe.split('');
        
        if(cpfArray.length === 11){
            var cont = 0;
            console.log('if 1 ativado');
            for (let i = 0; i < cpfArray.length; i++) {
                if(cpfArray[i] === cpfArray[i+1]){
                  cont += 1;
                  
                }
                
            }

            if(cont < 10){
                console.log('if 2 ativado');
                for (let i = 0; i < 9; i++) {
                    soma +=  parseInt(cpfArray[i]) * (10 - i)
                    
                }
                console.log(soma);

                resto = (soma * 10) % 11
                console.log(resto);
                
                if ((resto == 10) || (resto == 11)){
                    resto = 0;
                    console.log('if 2.1 ativado');
                }
                
                  
                if (resto === parseInt(cpfArray[9])){
                    soma = 0
                    console.log('if 3 ativado');
                    for (let i = 0; i < 10; i++) {
                        soma +=  parseInt(cpfArray[i]) * (11 - i)
                        
                    }
                    resto = (soma * 10) % 11
    
                    if ((resto == 10) || (resto == 11)){
                        resto = 0;
                        console.log('if 3.1 ativado');
                    }

                    if (resto === parseInt(cpfArray[10])){
                        console.log('if 4 ativado');
                        msnErro.textContent = ''
                        valida = 0;
                    }else
                    {
                        console.log('else 4 ativado');
                        msnErro.textContent = 'cpf invalido'
                        valida = 1;
                    }

                    
                }else{
                    console.log('else 3 ativado');
                    msnErro.textContent = 'cpf invalido'
                    valida = 1;
                }

                

            }

            else{
                console.log('else 2 ativado');
                msnErro.textContent = 'cpf invalido'
                valida = 1;
            }
        }else{
            console.log('else 1 ativado');
            msnErro.textContent = 'cpf invalido'
            valida = 1;
        }
    }
   
  else
  {

  }

}


function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");
       
    
    switch (campo.name)
    {
        case 'nome'  :
            if(campo.value.length<5) {
                msnErro.textContent = "Digite o nome completo!";
            }
            else {
                msnErro.textContent = "";
                
            }

            break
            
            //69 99659-6 5  6  5
          //  0123456789 10 11 12
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

        case 'email' :
            var strEmail = campo.value;
            
            
    
           if(!((strEmail.includes("gmail.com") || (strEmail.includes("hotmail.com") ) 
            && strEmail.includes("@")  )))
            {
                msnErro.textContent = "O email deve ter o @ e o provedor de email.";
            }
           
             else {
                msnErro.textContent = "";
            }

            break

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

               case 'sexo':
                
             if(valida2 = 1) {
                valida2 = 0;
             } 

             break

             case 'cep':
     
                 if (!(mask[2] === ' ' && mask[8] === '-')) {
                     msnErro.textContent = "Digite o cep no seguinte formato: 00 00000-0000.";
                 }
                 else {
                     msnErro.textContent = "";
                 }
    
        }
 
}
