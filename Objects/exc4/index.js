// Usando o mesmo array pets, descubra:
//  * Qual pet tem a maior idade
//  * Mostre o nome e a idade dele

const pets = [
  { name: "Rex", age: 5 },
  { name: "Mia", age: 2 },
  { name: "Thor", age: 7 },
]

let oldPet = pets[0]

for(let i = 0; i<pets.length; i++) {
  if(pets[i].age > oldPet.age) {
    oldPet = pets[i]
 
  }
}
console.log(`O pet mais velho é ${oldPet.name} - ${oldPet.age}`)