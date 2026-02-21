const employees = [
  { name: "Joao", salary: 2500, department: "TI" },
  { name: "Maria", salary: 4000, department: "RH" },
  { name: "Carlos", salary: 3200, department: "TI" },
  { name: "Ana", salary: 2800, department: "Financeiro" },
  { name: "Pedro", salary: 5000, department: "TI" },
];

const person = employees
  .filter((name) => name.department === "TI")
  .reduce((acc, employee) => {
    return acc.salary > employee.salary ? acc : employee;
  }).name;

console.log(person);
