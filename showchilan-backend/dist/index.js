"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const negocios_1 = __importDefault(require("./routes/negocios"));
const db_1 = require("./db");
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 4000;
const allowedOrigins = process.env.ALLOWED_ORIGINS?.split(',').map((origin) => origin.trim()) ?? [
    'http://localhost:5173',
];
app.use((0, cors_1.default)({
    origin: allowedOrigins,
}));
app.use(express_1.default.json());
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.use('/api/negocios', negocios_1.default);
app.use((err, _req, res, _next) => {
    console.error('Error no controlado', err);
    res.status(500).json({ message: 'Error interno del servidor' });
});
app.listen(PORT, () => {
    console.log(`API Showchilan lista en http://localhost:${PORT}`);
});
process.on('SIGINT', async () => {
    await db_1.pool.end();
    process.exit(0);
});
