const UserService = require("../services/userService.js")
const Result = require("../utils/result.js")
const erroHandler = require('../utils/errorHandler.js')

class UserController{
    static async createUser(req,res){
        try {
            const data = req.body
            const newUser = await UserService.createUser(data)
            return Result.created(res,'user ajouter avec succés',{data : newUser})
        } catch (error) {
            return erroHandler(res,error)
        }
    }
    static async getAllUser(req,res){
        try {
            const list = await UserService.getAllUser()
            return Result.Ok(res,'liste des users',list)
        } catch (error) {
            return erroHandler(res,error)
        }
    }

    static async getUserById(req,res){
        try {
            const id = req.params.id
            const user = await UserService.getUserById(id)
            return Result.Ok(res,'detail user',user)
        } catch (error) {
            return erroHandler(res,error)
        }
    }
}

module.exports = UserController