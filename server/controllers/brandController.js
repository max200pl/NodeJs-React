//* Создаем для каждого роутера соответствующий контроллер 
const { Brand } = require('../models/models')
const ApiError = require("../error/ApiError");
class BrandController {
    async create(req, res) {
        const { name } = req.body // тело запроса в post методе 
        const brand = await Brand.create({ name })
        return res.json(brand)
    } // создание типа 

    async getAll(req, res) {
        const brands = await Brand.findAll()
        return res.json(brands)
    } // получение всех типов 
}

module.exports = new BrandController()