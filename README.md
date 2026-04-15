# InventarioTI
![GitHub repo size](https://img.shields.io/github/repo-size/EduardoGonzalezT/InventarioTI)
![GitHub license](https://img.shields.io/github/license/EduardoGonzalezT/InventarioTI)
![Vue](https://img.shields.io/npm/v/vue?label=vue&logo=vue.js)
![Express](https://img.shields.io/npm/v/express?label=express&logo=express)
![MySQL](https://img.shields.io/npm/v/mysql?label=mysql&logo=mysql)

Sistema de gestión de activos de TI.  
Permite registrar, organizar y mantener control sobre equipos tecnológicos dentro de una organización, así como generar documentación relacionada con su uso y mantenimiento.

## 🚀 Funcionalidades principales

- **Inventario de equipos**: registro de computadoras, impresoras, teléfonos fijos/IP, grabadoras de voz, servidores, smartphones, pantallas y tablets.
- **Gestión de componentes**: asociación de piezas y periféricos a cada equipo.
- **Información técnica**: almacenamiento de marca, dirección IP (intranet), dirección MAC física.
- **Cartas responsivas**: generación de documentos para identificar a quién se asigna cada equipo.
- **Mantenimiento**:
  - Formatos de mantenimiento correctivo (cambios o reparaciones).
  - Formatos de mantenimiento preventivo.
- **Exportación a Excel**: inventario detallado con información de cada equipo.
- **Gestión de usuarios**: creación de cuentas para acceder y utilizar el sistema.

## 🛠️ Tecnologías utilizadas

- **Frontend**: Vue 3, PrimeVue
- **Backend**: Express.js
- **Base de datos**: MySQL/MariaDB (ejemplo con archivo `.sql` incluido)
- **Otros**: integración con Excel para exportación de inventario

## ⚙️ Instalación y uso

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/tuusuario/InventarioTI.git
   ```
2. cd Client/
- npm install
- npm run dev

3. cd Services/
- npm install
- npm start
