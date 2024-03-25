
module.exports = (sequelise_instance, Sequelize)=>{
    const SelectedAppointment = sequelise_instance.define("selectedAppointments",{
        selected_apt_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        time:{
            type:Sequelize.STRING
        },
        date: {
            type: Sequelize.STRING
        },
        status:{
            type:Sequelize.STRING  // either active or done
        },
        doctorID: {
            type: Sequelize.UUID,
            references: {
              model: Doctor,
              key: 'doc_ID',
            },
          },

        patientID:{
            type: Sequelize.UUID,
            references:{
                model: Patient,
                key:'patient_ID'
            }
        }
    });

    return SelectedAppointment;
}