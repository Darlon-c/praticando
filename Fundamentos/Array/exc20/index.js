const employees = [
  { name: "Joao", salary: 2500, department: "TI" },
  { name: "Maria", salary: 4000, department: "RH" },
  { name: "Carlos", salary: 3200, department: "TI" },
  { name: "Ana", salary: 2800, department: "Financeiro" },
  { name: "Pedro", salary: 5000, department: "TI" },
];

const departaments = employees.reduce((acc, employee) => {
  if (!acc[employee.department]) {
    acc[employee.department] = 0;
  }
  acc[employee.department]++;
  return acc;
}, {});

console.log(departaments);
