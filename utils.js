import readline from "node:readline";

function printSlowly(text, delay = 15) {
  return new Promise((resolve) => {
    let index = 0;

    function typeNext() {
      if (index >= text.length) {
        process.stdout.write("\n");
        resolve();
        return;
      }

      process.stdout.write(text[index]);
      index += 1;
      setTimeout(typeNext, delay);
    }

    typeNext();
  });
}

function askQuestion(query) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(query, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

export { printSlowly, askQuestion };
