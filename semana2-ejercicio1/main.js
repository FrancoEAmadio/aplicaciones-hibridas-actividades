const AppointmentManager = require('./managers/AppointmentManager.js');

const gestor = new AppointmentManager();

console.log("--- AGREGANDO TURNOS ---");
gestor.addAppointment({ id: 1, mascota: "Fido", duenio: "Carlos", fecha: "2026-08-15", hora: "10:00", motivo: "Vacuna" });
gestor.addAppointment({ id: 2, mascota: "Michi", duenio: "Ana", fecha: "2026-08-16", hora: "11:30", motivo: "Control" });

console.log("\n--- PROBANDO ELIMINAR POR ID ---");
gestor.eliminarPorId(1);

console.log("\n--- LISTADO FINAL EN TABLA ---");
console.table(gestor.getAppointments());