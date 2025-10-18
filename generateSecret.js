import crypto from 'crypto';

const secret = crypto.randomBytes(32).toString('hex');
console.log("Seu JWT_SECRET é:", secret);
