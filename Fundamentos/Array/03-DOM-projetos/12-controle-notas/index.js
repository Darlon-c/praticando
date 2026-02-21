// Controle de Notas
// Objetivos:
// * Inserir notas (0 a 10)
// * Guardar no array
// Mostrar:
//  * média
//  * aprovados (>=7)
//  * reprovados (<7)

const notes = document.getElementById("notes");
const submitInput = document.getElementById("submitInput");
const showNotes = document.getElementById("showNotes");
const media = document.getElementById("media");
const showApproved = document.getElementById("showApproved");
const showReproved = document.getElementById("showReproved");

let allNotes = [];

submitInput.addEventListener("click", function () {
  const value = Number(notes.value);
  if (value >= 0 && value <= 10 && !isNaN(value)) {
    allNotes.push(value);
  }

  notes.value = "";
});

showNotes.addEventListener("click", function () {
  let sum = 0;
  let approved = [];
  let reproved = [];

  for (let i = 0; i < allNotes.length; i++) {
    sum += allNotes[i];

    if (allNotes[i] >= 7) {
      approved.push(allNotes[i]);
    } else {
      reproved.push(allNotes[i]);
    }
  }

  let mediaFinal = sum / allNotes.length;

  media.innerText = `Média: ${mediaFinal.toFixed(2)}`;
  showApproved.innerText = `Aprovados: ${approved}`;
  showReproved.innerText = `Reprovados: ${reproved}`;
});
