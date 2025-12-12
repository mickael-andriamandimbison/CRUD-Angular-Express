const User = require('./user')
const Entity = require('./entity')
const UserEntity = require("./userEntity")

User.hasMany(UserEntity,{foreignKey : 'id_User'})
UserEntity.belongsTo(User ,{foreignKey : 'id_User'} )

Entity.hasMany(UserEntity,{foreignKey : 'id_Entity'})
UserEntity.belongsTo(Entity ,{foreignKey : 'id_Entity'} )


module.exports = {
    User,
    UserEntity,
    Entity
}