#---------------------------------------------------------------------------------------------------------------------------#
# GITLAB INITIAL MANAGEMENT (RESUMEN):
#---------------------------------------------------------------------------------------------------------------------------#
#Git global setup:
git config --global user.name "Camilo Pifano"
git config --global user.email "camilopifano@gmail.com"

#Create a new repository:
git clone https://nombredominio.com/main/nombre_repositorio.git
cd nombre_repositorio
touch README.md
git add README.md
git commit -m "add README"
git push -u origin master

#Push an existing folder:
cd existing_folder
git init
git remote add origin https://nombredominio.com/main/nombre_repositorio.git
git add .
git commit -m "Initial commit"
git push -u origin master

#Push an existing Git repository:
cd existing_repo
git remote rename origin old-origin
git remote add origin https://nombredominio.com/main/nombre_repositorio.git
git push -u origin --all
git push -u origin --tags
#---------------------------------------------------------------------------------------------------------------------------#
