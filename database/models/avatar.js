

module.exports = (sequelise_instance, Sequelize) => {
    Avatar = sequelise_instance.define("avatars", {
        pic_ID: {
            type: Sequelize.UUID,
            defaultValue: Sequelize.UUIDV4,
            primaryKey: true,
        },
        doctorID: {
            type: Sequelize.UUID,
            unique:true,
            references: {
              model: "doctors",
              key: 'doc_ID',
            },
          },
        file_name: {
            type:Sequelize.STRING
        }
    });

    return Avatar;
}