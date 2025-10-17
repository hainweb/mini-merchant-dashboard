const users = require('../data/users');

const findByEmail = (email) => users.find(u => u.email === email);

module.exports = { findByEmail };
