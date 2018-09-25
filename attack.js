class Attack {
  constructor(attacker, defender) {
    this._defender = defender;
  }
  resolve(roll) {
    let hit = roll >= this._defender.armorClass;
    let critical = roll === 20;
    if (critical) {
      this._defender.damage(2);
    } else if (hit) {
      this._defender.damage(1);
    }
    return hit;
  }
}

module.exports = Attack;