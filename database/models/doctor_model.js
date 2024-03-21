const bcrypt = require('bcrypt');


module.exports = (sequelise_instance, Sequelize) => {

    Doctor = sequelise_instance.define("doctors", {
        doc_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
        },
        gender: {
            type: Sequelize.STRING,

        },
        rate: {
            type: Sequelize.DOUBLE,
        },
        hospitalName: {
            type: Sequelize.STRING,
        },
        pro_title: {
            type: Sequelize.STRING,
        },
        med_specialty: {
            type: Sequelize.STRING,
        },
        employment_status: {
            type: Sequelize.STRING,
        },
        password: {
            type: Sequelize.STRING,
        },

    },
        {
            hooks: {
                // Before saving the patient data to the database, hash the password
                beforeCreate: (doctor) => {
                    if (doctor.password) {
                        const saltRounds = 10; // Number of salt rounds for bcrypt hashing
                        return bcrypt.hash(doctor.password, saltRounds).then(hash => {
                            doctor.password = hash;
                        });
                    }
                },
                // You can add a hook for beforeUpdate if you want to handle password changes
            }
        }
    )
    return Doctor;
}