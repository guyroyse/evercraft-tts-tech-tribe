class Hero {
  constructor() {
    this._name = '';
    this._alignment = 'NEUTRAL';
    this._damage = 0;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get alignment() {
    return this._alignment;
  }

  set alignment(value) {
    if (['GOOD', 'NEUTRAL', 'EVIL'].includes(value)) {
      this._alignment = value;
    } else {
      throw `Alignment cannot be '${value}'`;
    }
  }

  get armorClass() {
    return 10;
  }

  get hitPoints() {
    return 5 - this._damage;
  }

  get isAlive() {
    return this.hitPoints > 0;
  }

  damage(points) {
    this._damage += points;
  }
}

module.exports = Hero;
