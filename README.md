# Proyecto Django: Blog

Este es un proyecto Django completo para crear y gestionar un blog. Sigue las instrucciones detalladas para clonar, configurar y ejecutar el proyecto en tu entorno local. También se proporciona información sobre cómo contribuir al desarrollo y licencia.

## Requisitos Previos

Antes de comenzar, asegúrate de tener los siguientes requisitos instalados en tu máquina:

- **Python 3.x**: [Descargar Python](https://www.python.org/downloads/)
- **pip**: El gestor de paquetes de Python, generalmente viene instalado con Python.
- **Git**: Necesario para clonar el repositorio. [Instalar Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

## Pasos para Configurar el Proyecto

Sigue estos pasos para configurar el proyecto Django en tu entorno local:

### 1. Clonar el Repositorio

Clona el repositorio a tu máquina local usando Git:


git clone https://github.com/joaccco/blog.git
cd blog

### 2. Crear un Entorno Virtual
Es recomendable usar un entorno virtual para aislar las dependencias del proyecto y evitar conflictos con otras instalaciones de Python. Para crear el entorno virtual:
bash
Copiar código
python3 -m venv venv

### 3. Activar el Entorno Virtual
Una vez que hayas creado el entorno virtual, necesitarás activarlo para instalar y gestionar las dependencias del proyecto dentro de este entorno. El comando para activar el entorno virtual depende del sistema operativo que estés utilizando:
macOS/Linux:
Para activar el entorno virtual en macOS o Linux, usa el siguiente comando:
bash
Copiar código
source venv/bin/activate
Windows:
En Windows, el comando es ligeramente diferente. Activa el entorno virtual con este comando:
bash
Copiar código
venv\Scripts\activate
Nota: Cuando el entorno virtual esté activado correctamente, verás el prefijo (venv) en tu terminal o línea de comandos, indicando que estás trabajando dentro del entorno virtual.

### 4. Instalar Dependencias
Una vez que el entorno virtual esté activado, instala las dependencias del proyecto usando el siguiente comando (si existe un archivo requirements.txt):
bash
Copiar código
pip install -r requirements.txt
Si no existe un archivo de dependencias, instala Django manualmente con:
bash
Copiar código
pip install django

### 5. Continuar con la Configuración
Una vez activado el entorno virtual y las dependencias instaladas, puedes continuar con los siguientes pasos para configurar y ejecutar tu proyecto Django. Asegúrate de aplicar las migraciones, crear un superusuario (si es necesario) y ejecutar el servidor de desarrollo.

blog/
│
├── blog/               # Directorio del proyecto Django
│   ├── __init__.py     # Archivo de inicialización
│   ├── settings.py     # Configuraciones de Django
│   ├── urls.py         # Rutas del proyecto
│   ├── wsgi.py         # Configuración del servidor WSGI
│
├── venv/               # Entorno virtual (excluido del control de versiones)
│
├── manage.py           # Script de gestión de Django
├── requirements.txt    # Archivo de dependencias (si existe)
├── README.md           # Documentación del proyecto


