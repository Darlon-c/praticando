const studentName = document.getElementById("studentName");
const studentAge = document.getElementById("studentAge");
const registerStudent = document.getElementById("registerStudent");
const result = document.getElementById("result");

let listOfStudents = [];

function addStudent() {
  if (studentName.value === "") {
    alert("Informe o nome do aluno");
    return;
  } else if (studentAge.value === "") {
    alert("Informe a idade do aluno");
    return;
  }

  const student = {
    name: studentName.value,
    age: Number(studentAge.value),
  };

  listOfStudents.push(student);

  studentAge.value = "";
  studentName.value = "";
}

function renderStudents() {
  
}



registerStudent.addEventListener("click", addStudent);
