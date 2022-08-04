// PROJETO FINAL DO MÓDULO 1

const prompt = require("prompt-sync")();

//Listas e variáveis-----------------------------------------------------------------------------------------------------

// Lista de perguntas

const intros = [
  "Antes de partir, Bill te aconselhou a tratar Pai Mei com absoluto respeito e não demonstrar, nem mesmo no olhar, nenhuma arrogância ou petulância.\n\n",
  "Hoje seu treino será subir e descer a enorme escadaria do templo carregando dois baldes cheios de água.\n\n",
  "O treinamento de hoje será quebrar a madeira com um soco.\n\n",
  "O aprendizado de hoje será o uso da espada. Ótima oportunidade para aumentar seu status.\n\n",
  "Hoje será o treino de meditação. Você vai aprender a meditar como um grande mestre.\n\n",
];

const questions = [
  "==> Você aceita o conselho de Bill de não tratar Pai Mei com arrogância ou petulância? Digite 's' para sim ou 'n' para não: ",
  "==> Está disposta a cumprir essa tarefa? Digite 's' ou 'n':",
  "==> Você vai socar a madeira com suas próprias mãos? Digite 's' ou 'n': ",
  "==> Você quer se arriscar a usar uma espada? Digite 's' ou 'n': ",
  "==> Você quer aprender a meditar e se dedicar por horas? ",
];

// Lista de reações às perguntas
const response = [
  "\n\n>>> Você foi sábia ao aceitar o conselho de Bill. Parabéns! Aumentou seu status. <<<\n\n",
  "\n\n>>> Você provou que está disposta a desenvolver sua força mental e física. Seu status aumentou. <<<\n\n",
  "\n\n>>> Você foi muito bem. Aumentou seus atributos físicos e mentais <<<\n\n",
  "\n\n>>> Você aprendeu direitinho. Ganhou mais pontos em seus atributos <<<\n\n",
  "\n\n>>> Você aprendeu a dominar sua mente. Seu status cresceu exponencialmente <<<\n\n",
];

const negative = [
  "\n\n>>> Você não foi sábia ao rejeitar o conselho de Bill. Perdeu pontos no seu status! <<<\n\n",
  "\n\n>>> Você desistiu antes de começar. Não vai chegar até o final. <<<\n\n",
  "\n\n>>> Você é um fiasco. Melhor ir embora. <<<\n\n",
  "\n\n>>> Você está cada vez mais fraca. Pare de treinar. <<<\n\n",
  "\n\n>>> Você é incapaz de dominar sua mente. Desista e suma daqui. <<<\n\n",
];

// >>>>> variáveis para armazenar Status do Personagem <<<<<
let forceDay = 0;
let abilityDay = 0;
let wisdowDay = 0;
let resistanceDay = 0;
// >>>>>> Variável para controle da passagem do tempo <<<<<<<<
let td = 0;
let newgame = 0;

// Textos-----------------------------------------------------------------------------------------------------------------

let background = `\n\n\tO TREINAMENTO CRUEL DE PAI MEI\n\t------------------------------\n
Você é 'a noiva' Beatrix Kiddo, personagem do filme Kill Bill.
Para aprimorar sua técnica de luta, você é levada por Bill para conhecer um novo mestre, Pai Mei.
Pai Mei é o grande sacerdote do Clã do Lótus Branco, um mestre cruel e um guerreiro implacável.
Você foi aceita como aprendiz do mestre Pai Mei e seu objetivo é vencer a luta final contra o 'lutador X'.
Para ter mais oportunidades de vencer, você precisa aumentar os seguintes atributos pessoais:
  \n\t[1] Força
  \n\t[2] Habilidade
  \n\t[3] sabedoria
  \n\t[4] Resistência\n`;

let screenStatusAttributes = `\n\n\tSTATUS ATUAL\n\t------------\n
  \tAntes de começar seu treinamento, esse são seus atributos.\n\n`;

// FUNÇÕES----------------------------------------------------------------------------------------------------------------

