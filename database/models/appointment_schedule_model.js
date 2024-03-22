
module.exports = (sequelise_instance, Sequelize) => {
    const AppointmentSchedule = sequelise_instance.define("appointmentSchedules", {
        apt_schedule_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        date: {
            type: Sequelize.STRING
        },
        time: {
            type: Sequelize.STRING
        },
        status:{
            type:Sequelize.STRING
        },
        doctorID: {
            type: Sequelize.UUID,
            references: {
              model: Doctor,
              key: 'doc_ID',
            },
          },
    });

    return AppointmentSchedule;
}
