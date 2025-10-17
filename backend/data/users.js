const bcrypt = require('bcrypt');
const hashedPassword = bcrypt.hashSync('password123', 10);

const users = [
  { id: 'u1', email: 'admin@test.com', password: hashedPassword }
];

module.exports = users;
