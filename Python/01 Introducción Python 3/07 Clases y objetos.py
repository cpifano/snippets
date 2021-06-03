#---------------------------------------------------------------------------------------------------------------------------#
# CLASES Y OBJETOS:
#---------------------------------------------------------------------------------------------------------------------------#
#Crear una clase:
class Usuario:
    #Definir atributos de la clase:
    tabla = 'usuarios'
    pk = 'id_usuario'
    __password = '0' #Atributo privado de la clase.

    #Crear método inicializador de la clase:
    #__init__ no es el constructor de la clase el constructor es __new__
    def __init__(self, tipo, estado): #Self es el primer parámetro que reciben los métodos.
        self.tipo = tipo
        self.estado = estado
        self.__generar_pass()

    #Crear método de clase:
    def buscar(self): #Utilizar solo self si el metodo no recibe parametros.
        print('Tipo de usuario:', self.tipo)
        print('Estado:', self.estado)
        print('Contraseña:', self.__password)

    #Crear método privado de la clase (Solo esta clase podrá usarlo):
    def __generar_pass(self):
        self.__password = 'YH32K5Y'

    #Definir propiedades de la clase:
    @property
    def password(self):
        return self.__password

    #Crear un método estático de la clase:
    @staticmethod
    def pi():
        return 3.14159265359

    #Crear método destructor de la clase:
    def __del__(self):
        print('Objeto destruido...')

#Crear objeto (Pasando parametros tipo y estado para el método constructor):
listado = Usuario('Administrador', 'Activo')

#Acceder a los atributos del objeto:
print(listado.tipo)

#Acceder a los atributos de la clase (No es necesario crear un objeto para acceder a la misma):
print('Clave primaria:',Usuario.pk)

#Ejecutar un metodo estatico de la clase (No es necesario crear un objeto para acceder al mismo):
print(Usuario.pi())

#Utilizar propiedades del objeto:
print(listado.password)

#Invocar métodos del objeto:
listado.buscar()
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# HERENCIA:
#---------------------------------------------------------------------------------------------------------------------------#
#Herencia de clases:
class Alumno (Usuario):
    pass

#Herencia múltiple:
class Funcionario:
    pass

class Docente (Usuario, Funcionario):
    materias = ['Matemática', 'Física']

    #Polimorfismo (Override):
    def buscar(self):
        print('Método buscar específico de la clase Docente.')

    #Ejecutar el metodo original que posee el mismo nombre de la clase padre:
    def pi(self):
        Usuario.pi(self)
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# CASOS PARTICULARES:
#---------------------------------------------------------------------------------------------------------------------------#
#Casos particulares de uso:
class Animal:
    pass

#Crear objeto:
perro = Animal()

#Definir atributo público de un objeto (Solo para ese objeto):
perro.nombre = 'Ciclón'
print(perro.nombre)

#Método __new__ constructor de la clase:
class Persona:
    #Método constructor:
    def __new__(cls):
        print('Este método se ejecuta primero.')
        return super().__new__(cls)

    #Método inicializador:
    def __init__(self):
        print('Este método se ejecuta segundo.')
#---------------------------------------------------------------------------------------------------------------------------#
