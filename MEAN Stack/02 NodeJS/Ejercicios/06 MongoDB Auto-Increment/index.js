//Import external modules:
const mongoose = require('mongoose');

//Connect with DB:
mongoose.connect('mongodb://localhost:27017/test_db', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, (err) => {
    if(err){
        console.log('Error al establecer conexión con la base de datos: ', error);
    } else {
        //Import people schema:
        const people = require('./peopleSchema');

        //Create Mongoose object to insert validated data:
        const objData = new people.Model({ name: 'Andrés', surname: 'Perez' });

        //Save data:
        objData.save(objData)
            .then((data) => {
                console.log('\nInsert success.')
            })
            .catch((err) => {
                //Send error:
                console.error('\nInsert error:' + err);
            }
        );
    }
});
