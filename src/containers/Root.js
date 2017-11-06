if (process.env.NODE_ENV === 'production') {
  module.exports = require('./MangerApp')
} else {
  module.exports = require('./MangerApp')
}
