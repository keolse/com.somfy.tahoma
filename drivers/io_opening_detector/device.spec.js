'use strict';

const expect = require('chai').expect;
const mock = require('mock-require');

const Homey = require('../../lib/test/homey-mock');
mock('homey', Homey);

const Device = require('./device');

describe('OpeningDetectorDevice', function() {
  const device = new Device();

  it('should have a capability listener', function() {
    expect(device.onCapabilityAlarmContact).to.be.a('function');
  });

  it('should implement the sync() method', function() {
    expect(() => device.sync([])).to.not.throw();
  });
});
