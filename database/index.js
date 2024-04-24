const Sequelize = require("sequelize");

const sequelise_instance = new Sequelize(process.env.MYSQLDATABASE, process.env.MYSQLUSER, process.env.MYSQLPASSWORD,
    {
        host: process.env.MYSQLHOST,
        port: process.env.MYSQLPORT,
        dialect: "mysql",
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })


const database = {};

database.Sequelize = Sequelize;
database.sequelise_instance = sequelise_instance;


const patient_module = require("./models/patient_model");
const doctor_module = require("./models/doctor_model");
const schedule_appointment = require("./models/appointment_schedule_model");
const diagnosis_module = require("./models/diagnosis_model");
const payment_module = require("./models/payments_model");
const selected_appointments = require("./models/selected_appointment_model")
const avatar_module = require("./models/avatar")

database.Patient = patient_module(sequelise_instance,Sequelize);
database.Doctor = doctor_module(sequelise_instance,Sequelize);
database.AppointmentSchedule = schedule_appointment(sequelise_instance,Sequelize);
database.Diagnosis = diagnosis_module(sequelise_instance,Sequelize);
database.Payment = payment_module(sequelise_instance,Sequelize);
database.SelectedAppointment = selected_appointments(sequelise_instance, Sequelize);
database.Avatar = avatar_module(sequelise_instance,Sequelize);


//Relationships
//Selected Appointements
database.SelectedAppointment.belongsTo(database.Doctor, {foreignKey: 'doctorID', targetKey: 'doc_ID'})
database.SelectedAppointment.belongsTo(database.Patient, {foreignKey: 'patientID', targetKey: 'patient_ID'})
database.Payment.belongsTo(database.Doctor, {foreignKey: 'doctorID', targetKey: 'doc_ID'})

database.Doctor.hasMany(database.SelectedAppointment, {foreignKey: 'doctorID'})
database.Patient.hasMany(database.SelectedAppointment, {foreignKey: 'patientID'})
database.Doctor.hasMany(database.Payment, {foreignKey: 'doctorID'})

module.exports = database;