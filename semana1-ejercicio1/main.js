class AppointmentManager {
    constructor() {
        this.appointments = [];
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
            console.log("Error: El id ya está registrado.");
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
}


// Pruebas
const gestor = new AppointmentManager();

// Agregando turnos
gestor.addAppointment({ id: 1, mascota: "Fido", duenio: "Carlos", fecha: "2026-08-15", hora: "10:00", motivo: "Vacuna" });
gestor.addAppointment({ id: 2, mascota: "Michi", duenio: "Ana", fecha: "2026-08-16", hora: "11:30", motivo: "Control" });

// Probando validaciones (faltan datos y id repetido)
gestor.addAppointment({ id: 3, mascota: "Rex", duenio: "Luis" }); 
gestor.addAppointment({ id: 1, mascota: "Bobby", duenio: "Marta", fecha: "2026-08-17", hora: "09:00", motivo: "Baño" }); 

// Buscando turnos
console.log(gestor.getAppointmentById(2));
gestor.getAppointmentById(99); 

// Mostrar todos en forma de tabla
console.table(gestor.getAppointments());