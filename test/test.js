const LinearMotion 	= require('../lib/linear-motion.js');
const should 				= require('should');

describe('Linear motion tests', function() {

	describe('Test values validation', function() {
		it('Should return false when velocity is null', function() {
      LinearMotion.areValuesValid(null, 10).should.be.equal(false);
    });

    it('Should return false when distance is null', function() {
      LinearMotion.areValuesValid(10, null).should.be.equal(false);
    });

    it('Should return false when velocity is undefined', function() {
      LinearMotion.areValuesValid(undefined, 10).should.be.equal(false);
    });

    it('Should return false when distance is undefined', function() {
      LinearMotion.areValuesValid(10, undefined).should.be.equal(false);
    });
	});

  describe('Test time calculation', function() {
    it('Should return zero when velocity is zero', function() {
      LinearMotion.calculateTime(0, 10).should.be.equal(0);
    });

    it('Should return 10 when velocity = 10 and distance = 100', function() {
      LinearMotion.calculateTime(10, 100).should.be.equal(10);
    });

    it('Should return 25 when velocity = 4 and distance = 100', function() {
      LinearMotion.calculateTime(4, 100).should.be.equal(25);
    });

    it('Should return 3.33 when velocity = 3 and distance = 10', function() {
      LinearMotion.calculateTime(3, 10).should.be.equal(3.33);
    });

    it('Should return 1.24 when velocity = 10 and distance = 12.45', function() {
      LinearMotion.calculateTime(10, 12.45).should.be.equal(1.24);
    });
  });

  describe('Test velocity calculation', function() {
    it('Should return zero when time is zero', function() {
      LinearMotion.calculateVelocity(0, 10).should.be.equal(0);
    });

    it('Should return 10 when time = 10 and distance = 100', function() {
      LinearMotion.calculateVelocity(10, 100).should.be.equal(10);
    });

    it('Should return 25 when time = 4 and distance = 100', function() {
      LinearMotion.calculateVelocity(4, 100).should.be.equal(25);
    });

    it('Should return 3.33 when time = 3 and distance = 10', function() {
      LinearMotion.calculateVelocity(3, 10).should.be.equal(3.33);
    });

    it('Should return 1.24 when time = 10 and distance = 12.45', function() {
      LinearMotion.calculateVelocity(10, 12.45).should.be.equal(1.24);
    });
  });

  describe('Test distance calculation', function() {
    it('Should return 1000 when time = 10 and distance = 100', function() {
      LinearMotion.calculateDistance(10, 100).should.be.equal(1000);
    });

    it('Should return 400 when time = 4 and distance = 100', function() {
      LinearMotion.calculateDistance(4, 100).should.be.equal(400);
    });

    it('Should return 30 when time = 3 and distance = 10', function() {
      LinearMotion.calculateDistance(3, 10).should.be.equal(30);
    });

    it('Should return 124.5 when time = 10 and distance = 12.45', function() {
      LinearMotion.calculateDistance(10, 12.45).should.be.equal(124.5);
    });
  });
});