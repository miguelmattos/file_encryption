const crypto = require('crypto');
const fs = require('fs');

const publicKey = fs.readFileSync('public_key.pem', 'utf8');

function encryptFile(inputFile, outputFile) {
    const data = fs.readFileSync(inputFile, 'utf8');
    const buffer = Buffer.from(data, 'utf8');
    const encrypted = crypto.publicEncrypt(publicKey, buffer);
    
    fs.writeFileSync(outputFile, encrypted.toString('base64'));
    console.log('File encrypted successfully.');
}

// Run encryption
encryptFile('accounts_keys.csv', 'accounts_keys.enc');
