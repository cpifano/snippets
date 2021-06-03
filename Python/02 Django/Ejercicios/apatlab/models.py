from django.db import models

class Solicitante (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Solicitante"
        verbose_name_plural = "Solicitantes"

    id_solicitante = models.AutoField('ID', primary_key=True)
    CI_RUT = models.CharField('RUT / CI', max_length=30)
    nombre_completo = models.CharField('Nombre completo', max_length=60)
    telefono = models.CharField('Teléfono', blank=True, max_length=25)
    correo = models.EmailField('Correo', blank=True, max_length=76)

    def __str__(self):
        return self.nombre_completo

class Anticuerpo (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Anticuerpo"
        verbose_name_plural = "Anticuerpos"

    id_anticuerpo = models.AutoField('ID', primary_key=True)
    nombre = models.CharField('Nombre', max_length=30)

    def __str__(self):
        return self.nombre

class Marca (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Marca"
        verbose_name_plural = "Marcas"

    anticuerpo = models.ForeignKey(Anticuerpo)
    marca = models.CharField('Marca', max_length=30)
    clona = models.CharField('Clona', max_length=30)

    def __str__(self):
        return "MC_" + self.anticuerpo.nombre

class Estudio (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Estudio"
        verbose_name_plural = "Estudios"
        ordering = ['fecha']

    #Definir opciones para el campo de tipo:
    TIPOS = (('Anatomía', 'Anatomía'), ('Citología', 'Citología'), ('Extemporanea', 'Extemporanea'), ('Inmunohistoquímica', 'Inmunohistoquímica'))

    id_estudio = models.AutoField('ID', primary_key=True)
    num_caso = models.CharField('Número de caso', max_length=30)
    fecha = models.DateField('Fecha')
    id_solicitante = models.ForeignKey(Solicitante, on_delete=models.CASCADE)
    tacos = models.IntegerField('Cantidad de tacos')
    tipo = models.CharField('Tipo', max_length=30, choices=TIPOS)
    cantidad_laminas = models.IntegerField('Cantidad de láminas')
    anticuerpos = models.ManyToManyField(Anticuerpo)
    precio = models.DecimalField('Precio', max_digits=7, decimal_places=2)

    def listar_anticuerpos(self):
        return ", ".join([str(p) for p in self.anticuerpos.all()])
    listar_anticuerpos.short_description = 'Cantidad de anticuerpos'

    def __str__(self):
        return self.num_caso
