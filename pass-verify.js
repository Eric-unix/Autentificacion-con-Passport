const bcrypt = require('bcrypt');

async function verifyPassword(){
    const myPassword = 'admin 123 .02';
    const hash = '$2b$10$.q.8/z3PP1KrrUqNuK9quCHQ.5S4w3.FyKmHEGEFqc190VEqBW';
    const isMatch = await bcrypt.compare(myPassword, hash);
    console,log(isMatch);
}

verifyPassword();