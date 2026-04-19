import scenes from "./scenes.js";
import { askQuestion, printSlowly } from "./utils.js";

async function chooseNextScene(scene) {
  while (true) {
    const answer = await askQuestion("\nChoose an option number: ");
    const selected = Number.parseInt(answer.trim(), 10);

    if (!Number.isNaN(selected) && selected >= 1 && selected <= scene.choices.length) {
      return scene.choices[selected - 1].nextScene;
    }

    await printSlowly("That is not a valid choice. Try again.");
  }
}

async function startGame(player) {
  let currentSceneId = "entrance";

  await printSlowly(`\nWelcome, ${player.name}. Your adventure begins...\n`);

  while (true) {
    const scene = scenes[currentSceneId];

    if (!scene) {
      throw new Error(`Unknown scene id: ${currentSceneId}`);
    }

    await printSlowly(scene.description);

    if (scene.id === "escape") {
      await printSlowly("You win!");
      break;
    }

    if (scene.id === "death") {
      player.takeDamage(100);
      await printSlowly("Game over.");
      break;
    }

    await printSlowly(`Health: ${player.health}`);
    await printSlowly(
      `Inventory: ${player.inventory.length ? player.inventory.join(", ") : "empty"}`
    );

    scene.choices.forEach((choice, index) => {
      process.stdout.write(`${index + 1}. ${choice.text}\n`);
    });

    currentSceneId = await chooseNextScene(scene);
  }
}

export { startGame };
