### Prerrequisitos

- Instala Node.js (>=18) y npm.
- Instala PostgreSQL 14+ (probado con la versión 18) y asegúrate de tener acceso a la línea de comandos `psql` o a pgAdmin.

### Configurar base de datos PostgreSQL (psql)

- Abre una terminal de PostgreSQL y crea un rol y base:

    - `psql -U postgres`

    - `CREATE USER showchilan_user WITH PASSWORD 'tu_password';`

    - `CREATE DATABASE showchilan OWNER showchilan_user;`

- Ejecuta el script de esquema/semillas:
    - `psql -U showchilan_user -d showchilan -f showchilan-backend/database.sql`
    - El script crea el esquema showchilan, la tabla negocios e inserta los ejemplos.

### Preparar variables de entorno del backend

- Ve al backend: cd showchilan-backend
- Crea .env con algo como:
```
PORT=4000
DB_HOST=localhost
DB_PORT=5432
DB_USER=showchilan_user
DB_PASSWORD=tu_password
DB_NAME=showchilan
ALLOWED_ORIGINS=http://localhost:5173
```
(Opcionalmente usa DATABASE_URL=postgres://... y DB_SSL=true si necesitas SSL.)

- Instala dependencias: npm install
- Inicia el API en modo watch: npm run dev
    - La API quedará disponible en `http://localhost:4000` con los endpoints `/api/negocios`, `/api/negocios/:id` y `/api/health`.

### Preparar el frontend PWA

- En otra terminal: `cd showchilan-frontend`
- Crea .env con `VITE_API_BASE_URL=http://localhost:4000`
- Instala dependencias: `npm install`
- Ejecuta la app: `npm run dev`
    - Vite mostrará la URL (por defecto `http://localhost:5173`); abre esa dirección en tu navegador.
