const crypto = require('crypto');

// Generate a random secret key
const generateSecretKey = () => {
  const length = 32; // 256 bits
  return crypto.randomBytes(length).toString('hex');
};

// Example usage
const secretKey = generateSecretKey();
console.log('Generated Secret Key:', secretKey);
