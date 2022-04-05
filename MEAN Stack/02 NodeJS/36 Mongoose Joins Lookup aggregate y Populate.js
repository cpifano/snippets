//---------------------------------------------------------------------------------------------------------------------------//
// LOOKUP -> AGGREGATE:
//---------------------------------------------------------------------------------------------------------------------------//
// Lookup solo se puede utilizar dentro de una agregación.
// Ventaja principal: la operación se lleva a cabo dentro del servidor de bases de datos, ya que se trata de una consulta.
//---------------------------------------------------------------------------------------------------------------------------//
const resultado = await users.aggregate(
  [
    {
      $lookup: {
        from: 'people',               // Modelo que contiene los datos para el join.
        localField: 'fk_people',      // Nombre de la clave LOCAL de referencia (FK).
        foreignField: '_id',          // Nombre de la clave EXTERNA de referencia (FK).
        as: 'people_data',            // Nombre (alias) del campo donde se arrojará el resultado del join.
      },
      { $unwind: '$people_data'},     // Desenvolver el campo para que no esté dentro de un array.

      //Operaciones comunes:
      { $match: { status: true }},    // Filtros para el criterio de búsqueda.
      { $project: { username: 1 }},   // Proyección de datos.
      { $sort : { username : 1 } },   // Criterio de ordenamiento.
      { $skip : 5 },                  // Omitir el número especificado de documentos.
      { $limit: 10 }                  // Limitar la cantidad de resultados.
    }
  ]
);
//---------------------------------------------------------------------------------------------------------------------------//


//---------------------------------------------------------------------------------------------------------------------------//
// POPULATE:
//---------------------------------------------------------------------------------------------------------------------------//
// Populate puede utilizarse tanto con agregaciones como con funciones de busqueda.
// Solo puede extraer documentos referenciados por _id.
// Desventaja principal: Populate realiza "múltiples consultas" para "emular" un join.
//---------------------------------------------------------------------------------------------------------------------------//
const usersSchema = new Schema({
  username: { type: String, required: true },
  fk_people: { type: mongoose.Types.ObjectId, required: true, ref: 'people' } //Declaramos la colección de referencia.
});

const peopleSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  fk_user: { type: mongoose.Types.ObjectId, required: true, ref: 'users' } //Declaramos la colección de referencia.
});

const users = model('users', usersSchema);
const people = model('people', peopleSchema);

//Poblar:
const resultado = await users.find().populate('people');

//Otras formas de poblar:
populate({
    path: 'people',
    match: { age: { $gte: 21 } }
})
//---------------------------------------------------------------------------------------------------------------------------//
