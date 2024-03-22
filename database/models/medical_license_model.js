

module.exports = (sequelise_instance, Sequelize) => {
    MedicalLicense = sequelise_instance.define("medicalLicenses", {
        license_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        doctorID: {
            type: Sequelize.UUID,
            references: {
              model: Doctor,
              key: 'doc_ID',
            },
          },
        license_locator:{
            type:Sequelize.STRING
        }
    });

    return MedicalLicense;
}