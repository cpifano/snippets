/*MANIPULACION INICIAL:--------------------------------------------------------------------------------*/
//Mostrar bases de datos existentes:
show dbs

//Seleccionar una base de datos:
use BASEDEDATOS

//Mostrar colecciones dentro de una base de datos:
show collections
/*-----------------------------------------------------------------------------------------------------*/


/*CREACION DE REGISTROS:-------------------------------------------------------------------------------*/
db.COLECCION.insert({'clave':'valor'});

db.COLECCION.insert({
	nombre		: 'Juan',
	apellido	: 'Perez',
	telefonos	: ['12345678' , '87654321']
});
/*-----------------------------------------------------------------------------------------------------*/


/*BUSQUEDA DE REGISTROS:-------------------------------------------------------------------------------*/
//Mostrar todos los registros dentro de una colección:
db.COLECCION.find();

//Mostrar en un formato agradable:
db.COLECCION.find().pretty();

//Mostrar solo un registro (último):
db.COLECCION.findOne();

//Filtrar resultados que cumplan una condición:
db.COLECCION.find({'clave':'valor'});

//Filtrar con AND:
db.COLECCION.find({ genero: 'M', edad: '20' });

//Filtrar con OR:
db.COLECCION.find({
	$or: [
		{socialAdmin : true},
		{genero: 'M'}
	]
});
/*-----------------------------------------------------------------------------------------------------*/


/*LIMITAR Y ORDENAR:-----------------------------------------------------------------------------------*/
//Limitar la busqueda en 10 resultados:
db.COLECCION.find().limit(10);

//Ordenar los resultados por el apellido (1 descendente, -1 ascendente):
db.COLECCION.find().sort({apellido : 1});
/*-----------------------------------------------------------------------------------------------------*/


/*ELIMINACION DE REGISTROS:----------------------------------------------------------------------------*/
//Borrar una coleccion completa:
db.COLECCION.drop();

//Eliminar todos los documentos de una colección:
db.COLECCION.remove();

//Eliminar los documentos de una colección que cumplan una condición:
db.COLECCION.remove({ nombre: 'Juan' });
/*-----------------------------------------------------------------------------------------------------*/


/*ACTUALIZACION DE REGISTROS:--------------------------------------------------------------------------*/
//Actualización de sobrescritura:---------------------------------------//
//Insersion de un registro:
db.COLECCION.insert({
	nombre		:   'Juan',
	apellido	:   'Perez'
});

//Actualizacrón del registro que cumple con la condición:
db.COLECCION.update(
	{nombre: 'Juan'},
	{
		nombre: 'Juan José',
		apellido: 'Gomez',
		telefonos: ['12345678','87654321']
	}
);
//----------------------------------------------------------------------//

//Operadores de Modificación:-------------------------------------------//
$inc		//Incrementa en una cantidad numerica especificada el valor del campo a en cuestión.
$rename		//Renombrar campos del documento.
$set		//Permite especificar los campos que van a ser modificados.
$unset		//Eliminar campos del documento.

//Referentes a arreglos:
$pop		//Elimina el primer o último valor de un arreglo.
$pull		//Elimina los valores de un arreglo que cumplan con el filtro indicado.
$pullAll	//Elimina los valores especificados de un arreglo.
$push		//Agrega un elemento a un arreglo.
$addToSet	//Agrega elementos a un arreglo solo sí estos no existen ya.
$each		//Para ser usado en conjunto con $addToSet o $push para indicar varios elementos a ser agregados al arreglo.

//Modificar contenido (sobrescritura):
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$set: { esdado: true, edad : 25 }
	}
);

//Incrementar el valor edad en 1 (Números negativos = decremento):
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$inc: { edad : 1 }
	}
);

//Cambiar el nombre del campo de un documento:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$rename: { 'edad' : 'Edad' }
	}
);

//Eliminar un campo:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$unset: { esdado : '' }
	}
);

//Agregar un valor a un arreglo:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$push: { telefonos : '18273645' }
	}
);

//Agregar un valor a un arreglo pero solo si ya no existe dentro del mismo:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$addToSet: { telefonos : '18273645' }
	}
);

//Agregar varios valores a un arreglo:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$push: { telefonos : { $each : ['12345678','87654321','18273645'] } }
	}
);

//Eliminar el último elemento de un arreglo ('18273645'):
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$pop: { telefonos : 1 }
	}
);

//Eliminar un elemento particular dentro del arreglo:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$pull: { telefonos : '12345678' }
	}
);

//Eliminar mas de un elemento a la vez del arreglo:
db.COLECCION.update(
	{ nombre: 'Juan' },
	{
		$pullAll: { telefonos : ['12345678','87654321'] }
	}
);

//Aplicar una accion en particular sobre todos los documentos de una colección:
db.COLECCION.update(
	{ },
	{
		$rename: { 'edad' : 'Edad' }	//Ej: Renombrar el campo edad de todos los documentos.
	},
	{ multi : true }
);
//----------------------------------------------------------------------//
/*-----------------------------------------------------------------------------------------------------*/


/*COMANDO SAVE():--------------------------------------------------------------------------------------*/
// Otra manera para actualizar o insertar registros es mediante el uso del comando .save().
// Este comando recibe como parámetro únicamente un documento.

//Insersion de un registro:
db.COLECCION.save({
	nombre:     'Juan'
});

//Actualización de sobrescritura indicando el _id del registro.
db.COLECCION.save({
	_id:        ObjectId('5246049e7bc1a417cc91ec8c')
	nombre:     'Juan',
	apellido:   'Gomez',
	telefonos:  ['12345678', '87654321']
});
/*-----------------------------------------------------------------------------------------------------*/


/*EXPORTACION/IMPORTACION:-----------------------------------------------------------------------------*/
//Exportar una base de datos (DUMP):
mongodump BASEDATOS

//Importar una base de datos (RESTORE):
mongorestore DUMP
/*-----------------------------------------------------------------------------------------------------*/


/*INTEGRACION CON JAVASCRIPT:--------------------------------------------------------------------------*/
var X = db.COLECCION.findOne()
X.clave = 'nuevo_valor'
db.COLECCION.save(X)
/*-----------------------------------------------------------------------------------------------------*/