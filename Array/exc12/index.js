// Sistema de Notas de Alunos
// Criar um programa que analise as notas de uma turma e gere um pequeno relatório.

const notes = [8.5, 7.0, 9.2, 6.5, 5.0, 10, 4.8, 7.9];

let noteTotal = 0;
let approved = [];
let reproved = [];



for (let i = 0; i < notes.length; i++) {
  noteTotal += notes[i];

  if (notes[i] >= 7) {
    approved.push(notes[i]);
  } else {
    reproved.push(notes[i]);
  }
}
let mediaNote = noteTotal / notes.length;

console.log(`A soma de todas as notas é: ${noteTotal.toFixed(2)}`);
console.log(`A média das notas é: ${mediaNote.toFixed(2)}`);
console.log("================================");

let highestGrade = notes[0];
let lowestGrade = notes[0];

for (let j = 0; j < notes.length; j++) {
  if (highestGrade < notes[j]) {
    highestGrade = notes[j];
  }

  if (lowestGrade > notes[j]) {
    lowestGrade = notes[j];
  }
}

console.log("================================");
console.log(`A maior nota é: ${highestGrade}`);
console.log(`A menor nota é: ${lowestGrade}`);
console.log("================================");
console.log(`Aprovados: ${approved}`);
console.log(`Reprovados: ${reproved}`);
console.log("================================")
console.log(`Total de alunos: ${approved.length + reproved.length}`)
console.log(`Total de alunos aprovados: ${approved.length}`)
console.log(`Total de alunos reprovados: ${reproved.length}`)

if(mediaNote >= 7) {
  console.log('Turma aprovada!')
} else {
  console.log('Turma reprovada')
}
