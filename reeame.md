# creacion del proyecto de interpolice#

## herramientas

gestor:mysql- maria db
node js: js stalonde - instalando en mi pc => en consol \_:node -v
express framework node js => gestionar apis usando protoco http
nodemon :plugin para usar desarrlo no se usa en produccion
mysql : gestionar las interaciones con la db - orm (sequelize)
cors :plugin para la gestion de cors
env : variables globales del proyecto (credenciales rutas)

### herramientas FRONT

css: framework bostrap
BUNDLER :vite --(webpack)
vainilla js

#### paso a paso

- iniciar el proyecto con node js. "npm init"
- instalar los paquetes requeridos :"npm install nodemon mysql2 cors env express".
- configuracion el control de version del codigo :
- iniciar el seguimiento del repositorio git init add ,

# Proyecto Interpolice: Sistema de Gestión de Información Policial

![Banner del proyecto - Puedes reemplazar esto con una imagen relevante](https://via.placeholder.com/800x200?text=Interpolice+System)

## Descripción del Proyecto

**Interpolice** es un sistema de gestión de información diseñado para optimizar los procesos internos y el manejo de datos relevantes en un entorno policial. Este proyecto se desarrolla utilizando una arquitectura moderna basada en Node.js para el backend (API REST) y una interfaz de usuario dinámica con JavaScript Vanilla y Bootstrap.

## Tecnologías Utilizadas

Este proyecto se divide en dos componentes principales: el Backend (API) y el Frontend (UI).

### Backend (API REST)

| Herramienta         | Función                                                                    |
| :------------------ | :------------------------------------------------------------------------- |
| **Node.js**         | Entorno de ejecución de JavaScript.                                        |
| **Express**         | Framework para la creación de APIs REST robustas y escalables.             |
| **MySQL / MariaDB** | Gestor de Base de Datos relacional para persistencia de datos.             |
| **mysql2**          | Cliente para interactuar con la base de datos.                             |
| **dotenv**          | Gestión de variables de entorno para configuraciones seguras.              |
| **CORS**            | Middleware para habilitar solicitudes de origen cruzado.                   |
| **Nodemon**         | Utilidad para reiniciar automáticamente el servidor durante el desarrollo. |

### Frontend (UI)

| Herramienta    | Función                                                                             |
| :------------- | :---------------------------------------------------------------------------------- |
| **Vanilla JS** | Lógica y manipulación del DOM sin frameworks pesados.                               |
| **Bootstrap**  | Framework CSS para un diseño responsivo y rápido.                                   |
| **Vite**       | Herramienta de construcción (Bundler) para optimizar el desarrollo y el despliegue. |

## Instalación y Puesta en Marcha

Sigue estos pasos para configurar y ejecutar el proyecto en tu máquina local.

### 1. Requisitos Previos

Asegúrate de tener instalado lo siguiente:

- **Node.js** (v16.x o superior recomendado)
- **Git**
- **MySQL o MariaDB** (Servidor de Base de Datos)

### 2. Clonar el Repositorio

```bash
git clone [URL_DE_TU_REPOSITORIO]
cd interpolice
```
