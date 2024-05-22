// let minhaLista = ['Eros', 'Netto', 'Antunes'];
// let minhaLista = [];

// for (let i = 0; i <= 20; i++) {
//   minhaLista.push(`Teste ${i}`);
// }
// let i = 0;

// minhaLista.forEach((list) => {
//   console.log(`${i} - ${list}`);
//   i++;
// });

let diasDaSemana = [];

diasDaSemana.push("Domingo");
diasDaSemana.push("Segunda-feira");
diasDaSemana.push("Terça-feira");
diasDaSemana.push("Quarta-feira");
diasDaSemana.push("Quinta-feira");
diasDaSemana.push("Sexta-feira");
diasDaSemana.push("Sábado");

// diasDaSemana.forEach((dia) => {
//   console.log(dia);
// });

// console.log(`Dia especifico: ${diasDaSemana[3]}`);

// console.log("\n");

// hufehoufhuehf

// function removeDia(diaRemove) {
//   if (diasDaSemana.indexOf(diaRemove)) {
//     diasDaSemana.splice(diasDaSemana.indexOf(diaRemove), 1);
//     console.log(`Dias removido: ${diaRemove}\n`);
//   }
// }

// removeDia("Domingo");
// // removeDia("Sábado");
// // removeDia("Terça-feira");

// diasDaSemana.forEach((dia) => {
//   console.log(`${diasDaSemana.indexOf(dia)} - ${dia}`);
// });

// Tarefa

// function verificaSeEscreve(nota) {
//   if (nota) {
//     return false;
//   } else {
//     return true;
//   }
// }

const perguntarNotas = () => {
  let notas = [];

  notas.push(Number(prompt("Digite a primeira nota: ")));
  notas.push(Number(prompt("Digite a segunda nota: ")));
  notas.push(Number(prompt("Digite a terceira nota: ")));
  notas.push(Number(prompt("Digite a quarta nota: ")));

  let media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

  console.log(`Array de notas: ${notas}`);
  console.log(`A media: ${media.toFixed(1)}`);
  console.log(`Nota mais alta: ${Math.max(...notas).toFixed(1)}`);
  alert(
    `Array de notas: ${notas}\nA media: ${media.toFixed(
      1
    )}\nNota mais alta: ${Math.max(...notas).toFixed(1)}`
  );

  if (confirm("Gostaria de tentar de novo?")) {
    console.clear();
    perguntarNotas();
  }
};

perguntarNotas();
