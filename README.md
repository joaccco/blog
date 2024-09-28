# Proyecto Django: Blog

Este es un proyecto Django básico para un blog. Asegúrate de seguir los pasos a continuación para configurar y ejecutar el proyecto en tu entorno local.

## Requisitos Previos

- Python 3.x
- pip (gestor de paquetes de Python)

## Pasos para Configurar el Proyecto

### 1. Clonar el Repositorio

Clona el repositorio a tu máquina local:

```bash
git clone https://github.com/joaccco/blog.git
cd blog

### 2. Crear un Entorno Virtual
Es recomendable usar un entorno virtual para manejar las dependencias del proyecto. Para crear un entorno virtual, ejecuta:
bash
Copiar código
python3 -m venv venv

### 3. Activar el Entorno Virtual
Activa el entorno virtual:
En macOS/Linux:
bash
Copiar código
source venv/bin/activate
En Windows:
bash
Copiar código
venv\Scripts\activate
4. Instalar Django
Si Django no está instalado en tu entorno virtual, instálalo con el siguiente comando:
bash
Copiar código
pip install django
5. Navegar al Proyecto
Accede al directorio del proyecto:
bash
Copiar código
cd blog
6. Crear el Proyecto Django
Si no has creado el proyecto aún, puedes hacerlo con:
bash
Copiar código
django-admin startproject blog .
7. Aplicar Migraciones
Antes de ejecutar el proyecto, debes aplicar las migraciones necesarias para crear las tablas en la base de datos:
bash
Copiar código
python manage.py makemigrations
python manage.py migrate
8. Crear un Superusuario (Opcional)
Si deseas acceder al panel de administración de Django, crea un superusuario:
bash
Copiar código
python manage.py createsuperuser
9. Ejecutar el Servidor de Desarrollo
Inicia el servidor de desarrollo:
bash
Copiar código
python manage.py runserver
10. Acceder a la Aplicación
Abre tu navegador y visita http://127.0.0.1:8000/ para ver tu proyecto en acción. Si creaste un superusuario, también podrás acceder al panel de administración en http://127.0.0.1:8000/admin/.
Notas Adicionales

Asegúrate de que tu entorno virtual esté activado cada vez que trabajes en el proyecto.
Para salir del entorno virtual, simplemente ejecuta:
bash
Copiar código
deactivate
Contribuciones

Las contribuciones son bienvenidas. Si deseas colaborar, por favor abre un Issue o un Pull Request.
Licencia

Este proyecto está bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
markdown
Copiar código

### Instrucciones de uso

1. Crea un archivo llamado `README.md` en la raíz de tu proyecto.
2. Copia el contenido anterior y pégalo en el archivo.
3. Asegúrate de que la URL de GitHub y otros detalles sean correctos para tu proyecto.

Si necesitas más ayuda o personalizaciones, ¡no dudes en preguntar!
