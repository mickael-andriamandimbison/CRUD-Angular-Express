const { where } = require('sequelize')
const User = require('../models/user')
const createErr = require ("../utils/createError")

class UserService{

    static async createUser(data){
        const isExist = await User.findOne({where : {
            email:data.email
        }})
        if(isExist) return createErr('email deja utiliseé',409)
        
        const newUser = await User.create(data)
        return newUser
    }

    static async getAllUser(){
        const list = await User.findAll()
        return list
    }

    static async getUserById(id){
        const user = await User.findByPk(id)
        if(!user) return createErr('Aucun user correspondant ',404)
        return user
    }

    static updateUserById(id){

    }

    static deleteUserById(id){

    }
}

module.exports = UserService