class Player {
  constructor(name) {
    this.name = name;
    this.health = 100;
    this.inventory = [];
  }

  takeDamage(amount) {
    this.health = Math.max(0, this.health - amount);
  }

  addItem(item) {
    if (!this.inventory.includes(item)) {
      this.inventory.push(item);
    }
  }

  isAlive() {
    return this.health > 0;
  }
}

export default Player;
