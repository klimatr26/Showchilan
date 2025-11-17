import { Pool, PoolConfig } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const useConnectionString = Boolean(process.env.DATABASE_URL);

const config: PoolConfig = useConnectionString
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

export const pool = new Pool(config);

export interface Negocio {
  id: number;
  nombre: string;
  descripcion: string;
  telefonoContacto: string;
  latitud: number;
  longitud: number;
  imagenes: string[];
}

export async function getNegocios(): Promise<Negocio[]> {
  const { rows } = await pool.query<Negocio>(
    `SELECT id, nombre, descripcion, telefono_contacto AS "telefonoContacto", latitud, longitud, imagenes
     FROM negocios
     ORDER BY id ASC`,
  );
  return rows;
}

export async function getNegocioById(id: number): Promise<Negocio | null> {
  const { rows } = await pool.query<Negocio>(
    `SELECT id, nombre, descripcion, telefono_contacto AS "telefonoContacto", latitud, longitud, imagenes
     FROM negocios WHERE id = $1`,
    [id],
  );
  return rows[0] ?? null;
}

export async function insertNegocio(data: Omit<Negocio, 'id'>): Promise<Negocio> {
  const { rows } = await pool.query<Negocio>(
    `INSERT INTO negocios (nombre, descripcion, telefono_contacto, latitud, longitud, imagenes)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING id, nombre, descripcion, telefono_contacto AS "telefonoContacto", latitud, longitud, imagenes`,
    [data.nombre, data.descripcion, data.telefonoContacto, data.latitud, data.longitud, data.imagenes],
  );
  return rows[0];
}
