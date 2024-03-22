

module.exports = (sequelise_instance, Sequelize) => {
    CV = sequelise_instance.define("CVs", {
        cv_ID: {
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
        cv_locator:{
            type:Sequelize.STRING
        }
    })

    return CV;
}