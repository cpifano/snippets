<?php
#Rezize IMG requiere de la libreria de procesamiento de imagenes GD:
#Asegurese de que la misma se encuentr instalada en el servidor PHP,
#de lo contrario nada funcionara. (Ej: apt-get install php5-gd).

#Incluir libreria con la clase thumbnail:
include 'resize-img.php';

#Creamos un objeto tipo thumbnail:
$thumb = new thumbnail("images/Jimi_Hendrix.jpg");

#Determinamos ancho de la imagen:
$thumb -> size_width(200);

#Determinamos la calidad 0-100:
$thumb -> jpeg_quality(100);

#Mostramos el resultado:
$thumb -> show();

#Guardamos en un nuevo directorio:
$thumb -> save("images/thumb/Jimi_Hendrix.jpg");
?>