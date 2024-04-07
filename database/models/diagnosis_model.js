module.exports = (sequelise_instance, Sequelize,) => {
    const Diagnosis = sequelise_instance.define("diagnosis", {
        diagnosis_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        sadness: {
            type: Sequelize.STRING,
        },
        euphoric: {
            type: Sequelize.STRING,
        },
        exhausted: {
            type: Sequelize.STRING,
        },
        sleep_dissorder: {
            type: Sequelize.STRING,
        },
        mood_swing: {
            type: Sequelize.STRING,
        },
        suicidal_thoughts: {
            type: Sequelize.STRING,
        },
        anorexia: {
            type: Sequelize.STRING,
        },
        authority_respect: {
            type: Sequelize.STRING,
        },
        try_explanation: {
            type: Sequelize.STRING,
        },
        aggressive_response: {
            type: Sequelize.STRING,
        },
        ignore_and_move_on: {
            type: Sequelize.STRING,
        },
        nervous_breakdown: {
            type: Sequelize.STRING,
        },
        admit_mistakes: {
            type: Sequelize.STRING,
        },
        overthinking: {
            type: Sequelize.STRING,
        },
        sexual_activity: {
            type: Sequelize.STRING,
        },
        concentration: {
            type: Sequelize.STRING,
        },
        optimism: {
            type: Sequelize.STRING,
        },
        patientID: {
            type: Sequelize.UUID,
            references: {
                model: "patients",
                key: 'patient_ID'
            }
        }

    });

    return Diagnosis;
}