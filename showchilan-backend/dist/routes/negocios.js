"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("../db");
const router = (0, express_1.Router)();
router.get('/', async (_req, res) => {
    try {
        const negocios = await (0, db_1.getNegocios)();
        res.json(negocios);
    }
    catch (error) {
        console.error('Error al obtener negocios', error);
        res.status(500).json({ message: 'Error al obtener negocios' });
    }
});
router.get('/:id', async (req, res) => {
    try {
        const negocio = await (0, db_1.getNegocioById)(Number(req.params.id));
        if (!negocio) {
            return res.status(404).json({ message: 'Negocio no encontrado' });
        }
        return res.json(negocio);
    }
    catch (error) {
        console.error('Error al obtener negocio', error);
        return res.status(500).json({ message: 'Error interno del servidor' });
    }
});
router.post('/', async (req, res) => {
    try {
        const { nombre, descripcion, telefonoContacto, latitud, longitud, imagenes } = req.body;
        if (!nombre || !descripcion || !telefonoContacto || latitud === undefined || longitud === undefined || !imagenes) {
            return res.status(400).json({ message: 'Faltan campos obligatorios' });
        }
        if (!Array.isArray(imagenes)) {
            return res.status(400).json({ message: 'El campo imagenes debe ser un arreglo de URLs' });
        }
        const parsedLat = Number(latitud);
        const parsedLng = Number(longitud);
        if (Number.isNaN(parsedLat) || Number.isNaN(parsedLng)) {
            return res.status(400).json({ message: 'Latitud y longitud deben ser números válidos' });
        }
        const nuevoNegocio = await (0, db_1.insertNegocio)({
            nombre,
            descripcion,
            telefonoContacto,
            latitud: parsedLat,
            longitud: parsedLng,
            imagenes,
        });
        return res.status(201).json(nuevoNegocio);
    }
    catch (error) {
        console.error('Error al crear negocio', error);
        return res.status(500).json({ message: 'No se pudo crear el negocio' });
    }
});
exports.default = router;
