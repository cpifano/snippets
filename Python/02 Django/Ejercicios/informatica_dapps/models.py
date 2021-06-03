from django.db import models

class Numero_Calidad (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Número calidad"
        verbose_name_plural = "00 Números de calidad"
        ordering = ['codigo']

    codigo = models.CharField('Código', blank=False, primary_key=True, max_length=10)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    #Retorno para referencia del objeto:
    def __str__(self):
        return self.codigo + " (" + self.descripcion + ")"

class PC (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "PC"
        verbose_name_plural = "01 PCs"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)
    notas = models.TextField('Notas', blank=True)

    #Registro de licencias de SO:
    sistema_operativo = models.CharField('Sistema operativo', blank=True, max_length=40)
    so_licencia_origen = models.CharField('Licencia de origen de SO', blank=True, max_length=40)
    so_licencia_activada = models.CharField('Licencia activada de SO', blank=True, max_length=40)

    #Registro de licencias de Ofimática:
    ofimatica = models.CharField('Ofimática', blank=True, max_length=40)
    of_licencia_origen = models.CharField('Licencia de origen de Ofimática', blank=True, max_length=40)
    of_licencia_activada = models.CharField('Licencia activada de Ofimática', blank=True, max_length=40)

    #Especificaciones de Hardware:
    motherboard = models.CharField('Motherboard', blank=True, max_length=40)
    procesador = models.CharField('Procesador', blank=True, max_length=40)
    memoria_RAM = models.CharField('Memoria RAM', blank=True, max_length=40)
    almacenamiento = models.CharField('Almacenamiento', blank=True, max_length=40)
    graficos = models.CharField('Gráficos', blank=True, max_length=40)
    medios_opticos = models.CharField('Medios ópticos', blank=True, max_length=40)

class IP_PC (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    pc = models.ForeignKey(PC)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_PC"

class Monitor (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Monitor"
        verbose_name_plural = "02 Monitores"
        ordering = ['codigo']

    #Definir opciones:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))
    CONEXIONES = (('VGA', 'VGA'), ('DVI', 'DVI'), ('DP', 'DP'), ('HDMI', 'HDMI'), ('RCA', 'RCA'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)

    #Especificaciones del monitor:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    pulgadas = models.IntegerField('Pulgadas', blank=False)
    puerto = models.CharField('Puerto en uso', max_length=10, choices=CONEXIONES)
    equipo_asociado = models.CharField('Equipo asociado', blank=True, max_length=10)
    notas = models.TextField('Notas', blank=True)

class Apple (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Equipo Apple"
        verbose_name_plural = "03 Equipos Apple"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del equipo Apple:
    serial = models.CharField('Número de serie', max_length=40)
    modelo = models.CharField('Modelo', blank=False, max_length=40)
    notas = models.TextField('Notas', blank=True)

    #Registro de licencias de Ofimática:
    ofimatica = models.CharField('Ofimática', blank=True, max_length=40)
    of_licencia_origen = models.CharField('Licencia de origen de Ofimática', blank=True, max_length=40)
    of_licencia_activada = models.CharField('Licencia activada de Ofimática', blank=True, max_length=40)

class IP_Apple (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    apple = models.ForeignKey(Apple)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_Apple"

class Portatil (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Portatil"
        verbose_name_plural = "07 Portatiles"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del equipo Portatil:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)
    notas = models.TextField('Notas', blank=True)

    #Registro de licencias de SO:
    sistema_operativo = models.CharField('Sistema operativo', blank=True, max_length=40)
    so_licencia_origen = models.CharField('Licencia de origen de SO', blank=True, max_length=40)
    so_licencia_activada = models.CharField('Licencia activada de SO', blank=True, max_length=40)

    #Registro de licencias de Ofimática:
    ofimatica = models.CharField('Ofimática', blank=True, max_length=40)
    of_licencia_origen = models.CharField('Licencia de origen de Ofimática', blank=True, max_length=40)
    of_licencia_activada = models.CharField('Licencia activada de Ofimática', blank=True, max_length=40)

    #Especificaciones de Hardware:
    motherboard = models.CharField('Motherboard', blank=True, max_length=40)
    procesador = models.CharField('Procesador', blank=True, max_length=40)
    memoria_RAM = models.CharField('Memoria RAM', blank=True, max_length=40)
    almacenamiento = models.CharField('Almacenamiento', blank=True, max_length=40)
    graficos = models.CharField('Gráficos', blank=True, max_length=40)
    medios_opticos = models.CharField('Medios ópticos', blank=True, max_length=40)

class IP_Portatil (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    portatil = models.ForeignKey(Portatil)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_Portatil"

class Impresora (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Impresora"
        verbose_name_plural = "08 Impresoras"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))
    INSUMOS = (('Inkjet', 'Inkjet'), ('Laser', 'Laser'), ('Laser color', 'Laser color'), ('Cera', 'Cera'), ('Ribbon', 'Ribbon'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones de la impresora:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)
    insumo = models.CharField('Insumo', max_length=15, choices=INSUMOS)
    notas = models.TextField('Notas', blank=True)

class IP_Impresora (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    impresora = models.ForeignKey(Impresora)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_Impresora"

class Firewall (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Firewall"
        verbose_name_plural = "10 Firewalls"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del Firewall:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    admin_user = models.CharField('Usuario administrador', max_length=20)
    admin_pass = models.CharField('Contraseña de administrador', max_length=20)
    notas = models.TextField('Notas', blank=True)

class Puerto_FW (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Puerto"
        verbose_name_plural = "Puertos"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    firewall = models.ForeignKey(Firewall)
    numero = models.CharField("Número", max_length=10)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "P" + self.numero + self.firewall.codigo.descripcion

class Switch (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Switch"
        verbose_name_plural = "11 Switchs"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del Switch:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    admin_user = models.CharField('Usuario administrador', max_length=20)
    admin_pass = models.CharField('Contraseña de administrador', max_length=20)
    notas = models.TextField('Notas', blank=True)

    def __str__(self):
        return self.codigo.codigo + " (" + self.codigo.descripcion + ")"

class IP_Switch (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    switch = models.ForeignKey(Switch)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_Switch"

class Puerto_SW (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Puerto"
        verbose_name_plural = "Puertos"

    switch = models.ForeignKey(Switch)
    numero = models.CharField("Número", max_length=10)
    vlan = models.CharField("VLAN", max_length=40, blank=True)
    outlet = models.CharField("Outlet", max_length=25, blank=True)
    local = models.CharField("Local", max_length=25, blank=True)
    equipo_conectado = models.ForeignKey(Numero_Calidad, blank=True, null=True)

    def __str__(self):
        return "P" + self.numero + self.switch.codigo.descripcion

class WLAN (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "WLAN"
        verbose_name_plural = "12 WLANs"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del WLAN:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    SSID = models.CharField('SSID', max_length=30)
    wifi_pass = models.CharField('Contraseña WiFi', max_length=15)
    admin_ip = models.GenericIPAddressField('IP de administración', protocol='IPv4')
    admin_user = models.CharField('Usuario administrador', max_length=20)
    admin_pass = models.CharField('Contraseña de administrador', max_length=20)
    notas = models.TextField('Notas', blank=True)

class Servidor (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Servidor"
        verbose_name_plural = "13 Servidores"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del Servidor:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    procesador = models.CharField('Procesador', blank=True, max_length=40)
    memoria_RAM = models.CharField('Memoria RAM', blank=True, max_length=40)

    admin_user = models.CharField('Usuario administrador', max_length=20)
    admin_pass = models.CharField('Contraseña de administrador', max_length=20)
    notas = models.TextField('Notas', blank=True)

class IP_Servidor (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'), ('Trunk','Trunk'), ('Access','Access'))

    servidor = models.ForeignKey(Servidor)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_Servidor"

class Televisor (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Televisor"
        verbose_name_plural = "14 Televisores"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))
    CONEXIONES = (('VGA', 'VGA'), ('DVI', 'DVI'), ('DP', 'DP'), ('HDMI', 'HDMI'), ('RCA', 'RCA'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del Televisor:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    pulgadas = models.IntegerField('Pulgadas', blank=False)
    puerto = models.CharField('Puerto en uso', max_length=10, choices=CONEXIONES)
    equipo_asociado = models.CharField('Equipo asociado', blank=True, max_length=10)
    notas = models.TextField('Notas', blank=True)

class Storage (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Storage"
        verbose_name_plural = "15 Storages"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))
    TIPOS_RAID = (('RAID 0', 'RAID 0'), ('RAID 1', 'RAID 1'), ('RAID 5', 'RAID 5'), ('RAID 6', 'RAID 6'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del Storage:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    bahias = models.IntegerField('Bahías', blank=False)
    capacidad_total = models.CharField('Capacidad total', blank=False, max_length=40)
    RAID = models.CharField('RAID', max_length=10, choices=TIPOS_RAID)
    capacidad_real = models.CharField('Capacidad real', blank=False, max_length=40)
    notas = models.TextField('Notas', blank=True)

class IP_Storage (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'), ('Trunk','Trunk'), ('Access','Access'))

    storage = models.ForeignKey(Storage)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_Storage"

class Escaner (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Escáner"
        verbose_name_plural = "16 Escáners"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del Escaner:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)
    notas = models.TextField('Notas', blank=True)

class NUC (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "NUC"
        verbose_name_plural = "17 NUCs"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)
    ubicacion = models.CharField('Ubicación', blank=False, max_length=20)

    #Especificaciones del NUC:
    serial = models.CharField('Número de serie', max_length=40)
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    #Especificaciones de Hardware:
    procesador = models.CharField('Procesador', blank=True, max_length=40)
    memoria_RAM = models.CharField('Memoria RAM', blank=True, max_length=40)
    almacenamiento = models.CharField('Almacenamiento', blank=True, max_length=40)
    notas = models.TextField('Notas', blank=True)

    #Registro de licencias de SO:
    sistema_operativo = models.CharField('Sistema operativo', blank=True, max_length=40)
    so_licencia_origen = models.CharField('Licencia de origen de SO', blank=True, max_length=40)
    so_licencia_activada = models.CharField('Licencia activada de SO', blank=True, max_length=40)

    #Registro de licencias de Ofimática:
    ofimatica = models.CharField('Ofimática', blank=True, max_length=40)
    of_licencia_origen = models.CharField('Licencia de origen de Ofimática', blank=True, max_length=40)
    of_licencia_activada = models.CharField('Licencia activada de Ofimática', blank=True, max_length=40)

class IP_NUC (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "IP"
        verbose_name_plural = "IPs"

    #Definir opciones:
    MODOS = (('Manual', 'Manual'), ('DHCP', 'DHCP'))

    nuc = models.ForeignKey(NUC)
    modo = models.CharField('Modo', max_length=10, choices=MODOS)
    ip = models.GenericIPAddressField('Dirección IP', protocol='IPv4', blank=True, null=True)
    mascara = models.GenericIPAddressField('Máscara de red', protocol='IPv4', blank=True, null=True)
    gateway = models.GenericIPAddressField('Puerta de enlace', protocol='IPv4', blank=True, null=True)
    descripcion = models.CharField('Descripción', blank=True, max_length=30)

    def __str__(self):
        return "IP_NUC"

class Movil (models.Model):
    #Definir nombre y plural para interfaz Admin:
    class Meta:
        verbose_name = "Celular / Tablet"
        verbose_name_plural = "18 Celulares / Tablets"
        ordering = ['codigo']

    #Definir opciones para el campo de estado:
    ESTADOS = (('Activo', 'Activo'), ('Disponible', 'Disponible'), ('Baja', 'Baja'))

    #Definir atributos de la clase:
    codigo = models.ForeignKey(Numero_Calidad)
    etiqueta = models.BooleanField()
    estado = models.CharField('Estado', max_length=10, choices=ESTADOS)

    #Especificaciones del Movil:
    marca = models.CharField('Marca', blank=False, max_length=20)
    modelo = models.CharField('Modelo', blank=False, max_length=40)

    numero = models.CharField('Número', blank=True, max_length=15)
    PIN = models.CharField('PIN', blank=True, max_length=4)
    PUK = models.CharField('PUK', blank=True, max_length=15)
    notas = models.TextField('Notas', blank=True)
