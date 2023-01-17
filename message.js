const first_part = [
  "Today is a good day for",
  "Do not forget to",
  "You are never to old to",
  "Always",
  "Now",
  "It is a new day for",
];
const second_part = [
  "be corageous,",
  "keep your face up,",
  "fight for your dreams,",
  "spread love,",
  "breathe,",
  "believe,",
  "be kind,",
  "let your light shine,",
  "be thankful,",
];
const thrid_part = [
  "everything will be fine!",
  "you are going to get it!",
  "do not stop!",
  "kepp it up!",
  "you are doing it great!",
  "stay focus!",
];
const newQuote = [];

function randomNumber(length) {
  return Math.floor(Math.random() * length);
}

function quote() {
  let n = randomNumber(first_part.length);
  newQuote.push(first_part[n]);
  n = randomNumber(second_part.length);
  newQuote.push(second_part[n]);
  n = randomNumber(thrid_part.length);
  newQuote.push(thrid_part[n]);
}

quote();
console.log(newQuote.join(" "));
