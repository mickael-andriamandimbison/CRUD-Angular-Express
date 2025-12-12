const UserService = require("../services/userService.js")
const Result = require("../utils/result.js")
const erroHandler = require('../utils/errorHandler.js')

class UserController{
    static async getAllUser(req,res){
        try {
            const list = await UserService.getAllUser()
            return Result.Ok(res,'liste des users',list)
        } catch (error) {
            return erroHandler(res,error)
        }
    }
}

module.exports = UserController