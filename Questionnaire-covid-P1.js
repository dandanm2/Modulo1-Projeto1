var prompt = require('prompt-sync')();


let nome = prompt(`Informe seu nome: `);
console.log("");
let text = String ; 
let resultado = text; 

console.log("Teste de Sintomas para Covid - 19");


do{
    if(resultado != "SIM"  && resultado != "NAO"){
        console.log("Apenas aceitamos respostas de SIM e NAO, tente novamente.");
        console.log("");
    }
    text = prompt(`Você aplicou a primeira dose? `);
     resultado = text.toUpperCase();
}while(resultado != "SIM" && resultado != "NAO");

if (resultado == "SIM") {
    
    let cont = 0;
    let r1 = prompt(`Você está com dor de cabeça? `);
    console.log("");
    
    if (r1 == "SIM" || r1 == "sim" ) {
        cont++;
    }
    let r2 = prompt(`Você está com dor de garganta? `);
    console.log("");
    if (r2 == "SIM" || r2 == "sim" ) {
        cont++;
    }
    let r3 = prompt(`Você está com coriza? `);
    console.log("");
    if (r3 == "SIM" || r3 == "sim") {
        cont++;
    }
    let r4 = prompt(`Você está com febre? `);
    console.log("");
    if (r4 == "SIM" || r4 == "sim") {
        cont++;
    }
    let r5 = prompt(`Você está com tosse persistente? `);
    console.log("");
    if (r5 == "SIM" || r5== "sim") {
        cont++;
    }

    if(cont === 2 || cont ===1){
        console.log(`Prezado ${nome} , você está saudável e com poucos sintomas de uma pessoa vacinada, continue seguindo as orientações da OMS.`);
    }else if (cont === 3) {
        console.log(`Prezado ${nome} , você deve permanecer em casa por 10 dias, fique em um quarto arejado e sozinho, se estiver com febre, tome medicamentos antitérmicos,caso os sintomas persistem, favor procurar um médico.`);
    }
    else if (cont === 4) {
        console.log(`Prezado ${nome} , você deve realizar um teste para covid 19. Favor realizar uma consulta para que seu caso seja avaliado.`);
    } 
    else if (cont === 5)
        console.log(`Prezado ${nome} , procure um médico urgente.`);

}   else
console.log(`Agende sua vacina no posto de saúde mais próximo.`);
  

    





   
