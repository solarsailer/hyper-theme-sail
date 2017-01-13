'use strict'

const colors = require('./colors/bright')

// -------------------------------------------------------------
// Module.
// -------------------------------------------------------------

const backgroundColor = 'rgba(0, 0, 0, 0.7)'

// -------------------------------------------------------------
// Exports.
// -------------------------------------------------------------

exports.decorateConfig = config => {
  return Object.assign({}, config, {
    backgroundColor,
    colors
  })
}
