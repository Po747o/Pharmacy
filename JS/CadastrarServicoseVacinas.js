const inputs = document.querySelectorAll("[required]");



const botao = document.querySelector("#btnSalvar");


inputs.forEach((elemento) =>{
    console.log(elemento);
    elemento.addEventListener("blur",(evento)=>{
        console.log(evento);
        
        validaCampo(evento.target);    
        validaCPF(evento.target);  
    })
    
});



botao.addEventListener("click",(evento)=>{
      
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


function validaCampo(campo) {
    const msnErro = campo.parentNode.querySelector("[data-erro]");
       
    
    switch (campo.name)
    {
        case 'nome'  :
            if(campo.value.length<15) {
                msnErro.textContent = "Digite o nome do serviço!";
            }
            else {
                msnErro.textContent = "";
                
            }

            break

           
          case 'fabricante':

          if(campo.value.length<15) {
            msnErro.textContent = "Digite o nome do fabricante do serviço(Em caso de vacinas e testes fabricados)!";
        }
        else {
            msnErro.textContent = "";
            
        }
  
          break

        case 'duracao' :

            
            
    
            if(campo.value.length < 8 ) {
                msnErro.textContent = "Digite a duracao do serviço(00:00:00)!";
            }
            else {
                msnErro.textContent = "";
                
            }

            break

            case 'valor':
                var valor = campo.value;
            
            
    
                if(!((valor.includes("R$") && valor.includes(",")) )) {
                    msnErro.textContent = "Digite a valor do serviço(R$00,00)!";

                }

            else {
                   msnErro.textContent = "";
               }

               break

               case 'tipo':

               if(campo.value.length < 8 ) {
                msnErro.textContent = "Digite o tipo do serviço!";
            }
            else {
                msnErro.textContent = "";
                
            }
           
               break

               case 'local':
                
               if(campo.value.length < 6 ) {
                msnErro.textContent = "Digite o local que o serviço é realizado!";
            }
            else {
                msnErro.textContent = "";
                
            }
             break

             case 'profissional':
     
             if(campo.value.length < 6 ) {
                msnErro.textContent = "Digite o profissional que pode realizar o serviço!";
            }
            else {
                msnErro.textContent = "";
                
            }
             break

             case 'quant':
    
        }
 
}
