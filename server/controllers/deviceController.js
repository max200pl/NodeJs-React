//* Создаем для каждого роутера соответствующий контроллер 

const uuid = require('uuid')
const path = require('path')
const { Device } = require('../models/models')
const ApiError = require("../error/ApiError")
class DeviceController {
    async create(req, res, next) {  // создание типа 
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg" // после того как фаил получили нужно сгенерировать имя (по имени будем получать этот фил)
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) { } // получение всех типов 

    async getOne(req, res) { } // получение одного девайса по id 
}

module.exports = new DeviceController()