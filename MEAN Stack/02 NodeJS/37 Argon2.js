//---------------------------------------------------------------------------------------------------------------------------//
// ARGON2:
//---------------------------------------------------------------------------------------------------------------------------//
//Import modules:
const argon2 = require('argon2');

//Hash:
async function hashPass(pass) {
    try {
        return await argon2.hash(pass);
    } catch (err) {
        return err;
    }
}

//Verify:
async function verifyPass(hash) {
    try {
        return await argon2.verify(hash, "clave.123");
    } catch (err) {
        return err;
    }
}

hashPass('clave.123')
    .then((hash) => {
        console.log(hash);

        verifyPass(hash)
            .then((result) => {
                console.log(result);
            })
            .catch((err) => {
                console.error(err);
            }
        );
    })
    .catch((err) => {
        console.error(err);
    }
);
//---------------------------------------------------------------------------------------------------------------------------//
