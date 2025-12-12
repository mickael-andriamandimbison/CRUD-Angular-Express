const { where } = require('sequelize')
const User = require('../models/user')
const createErr = require ("../utils/createError")

class UserService{

    static async createUser(data){
        const isExist = await User.findOne({where : {
            email:data.email
        }})

        if(isExist) throw createErr('email deja utiliseé',409)
        
        const newUser = await User.create(data)

        return newUser
    }

    static async getAllUser(){
        const list = await User.findAll()
        return list
    }

    static async getUserById(id){
        const user = await User.findByPk(id)
        if(!user) throw createErr('Aucun user correspondant ',404)
        return user
    }

    static async updateUserById(id,data){
        const user = await User.findByPk(id)
        if(!user) throw createErr('aucun user',404)
        
        const userUptade = await user.update(data)

        return userUptade
    }

    static async deleteUserById(id){
        const user = await User.findByPk(id)
        if(!user) throw createErr('aucun user',404)

        await user.destroy()
        return null
    }
}

module.exports = UserService