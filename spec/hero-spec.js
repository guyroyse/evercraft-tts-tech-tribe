const Hero = require('../hero');

describe("Hero", function() {

  let subject;

  beforeEach(function() {
    subject = new Hero();
  });

  describe("#name", function() {
    it("defaults to empty string", function() {
      expect(subject.name).toBe('');
    });

    it("is mutable", function() {
      subject.name = "Bob the Barbarian";
      expect(subject.name).toBe("Bob the Barbarian");
    });
  });

  describe("#alignment", function() {
    it("defaults to NEUTRAL", function() {
      expect(subject.alignment).toBe('NEUTRAL');
    });
    it("can be GOOD", function() {
      subject.alignment = 'GOOD';
      expect(subject.alignment).toBe('GOOD');
    });
    it("can be NEUTRAL", function() {
      subject.alignment = 'GOOD';
      subject.alignment = 'NEUTRAL';
      expect(subject.alignment).toBe('NEUTRAL');
    });
    it("can be EVIL", function() {
      subject.alignment = 'EVIL';
      expect(subject.alignment).toBe('EVIL');
    });
    it("cannot be WHACKY", function() {
      expect(() => subject.alignment = 'WHACKY')
        .toThrow("Alignment cannot be 'WHACKY'");
    });
  });

  describe("#armorClass", function() {
    it("defaults to 10", function() {
      expect(subject.armorClass).toBe(10);
    });
  });

  describe("#hitPoints", function() {
    it("defaults to 5", function() {
      expect(subject.hitPoints).toBe(5);
    });
    it("goes down when damaged", function() {
      subject.damage(2);
      expect(subject.hitPoints).toBe(3);
    });
  });

  describe("#isAlive", function() {
    it("defaults to true", function() {
      expect(subject.isAlive).toBe(true);
    });
    it("is true when damaged", function() {
      subject.damage(2);
      expect(subject.isAlive).toBe(true);
    });
    it("is false when damaged to 0 hit points", function() {
      subject.damage(5);
      expect(subject.isAlive).toBe(false);
    });
    it("is false when damaged beyond 0 hit points", function() {
      subject.damage(10);
      expect(subject.isAlive).toBe(false);
    });
  });
});