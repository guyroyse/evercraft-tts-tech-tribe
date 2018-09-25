const Attack = require('../attack');

describe("Attack", function() {

  let subject, attacker, defender;
  let result;

  beforeEach(function() {
    attacker = {};
    defender = {
      armorClass: 12,
      damage: jasmine.createSpy('damage')
    };
    subject = new Attack(attacker, defender);
  });

  describe("when attack will succeed", function() {

    beforeEach(function() {
      result = subject.resolve(15);
    });

    it("it hits", function() {
      expect(result).toBe(true);
    });

    it("does a point of damage to the defender", function() {
      expect(defender.damage).toHaveBeenCalledWith(1);
    });

  });

  describe("when attack will fail", function() {

    beforeEach(function() {
      result = subject.resolve(10);
    });

    it("it misses", function() {
      expect(result).toBe(false);
    });

    it("does no damage to the defender", function() {
      expect(defender.damage).not.toHaveBeenCalled();
    });

  });

  describe("when attack will just succeed", function() {

    beforeEach(function() {
      result = subject.resolve(12);
    });

    it("it hits", function() {
      expect(result).toBe(true);
    });

    it("does a point of damage to the defender", function() {
      expect(defender.damage).toHaveBeenCalledWith(1);
    });

  });

  describe("when attack will critical", function() {

    beforeEach(function() {
      result = subject.resolve(20);
    });

    it("it hits", function() {
      expect(result).toBe(true);
    });

    it("does two points of damage to the defender", function() {
      expect(defender.damage).toHaveBeenCalledWith(2);
    });

  });

});