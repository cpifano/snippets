#---------------------------------------------------------------------------------------------------------------------------#
# 1. Generar una clave SSH:
#---------------------------------------------------------------------------------------------------------------------------#
ssh-keygen -t ed25519 -C "<tu_correo_electronico>"

# Agregar una frase de contraseña (opcional):
# Se te pedirá que ingreses una frase de contraseña.
# Esto añade una capa extra de seguridad, pero puedes dejarlo vacío si prefieres no usar una.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# 2. Agregar la clave SSH al ssh-agent:
#---------------------------------------------------------------------------------------------------------------------------#
# Iniciar el ssh-agent en segundo plano:
eval "$(ssh-agent -s)"

# Agregar la clave SSH al ssh-agent:
ssh-add ~/.ssh/id_ed25519
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# 3. Copiar la clave SSH:
#---------------------------------------------------------------------------------------------------------------------------#
cat ~/.ssh/id_ed25519.pub
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# 4. Agregar la clave SSH a GitHub > Settings> SSH and GPG keys.
#---------------------------------------------------------------------------------------------------------------------------#


#---------------------------------------------------------------------------------------------------------------------------#
# 5. Verificar la configuración SSH:
#---------------------------------------------------------------------------------------------------------------------------#
# Verificar la conexión SSH:
ssh -T git@github.com

# Deberías ver un mensaje como:
# Hi <username>! You've successfully authenticated, but GitHub does not provide shell access.
# Si todo está configurado correctamente.

# Configurar el repositorio remoto para usar SSH (si es necesario).
# Usar a la hora de clonar un repositorio la opción SSH:
git@github.com:organization-name/repository-name.git
#---------------------------------------------------------------------------------------------------------------------------#