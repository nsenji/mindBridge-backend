
module.exports = (sequelise_instance, Sequelize)=>{
    const Payment = sequelise_instance.define("payments", {
        payment_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        date:{
            type:Sequelize.STRING
        },
        time:{
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.DOUBLE
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

    return Payment;
}