const prompt = require("prompt-sync")();
//INÍCIO
console.log(`Saudações usuário! Bem-vindo ao jogo de Pedra, Papel e Tesoura!`);
console.log();

//VARIÁVEIS UTILIZADAS NO CÓDIGO
let rodadas;
let escolha;
let escolhaPC;
const jogada = ["PEDRA", "PAPEL", "TESOURA"];

while (true) {
  //VARIÁVEIS DE VITÓRIA, DERROTA E EMPATE FORAM INSERIDAS DENTRO DO FOR COM O OBJETIVO 
  let der = 0;
  let vit = 0;
  let emp = 0;

  rodadas = +prompt(`Informe o numero de rodadas: `);

  for (let cont = 1; cont <= rodadas; cont++) {
    //COMANDO PARA GERAR ESCOLHA DO COMPUTADOR DENTRO DO ARRAY
    escolhaPC = jogada[Math.floor(Math.random() * jogada.length)];
    console.log();

    console.log(`Rodada numero ${cont}`);
    console.log();

    escolha = prompt(`Usuario, faça sua jogada: `).toUpperCase();
    console.log();

    //ESTRUTURA CONDICIONAL QUE IRÁ VERIFICAR A ESCOLHA DO JOGADOR E A DO PC E CONTABILIZAR A PONTUAÇÃO AO RESULTADO FINAL DE CADA RODADA.

    if (escolha == jogada[0]) {
      if (escolhaPC == jogada[0]) {
        emp++;
        console.log(`Empate.`);
      } else if (escolhaPC == jogada[1]) {
        der++;
        console.log(`Que pena, você perdeu.`);
      } else {
        vit++;
        console.log(`Você venceu essa rodada, parabéns!`);
      }
    }

    if (escolha == jogada[1]) {
      if (escolhaPC == jogada[1]) {
        emp++;
        console.log(`Empate.`);
      } else if (escolhaPC == jogada[2]) {
        der++;
        console.log(`Que pena, você perdeu.`);
      } else {
        vit++;
        console.log(`Você venceu essa rodada, parabéns!`);
      }
    }

    if (escolha == jogada[2]) {
      if (escolhaPC == jogada[2]) {
        emp++;
        console.log(`Empate.`);
      } else if (escolhaPC == jogada[0]) {
        der++;
        console.log(`Que pena, você perdeu.`);
      } else {
        vit++;
        console.log(`Você venceu essa rodada, parabéns!`);
      }
    }

    //PLACAR INFORMANDO O NÚMERO DE VITÓRIA DO USUÁRIO, SUAS DERROTAS, QUE TAMBÉM SÃO VITÓRIAS PARA O COMPUTADOR E EMPATES.

    console.log();
    console.log("Placar");
    console.log();
    console.log(`Usuário: ${vit} // Computador: ${der} // Empates: ${emp}`);
  }//FIM DO "FOR"
    
  //ESTRUTURA CONDICIONAL QUE IRÁ VALIDAR O NÚMERO DE DERROTAS, VITÓRIAS E EMPATES PARA DETERMINAR A PONTUAÇÃO FINAL E O CAMPEÃO.

    if (vit > der && vit > emp) {
      console.log(`Parabéns usuario, voce foi o campeão!`);
    } else if (der > vit && der > emp) {
      console.log(`O computador venceu, boa sorte na próxima.`);
    } else emp > vit && emp > der;{
      console.log(`O jogo empatou.`);
    }

  
  //PERGUNTA FINAL PARA O USUÁRIO, SE DESEJA VOLTAR A JOGAR, SE SIM, SERÁ FEITA NOVA PERGUNTA PARA O NÚMERO DE RODADAS QUE DESEJA.
  let quest = prompt(`Jogar novamente?  `).toUpperCase();
  if (quest == "nao") break;
}
