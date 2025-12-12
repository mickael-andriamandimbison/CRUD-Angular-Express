const UserEntityService = require("../services/user_entityService.js");
const Result = require("../utils/result.js");
const erroHandler = require("../utils/errorHandler.js");

class UserEntityController{
    static async getAllUserEntity(req,res){
        try {
            const list = await UserEntityService.getAllUserEntity()
            return Result.Ok(res,'liste de tous les userEntity',list)
        } catch (error) {
            return erroHandler(res,error)
        }

    }
    static async getUserEntityById(req,res){
        try {
            const id = req.params.id
            const list = await UserEntityService.getUserEntityById(id)
            return Result.Ok(res,'liste de tous les userEntity',list)
        } catch (error) {
            return erroHandler(res,error)
        }

    }

    static async createUserEntity(req,res){
        try {
            const data = req.body
            const user_entity = await UserEntityService.createUserEntity(data)
            return Result.created(res,"user entity creer avec succés",user_entity)
        } catch (error) {
            return erroHandler(res,error)
        }
    }

    static async deleteUserEntity(req,res){
        try {
            const id = req.params.id
            const deleted = await UserEntityService.deleteUserEntity(id)
            return Result.Ok(res,"user entity supprimer",deleted)
        } catch (error) {
            return erroHandler(res,error)
        }
    }

    static async updateUserEntity(req,res){
        try {
            const id = req.params.id
            const data = req.body
            const updated = await UserEntityService.updateUserEntity(id,data)
            return Result.Ok(res,"user entity modifie",updated)
        } catch (error) {
            return erroHandler(res,error)
        }
    }


}

module.exports = UserEntityController