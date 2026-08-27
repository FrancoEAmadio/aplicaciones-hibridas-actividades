const express = require('express');
const AppointmentManager = require('./managers/AppointmentManager.js');

const app = express();
const PORT = 3000;

const gestor = new AppointmentManager();

gestor.addAppointment({ id: 1, mascota: "Fido", duenio: "Carlos", fecha: "2026-08-15", hora: "10:00", motivo: "Vacuna" });
gestor.addAppointment({ id: 2, mascota: "Michi", duenio: "Ana", fecha: "2026-08-16", hora: "11:30", motivo: "Control" });

app.use(express.json());

app.get('/api/appointment', (req, res) => {
    const turnos = gestor.getAppointments();
    res.json(turnos);
});

app.get('/api/appointment/:id', (req, res) => {
    const idParam = parseInt(req.params.id); 
    const turno = gestor.getAppointmentById(idParam);

    if (!turno) {
        return res.status(404).json({ error: "Appointment not found" });
    }

    res.json(turno);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/api/appointment`);
});