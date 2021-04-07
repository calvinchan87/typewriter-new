const sentence = "hello there from lighthouse labs";
let sentenceWithBreak = sentence + "\n";

let count = 0;

for (const char of sentenceWithBreak) {
  count++;
  setTimeout(() => {
  // print the char here
    process.stdout.write(char);
  }, 50 * count);
} // <= 1s delay to make it noticeable. Can dial it down later.