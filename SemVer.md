# Versionado semántico

El **versionado semántico** o **SemVer 2.0.0**, es una forma de versionar software que facilita la gestión de dependencias.



#### Versionado de software

El **versionado de software** es el proceso de asignación de un nombre, código o número único, a un software para indicar su nivel de desarrollo. 



### ¿Cómo funciona?

Si el último dígito cambia, significa que los cambios son menores, normalmente se arreglan bugs, brechas de seguridad y problemas de rendimiento. Actualizar a esta versión significa que nuestra app seguirá funcionando, y que de hecho lo hará mejor.

Cuando la versión modifica el dígito de en medio, sabemos que los cambios fueron menores, es decir, que se agregó funcionalidad nueva al **framework**, que aunque es nueva, es compatible con la versión anterior del **framework**.

Actualizar a esta versión significa que tenemos nuevas funcionalidades disponibles, pero que tu código debería seguir funcionando.

Por último, actualizaciones al primer dígito significa que se agregó nueva funcionalidad, que se pudieron haber eliminado otras características y que el código que se actualice a esta versión podría no ser compatible y requerir de modificaciones sobre el código para que funcione con la nueva versión.



##### Caso de ejemplo con un archivo TOML donde se resuelven dependencias de software

```toml
[dependencies]
nombre_framework = "3.1.12"
```

