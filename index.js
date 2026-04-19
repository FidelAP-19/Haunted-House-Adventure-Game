import Player from "./player.js";
import { askQuestion, printSlowly } from "./utils.js";
import { startGame } from "./game.js";

async function main() {
  await printSlowly("👻 Haunted House Adventure");
  const nameInput = await askQuestion("What is your name, brave explorer? ");
  const name = nameInput.trim() || "Explorer";
  const player = new Player(name);

  await startGame(player);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