function combate() {
  const description = `\n\t>>>>>>>> VAI COMEÇAR O COMBATE! <<<<<<<<
\n\t As regras são:
\n\t - ataque ganha da magia, mas perde para defesa;
\n\t - magia ganha da defesa, mas perde para o ataque;
\n\t - defesa ganha do ataque, mas perde para magia.`;

  const text1 = `\n\n\tFaça sua escolha: digite ataque, defesa ou magia:\n\n`;
  const options = ["ataque", "defesa", "magia"];
  let pc = 0;
  let min = 0;
  let max = 3;
  let choicePlayer = [];
  let pointsPlayer = [];
  let pointsPc = [];
  let roundsCont = [];

  // Description-----------------------------------------------------------------------------

  console.clear();
  console.log(description);
  prompt(`\n\n\tPressione ENTER para começar: `);
  console.clear();

  // Definição do número de rodadas---------------------------------------------------------

  let roundsNum = media;
  console.log(
    `Seu status de treinamento permite que você lute por ${media} rodada(s). `
  );

  console.log(
    `\n\n>>>>>>>> Prepare-se para lutar ${roundsNum} rodada(s)! <<<<<<<<\n\n`
  );
  prompt(`Pressione ENTER para continuar: `);
  console.clear();

  // Definição da quantidade de rodadas--------------------------------------------------

  for (let round = 0; round < roundsNum; round++) {
    roundsCont.push("1");

    //Escolha do oponente--------------------------------------------------------------------

    min = Math.ceil(min);
    max = Math.floor(max);
    pc = Math.floor(Math.random() * (max - min)) + min;
    let choicePc = options[pc];

    // Escolha do jogador-------------------------------------------------------------------

    console.log(`\n\tRODADA ` + roundsCont.length + text1);
    choicePlayer = prompt().trim();
    console.clear();

    while (!options.includes(choicePlayer)) {
      console.log(
        `\n'${choicePlayer}' não é uma escolha válida. Digite uma das opções exatamente como está escrito abaixo e em minúsculas: \n\n- 'ataque', \n\n- 'defesa', \n\n- 'magia'.\n\n`
      );
      console.log(`Digite novamente: \n\t`);
      choicePlayer = prompt();
    }
    console.clear();

    // Exibir escolha do jogador e do oponente----------------------------------------------

    console.log(`\n\tVocê escolheu ${choicePlayer}.`);
    console.log(`\n\tSeu oponente escolheu ${choicePc}.\n\n`);
    console.log("RESULTADO:");

    //Resultado-------------------------------------------------------------------------------

    if (choicePlayer == "ataque") {
      if (choicePc == "ataque") {
        console.log(
          `\n\tAtaque com ataque.\n\n\tVocê empatou com seu oponente.\n\n`
        );
      } else if (choicePc == "defesa") {
        console.log(
          `\n\tDefesa venceu o ataque. \n\n\tVocê perdeu esta rodada!\n\n`
        );
        pointsPc.push("1");
      } else if (choicePc == "magia") {
        console.log(
          `\n\tO ataque venceu a magia. \n\n\tVocê ganhou esta rodada!\n\n`
        );
        pointsPlayer.push("1");
      }
    } else if (choicePlayer == "defesa") {
      if (choicePc == "defesa") {
        console.log(
          `\n\tDefesa com defesa.\n\n\tVocê empatou com seu oponente.\n\n`
        );
      } else if (choicePc == "ataque") {
        console.log(
          `\n\tDefesa venceu o ataque.\n\n\tVocê ganhou esta rodada!\n\n`
        );
        pointsPlayer.push("1");
      } else if (choicePc == "magia") {
        console.log(
          `\n\tA magia venceu a defesa.\n\n\tVocê perdeu esta rodada!\n\n`
        );
        pointsPc.push("1");
      }
    } else if (choicePlayer == "magia") {
      if (choicePc == "magia") {
        console.log(
          `\n\tMagia contra magia.\n\n\tVocê empatou com seu oponente.\n\n`
        );
      } else if (choicePc == "ataque") {
        console.log(
          `\n\tO ataque venceu a magia.\n\n\tVocê perdeu esta rodada!\n\n`
        );
        pointsPc.push("1");
      } else if (choicePc == "defesa") {
        console.log(
          `\n\tA magia venceu a defesa.\n\n\tVocê ganhou esta rodada!\n\n`
        );
        pointsPlayer.push("1");
      }
    }

    //Placar-------------------------------------------------------------------------------------------------
    console.log(`Você marcou ${pointsPlayer.length} ponto(s).`);
    console.log(`Seu oponente marcou ${pointsPc.length} ponto(s).`);
    prompt(`\nPressione ENTER para continuar: `);
    console.clear();
  }
  // Quantas rodadas ganhas---------------------------------------------------------------------------------

  console.log(`Você ganhou ${pointsPlayer.length} rodada(s).`);
  console.log(`Seu oponente ganhou ${pointsPc.length} rodada(s).`);

  //Determinar o grande vencedor do combate--------------------------------------------------------------------

  if (pointsPlayer.length > pointsPc.length) {
    console.log(
      `\n\t>>>>>>>> YOU WINS!!!! <<<<<<<<\n\nVocê venceu o combate! Se mostrou uma digna discípula do Pai Mei!!!!\n\n`
    );
  } else if (pointsPlayer.length == pointsPc.length) {
    console.log(`\n\tEMPATE!! - o combate terminou empatado!\n\n`);
  } else if (pointsPlayer.length < pointsPc.length) {
    console.log(`\n\tSeu oponente venceu o combate. Sorte na próxima vez!\n\n`);
  }
}
console.log(`\n\tFim do combate. Até a próxima!\n\n`);

