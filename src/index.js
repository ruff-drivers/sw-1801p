/*!
 * Copyright (c) 2016 Nanchao Inc.
 * All rights reserved.
 */

'use strict';

var driver = require('ruff-driver');

module.exports = driver({
    attach: function (inputs) {
        var that = this;
        this._gpio = inputs['gpio'];

        this._gpio.on('interrupt', function () {
            that.emit('shock');
        });
    }
});
