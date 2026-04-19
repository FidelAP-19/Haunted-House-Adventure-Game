# Copilot Instructions for Haunted House Adventure Game

## Build, test, and lint commands

- **Run the game:** `node index.js`
- **Install dependencies:** `npm install` (currently no external dependencies)
- **Test suite status:** `npm test` is a placeholder script that exits with an error (`"no test specified"`).
- **Single-test command:** No automated test runner is configured yet, so there is no per-test command.

## High-level architecture

This project is a small Node.js CLI adventure game split by responsibility:

- `index.js` is the bootstrap entry: asks for player name, creates `Player`, starts the game loop.
- `game.js` runs the interactive loop: render scene text, show numbered choices, read input, transition to next scene.
- `scenes.js` defines the story graph (scene nodes + choice edges).
- `player.js` owns player state and behavior (`name`, `health`, `inventory`, plus methods).
- `utils.js` centralizes CLI helpers (`askQuestion` Promise wrapper for `readline`, and slow-print output helper).

Story flow is graph-driven: scenes reference other scenes by ID through choices. The loop ends when scene ID reaches terminal outcomes (`escape` for win, `death` for lose).

## Key conventions in this codebase

- **Scene shape convention:** each scene should follow `{ id, description, choices }`, where `choices` is an array of `{ text, nextScene }`.
- **Terminal scene IDs are semantic API:** game-ending behavior is keyed specifically off `escape` and `death`; keep these IDs stable unless you also update game-loop termination logic.
- **Separation of concerns:** keep branching narrative data in `scenes.js`, player state logic in `player.js`, and input/output primitives in `utils.js`; `index.js` should remain thin.
- **Async input pattern:** player prompts should go through the shared `askQuestion(...)` Promise helper rather than direct inline `readline` usage.

## Existing project guidance incorporated

The repository’s existing `copilot-intructions.md` and `README.md` establish:

- module responsibilities (`index.js`, `game.js`, `scenes.js`, `player.js`, `utils.js`)
- expected scene set and progression style (entrance/hallway branches leading to escape/death outcomes)
- a dependency-light CLI implementation using Node.js and `readline`.
