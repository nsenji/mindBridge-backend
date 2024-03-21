const bcrypt = require('bcrypt');


module.exports = (sequelise_instance, Sequelize) => {
    const Patient = sequelise_instance.define("patients", {
        patient_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING,
        },

    },
        {
            hooks: {
                // Before saving the patient data to the database, hash the password
                beforeCreate: (patient) => {
                    if (patient.password) {
                        const saltRounds = 10; // Number of salt rounds for bcrypt hashing
                        return bcrypt.hash(patient.password, saltRounds).then(hash => {
                            patient.password = hash;
                        });
                    }
                },
                // You can add a hook for beforeUpdate if you want to handle password changes
            }
        }
    );

    return Patient;
}


