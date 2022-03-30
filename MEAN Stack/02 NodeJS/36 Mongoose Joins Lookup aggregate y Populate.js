//---------------------------------------------------------------------------------------------------------------------------//
// LOOKUP -> AGGREGATE:
//---------------------------------------------------------------------------------------------------------------------------//
// Lookup solo se puede utilizar dentro de una agregación.
// Solo se puede usar para extraer documentos de referencia de colecciones no fragmentadas.
// Puede extraer documentos referenciados por cualquier campo generalmente más eficaz ya que es una operación del lado del
// servidor.
//---------------------------------------------------------------------------------------------------------------------------//
const resultado = await users.aggregate(
  [
    {
      $lookup: {
        from: 'users',                // Modelo de origen.
        localField: 'fk_people',      // Nombre del campo LOCAL de referencia (FK).
        foreignField: '_id',          // Nombre del campo EXTERNO de referencia (FK).
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
// Alternativa en Mongoose que reemplaza automáticamente la ruta especificada (ID de esquema) en el documento, con un
// documento de un modelo diferente.
// Populate puede utilizarse tanto con agregaciones como con funciones de busqueda.
// Se puede usar para extraer documentos de referencia de colecciones fragmentadas y no fragmentadas.
// Solo puede extraer documentos referenciados por _id.
//---------------------------------------------------------------------------------------------------------------------------//
const usersSchema = new Schema({
  username: { type: String, required: true },
  fk_people: { type: mongoose.Types.ObjectId, required: true, ref: 'people' } //Declaramos la colección de referencia.
});

const peopleSchema = new Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
});

const users = model('users', usersSchema);
const people = model('people', peopleSchema);

//Poblar:
const resultado = await users.find().populate(path: 'people_data', model: 'people');

// o
const resultado = await users.find().populate('people_data');
//---------------------------------------------------------------------------------------------------------------------------//
