import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import negociosRouter from './routes/negocios';
import { pool } from './db';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 4000;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()) ?? [
  'http://localhost:5173',
];

app.use(
  cors({
    origin: allowedOrigins,
  }),
);
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/negocios', negociosRouter);

app.use((err: Error, _req: express.Request, res: express.Response, _next: express.NextFunction) => {
  console.error('Error no controlado', err);
  res.status(500).json({ message: 'Error interno del servidor' });
});

app.listen(PORT, () => {
  console.log(`API Showchilan lista en http://localhost:${PORT}`);
});

process.on('SIGINT', async () => {
  await pool.end();
  process.exit(0);
});
