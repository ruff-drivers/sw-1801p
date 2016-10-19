/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var mock = require('ruff-mock');

var EventEmitter = require('events');

var Device = require('../');

require('t');

describe('Driver for Vibrating sensor', function () {
    var sensor;
    var gpio;

    before(function () {
        gpio = mock(new EventEmitter(), true);
        sensor = new Device({
            gpio: gpio
        });
    });

    it('should emit `shock` event', function (done) {
        sensor.on('shock', function () {
            done();
        });

        gpio.emit('interrupt');
    });
});