// Função para perguntas que alteram o Status do personagem

function quest() {
  let r = 0;
  while (r < 1) {
    let resposta = prompt(questions[td]).trim().toUpperCase();
    if (resposta == "S") {
      console.clear();
      console.log(response[td]);
      pt++;
      r++;
    } else if (resposta == "N") {
      console.clear();
      console.log(negative[td]);
      pt--;
      r++;
    } else if (resposta != "S" || resposta != "N") {
      console.clear();
      console.log(`\n\n\t --> Digite somente "s" ou "n"!<--\n\n `);
    }
  }
}

// Função para calcular media do Status
function statusMedia(a, b, c, d) {
  const calcStatusMedia = parseInt((a + b + c + d) / 4) / 13;
  return calcStatusMedia;
}

// Função para calculo de pontos
function points() {
  forceDay = pt + forceDay;
  abilityDay = pt + abilityDay;
  wisdowDay = pt + wisdowDay;
  resistanceDay = pt + resistanceDay;
}

// OBJETOS

// Objeto Status do jogador

const kiddo = {
  force: 0,
  ability: 0,
  wisdow: 0,
  resistance: 0,
  trainingDay: 0,

  // Métodos para aumento de Status

  forceSum: function () {
    return (this.force = this.force + forceDay);
  },

  abilitySum: function () {
    return (this.ability = this.ability + abilityDay);
  },

  wisdowSum: function () {
    return (this.wisdow = this.wisdow + wisdowDay);
  },

  resistanceSum: function () {
    return (this.resistance = this.resistance + resistanceDay);
  },

  // Método para controle da passagem do tempo

  day: function () {
    this.trainingDay++;
  },
};

// Console ---------------------------------------------------------------------------------------------------------------

while (true) {
  // Introdução

  console.clear();
  console.log(background);
  prompt(
    `\n  => Pressione ENTER para ver o status atual dos seus atributos: \n\n`
  );
  console.clear();

  //Tela de Status dos atributos
  console.log(screenStatusAttributes);
  kiddo.forceSum();
  kiddo.abilitySum();
  kiddo.wisdowSum();
  kiddo.resistanceSum();
  console.log(` \tSua força é ${kiddo.force};`);
  console.log(` \n\tSua habilidade é ${kiddo.ability};`);
  console.log(` \n\tSua sabedoria é ${kiddo.wisdow};`);
  console.log(` \n\tSua resistência é ${kiddo.resistance};`);
  prompt(`\n\n\t=> Pressione ENTER para continuar: \n\n`);
  console.clear();

  //Dia do treinamento -------------------------------------------------------------
  pt = 0;

  while (td < 5) {
    console.log(`>>>> Dia de treinamento ${td} <<<<\n\n`);
    console.log(intros[td]);

    quest();

    points();

    kiddo.forceSum();
    kiddo.abilitySum();
    kiddo.wisdowSum();
    kiddo.resistanceSum();

    console.log(`\n\n\nSTATUS ATUAL\n`);
    console.log(`Você treinou ${kiddo.trainingDay} dia(s).`);
    console.log(`Sua força é ${kiddo.force}`);
    console.log(`Sua habilidade é ${kiddo.ability}`);
    console.log(`Sua sabedoria é ${kiddo.wisdow}`);
    console.log(`Sua resistência é ${kiddo.resistance}`);

    kiddo.day();
    td = kiddo.trainingDay;

    prompt(`\n\n\t=> Pressione ENTER para continuar: \n\n`);
    console.clear();
  }

  var media = statusMedia(
    kiddo.force,
    kiddo.ability,
    kiddo.wisdow,
    kiddo.resistance
  ).toFixed(0);

  if (pt < 5) {
    console.log(
      `\n\nVocê não treinou o bastante para o combate. Treine novamente se quiser enfrentar o lutador X\n\n`
    );
    break;
  } else {
    console.log(
      `Você está pronta. Você treinou o suficiente para lutar ${media} rounds contra o lutador X`
    );
    prompt(`\n\n\t=> Pressione ENTER para continuar: \n\n`);
    combate();
  }

  newgame = prompt(`Digite qualquer tecla para encerrar o jogo: `)
    .trim()
    .toUpperCase();

  if (newgame != "SIM") {
    break;
  }
}

console.log(`\n\tFim do Jogo. Até a próxima!\n\n`);