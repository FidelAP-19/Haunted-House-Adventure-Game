const scenes = {
  entrance: {
    id: "entrance",
    description:
      "You stand before a creaking Victorian mansion. The front door is ajar, and cold air drifts out.",
    choices: [{ text: "Step inside", nextScene: "hallway" }],
  },
  hallway: {
    id: "hallway",
    description:
      "The hallway is lined with cracked portraits. A staircase groans overhead as if someone moved upstairs.",
    choices: [
      { text: "Enter the library", nextScene: "library" },
      { text: "Head down to the basement", nextScene: "basement" },
      { text: "Climb to the attic", nextScene: "attic" },
    ],
  },
  library: {
    id: "library",
    description:
      "Dusty shelves hide a loose book. You pull it, and a hidden door clicks open to moonlit fresh air.",
    choices: [
      { text: "Slip through the hidden exit", nextScene: "escape" },
      { text: "Return to the hallway", nextScene: "hallway" },
    ],
  },
  basement: {
    id: "basement",
    description:
      "The basement smells of damp earth. A shadow lunges from the dark and the stairs collapse behind you.",
    choices: [{ text: "Scream into the darkness", nextScene: "death" }],
  },
  attic: {
    id: "attic",
    description:
      "You find a locked window and a rusted key on a trunk. The wind outside whispers your name.",
    choices: [
      { text: "Use the key and climb out", nextScene: "escape" },
      { text: "Back away to the hallway", nextScene: "hallway" },
    ],
  },
  escape: {
    id: "escape",
    description:
      "You burst into the night air as the house slams shut behind you. You survived the haunted house!",
    choices: [],
  },
  death: {
    id: "death",
    description:
      "The darkness swallows your last breath. The haunted house claims another soul.",
    choices: [],
  },
};

export default scenes;
