const User = require('../models/user')
const createErr = require ("../utils/createError")

class UserService{
    static async getAllUser(){
        const list = await User.findAll()
        return list
    }

    static getUserById(id){

    }

    static updateUserById(id){

    }

    static deleteUserById(id){

    }
}

module.exports = UserService