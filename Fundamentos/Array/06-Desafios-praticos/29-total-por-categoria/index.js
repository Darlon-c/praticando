const sales = [
  { product: "Notebook", category: "Eletrônico", total: 3000 },
  { product: "Mouse", category: "Eletrônico", total: 100 },
  { product: "Camisa", category: "Vestuário", total: 150 },
  { product: "Calça", category: "Vestuário", total: 200 },
  { product: "TV", category: "Eletrônico", total: 2500 },
];

const result = sales.reduce((acc, departaments) => {
  if (!acc[departaments.category]) {
    acc[departaments.category] = 0;
  }
  acc[departaments.category] =
    (acc[departaments.category] || 0) + departaments.total;
  return acc;
}, {});

console.log(result);
