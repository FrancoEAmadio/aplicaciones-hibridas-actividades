const fs = require('fs'); 

class AppointmentManager {
    constructor() {
        this.appointments = [];
        this.ruta = './jsons/turnos.json';
        this.leerTurnos(); 
    }

    leerTurnos() {
        try {
            if (fs.existsSync(this.ruta)) {
                const contenido = fs.readFileSync(this.ruta, 'utf-8');
                this.appointments = JSON.parse(contenido); 
            } else {
                this.appointments = [];
            }
        } catch (error) {
            this.appointments = [];
        }
    }

    guardarTurnos() {
        try {
            if (!fs.existsSync('./jsons')) {
                fs.mkdirSync('./jsons');
            }
            const datos = JSON.stringify(this.appointments, null, 2); 
            fs.writeFileSync(this.ruta, datos); 
        } catch (error) {
            console.error("Error al guardar:", error);
        }
    }

    addAppointment(turno) {
        const { id, mascota, duenio, fecha, hora, motivo } = turno;

        if (!id || !mascota || !duenio || !fecha || !hora || !motivo) {
            console.log("Error: Faltan completar datos del turno.");
            return; 
        }

        const existeId = this.appointments.some(t => t.id === id);
        if (existeId) {
            console.log("Error: El id ya está registrado.");
            return; 
        }

        this.appointments.push({
            id, mascota, duenio, fecha, hora, motivo, estado: "Pendiente"
        });

        this.guardarTurnos();
        console.log(`Turno de ${mascota} agregado con éxito.`);
    }

    getAppointments() {
        return this.appointments;
    }

    getAppointmentById(id) {
        const turno = this.appointments.find(t => t.id === id);
        if (!turno) {
            console.log("Appointment not found");
            return null; 
        }
        return turno;
    }

    eliminarPorId(id) {
        const index = this.appointments.findIndex(t => t.id === id);

        if (index === -1) {
            console.log(`Appointment not found`);
            return;
        }

        const eliminado = this.appointments.splice(index, 1);
        this.guardarTurnos();
        console.log(`Turno con ID ${id} eliminado correctamente.`);
        return eliminado;
    }
}

module.exports = AppointmentManager;