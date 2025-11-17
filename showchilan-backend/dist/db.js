"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
exports.getNegocios = getNegocios;
exports.getNegocioById = getNegocioById;
exports.insertNegocio = insertNegocio;
const pg_1 = require("pg");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const useConnectionString = Boolean(process.env.DATABASE_URL);
const config = useConnectionString
    ? {
        connectionString: process.env.DATABASE_URL,
        ssl: process.env.DB_SSL === 'true' ? { rejectUnauthorized: false } : undefined,
    }
    : {
        host: process.env.DB_HOST ?? 'localhost',
        user: process.env.DB_USER ?? 'postgres',
        password: process.env.DB_PASSWORD ?? 'postgres',
        database: process.env.DB_NAME ?? 'showchilan',
        port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
    };
exports.pool = new pg_1.Pool(config);
async function getNegocios() {
    const { rows } = await exports.pool.query(`SELECT id, nombre, descripcion, telefono_contacto AS "telefonoContacto", latitud, longitud, imagenes
     FROM negocios
     ORDER BY id ASC`);
    return rows;
}
async function getNegocioById(id) {
    const { rows } = await exports.pool.query(`SELECT id, nombre, descripcion, telefono_contacto AS "telefonoContacto", latitud, longitud, imagenes
     FROM negocios WHERE id = $1`, [id]);
    return rows[0] ?? null;
}
async function insertNegocio(data) {
    const { rows } = await exports.pool.query(`INSERT INTO negocios (nombre, descripcion, telefono_contacto, latitud, longitud, imagenes)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, nombre, descripcion, telefono_contacto AS "telefonoContacto", latitud, longitud, imagenes`, [data.nombre, data.descripcion, data.telefonoContacto, data.latitud, data.longitud, data.imagenes]);
    return rows[0];
}
