export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Персонаж уже в команде');
    } else {
      this.members.add(character);
    }
  }

  addAll(...units) {
    units.forEach((unit) => {
      this.members.add(unit);
    });
  }

  toArray() {
    return [...this.members];
  }
}
