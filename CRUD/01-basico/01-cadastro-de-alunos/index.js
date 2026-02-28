const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const registerStudent = document.getElementById("registerStudent");
const result = document.getElementById("result");
const totalStudent = document.getElementById("totalStudent");

let listOfStudents = [];
let registration = 1;

function addStudent() {
  if (studentName.value === "") {
    alert("Informe o nome do aluno");
    return;
  } else if (studentAge.value === "") {
    alert("Informe a idade do aluno");
    return;
  }

  const student = {
    id: registration,
    name: studentName.value,
    age: Number(studentAge.value),
  };

  listOfStudents.push(student);
  registration++;
  renderStudents();
  console.log(listOfStudents);
  studentAge.value = "";
  studentName.value = "";
}

function renderStudents() {
  const showStudents = listOfStudents.map((students) => {
    return `
      <div>
        <p>Nome: ${students.name} | Idade: ${students.age} | Matrícula: ${students.id}</p>
        <button onclick="removeStudent(${students.id})">Remover</button>
      </div>
    `;
  });

  result.innerHTML = showStudents.join("");
  totalStudent.innerHTML = `Total de alunos: ${listOfStudents.length}`;
}

function removeStudent(id) {
  listOfStudents = listOfStudents.filter((student) => {
    return student.id !== id;
  });

  renderStudents();
  totalStudent.innerHTML = totalStudents;
}

const totalStudents = listOfStudents.reduce((acc, students) => {
  return acc + students;
}, 0);

registerStudent.addEventListener("click", addStudent);
