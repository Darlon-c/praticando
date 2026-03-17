const language = "sdubaobroasuyeobnlbnvyas";
const vowel = ["a", "e", "i", "o", "u"];
let count = 0;

let vowelsFound = []

for (let i = 0; i < language.length; i++) {
  if (vowel.includes(language[i])) {
    vowelsFound.push(language[i])
    count++;
  }
}
console.log(count);
console.log(vowelsFound)