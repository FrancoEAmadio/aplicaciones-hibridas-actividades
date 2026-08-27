const fs = require('fs');

class AppointmentManager {
    constructor() {
        this.appointments = [];
        this.ruta = './jsons/turnos.json';
        this.leerTurnos(); // Carga los turnos si ya existen en el JSON
    }

    // Método para leer del archivo JSON local
    leerTurnos() {
        try {
            if (fs.existsSync(this.ruta)) {
                const contenido = fs.readFileSync(this.ruta, 'utf-8');
                this.appointments = JSON.parse(contenido);
            } else {
                this.appointments = [];
            }
        } catch (error) {
            console.error("Error al leer el archivo de turnos:", error);
            this.appointments = [];
        }
    }

    // Método para guardar en el archivo JSON local (Persistencia)
    guardarTurnos() {
        try {
            // Creamos la carpeta jsons si no existe por las dudas
            if (!fs.existsSync('./jsons')) {
                fs.mkdirSync('./jsons');
            }
            const datos = JSON.stringify(this.appointments, null, 2);
            fs.writeFileSync(this.ruta, datos);
        } catch (error) {
            console.error("Error al guardar los turnos:", error);
        }
    }

    addAppointment(turno) {
        const { id, mascota, duenio, fecha, hora, motivo } = turno;

        // Validar que no falten datos
        if (!id || !mascota || !duenio || !fecha || !hora || !motivo) {
            console.log("Error: Faltan completar datos del turno.");
            return; 
        }

        // Validar que el id no se repita
        const existeId = this.appointments.some(t => t.id === id);
        if (existeId) {
            console.log(`Error: El id ${id} ya está registrado.`);
            return; 
        }

        // Agregar el turno con estado Pendiente
        this.appointments.push({
            id,
            mascota,
            duenio,
            fecha,
            hora,
            motivo,
            estado: "Pendiente"
        });

        // Guardamos los cambios en el archivo JSON
        this.guardarTurnos();
        console.log(`Turno de ${mascota} agregado y guardado con éxito.`);
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

    // NUEVO MÉTODO: eliminarPorId(id)
    eliminarPorId(id) {
        const index = this.appointments.findIndex(t => t.id === id);

        if (index === -1) {
            console.log(`Error: No se puede eliminar. Appointment not found (ID: ${id})`);
            return;
        }

        // Eliminamos el turno del arreglo usando splice
        const eliminado = this.appointments.splice(index, 1);
        
        // Actualizamos el archivo JSON
        this.guardarTurnos();
        console.log(`Turno con ID ${id} eliminado correctamente.`);
        return eliminado;
    }
}

module.exports = AppointmentManager;