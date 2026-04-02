const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Array com os níveis e seus respectivos XPs mínimos
const niveis = [
  { nome: "Ferro", xpMin: 0 },
  { nome: "Bronze", xpMin: 1001 },
  { nome: "Prata", xpMin: 2001 },
  { nome: "Ouro", xpMin: 5001 },
  { nome: "Platina", xpMin: 10001 },
  { nome: "Diamante", xpMin: 20001 },
  { nome: "Mestre", xpMin: 50001 },
  { nome: "Grão Mestre", xpMin: 100001 },
  { nome: "Lendário", xpMin: 200001 }
];

function determinarNivel(xp) {
  // Loop para encontrar o nível correto
  for (let i = niveis.length - 1; i >= 0; i--) {
    if (xp >= niveis[i].xpMin) {
      return niveis[i].nome;
    }
  }
  return "Ferro"; // Caso não encontre, retorna Ferro
}

function perguntarHeroi() {
  rl.question("Digite seu nome (ou 'sair' para encerrar): ", (nome) => {
    if (nome.toLowerCase() === 'sair') {
      console.log("Programa encerrado!");
      rl.close();
      return;
    }

    function perguntarXP() {
      rl.question("Digite sua experiência: ", (xpStr) => {
        let xp = parseInt(xpStr);

        if (isNaN(xp) || xp < 0) {
          console.log("Por favor, digite um número válido para experiência.");
          perguntarXP(); // Loop recursivo para validação
          return;
        }

        let nivel = determinarNivel(xp);
        console.log("O heroi de nome " + nome + ", está no nivel " + nivel);

        // Loop para perguntar novamente
        perguntarHeroi();
      });
    }

    perguntarXP();
  });
}

// Inicia o programa
perguntarHeroi(); 