//* Создаем для каждого роутера соответствующий контроллер 

const uuid = require('uuid')
const path = require('path')
const { Device, DeviceInfo } = require('../models/models')
const ApiError = require("../error/ApiError")
class DeviceController {
    async create(req, res, next) {  // создание типа 
        try {
            const { name, price, brandId, typeId, info } = req.body
            const { img } = req.files
            let fileName = uuid.v4() + ".jpg" // после того как фаил получили нужно сгенерировать имя (по имени будем получать этот фил)
            img.mv(path.resolve(__dirname, '..', 'static', fileName))

            if (info) { // если передали info в теле запроса 
                info = JSON.parse(info) // парсим массив со строки в объекты 
                info.forEach(i => {
                    DeviceInfo.create({
                        title: i.title,
                        description: i.description,
                        deviceId: device.id
                    })
                });
            }

            const device = await Device.create({ name, price, brandId, typeId, img: fileName });

            return res.json(device)
        } catch (e) {
            next(ApiError.badRequest(e.message))
        }
    }

    async getAll(req, res) { // функция для получения всех девайсов 
        let { brandId, typeId, limit, page } = req.query; // получаем из строки запроса  
        page = page || 1 // устанавливаем дефолтные значения 
        limit = limit || 9 // под 9 устройств на каждой странице
        let offset = page * limit - limit // отступ для следующих страниц 

        // limit, page -> для постраничного вывода данных 
        // page -> текущая страница
        // limit -> количество девайсов на странице 

        let devices;

        if (!brandId && !typeId) {
            devices = await Device.findAndCountAll({ offset, limit }) // запрос к базе данных 
            // findAll для поиска всех товаров 
            // findAndCountAll для подсчета страниц уже на фронте (надо знать общее количество товаров которое вернется по заданному запросу )
            // в поле row получаем количество товаров которые находятся на текущей странице      
        }
        if (brandId && !typeId) {
            devices = await Device.findAndCountAll({ where: { brandId }, offset, limit })
        }
        if (!brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId }, offset, limit })
        }
        if (brandId && typeId) {
            devices = await Device.findAndCountAll({ where: { typeId, brandId }, offset, limit })
        }

        return res.json(devices) // возвращаем массив из этих девайсов
    }

    async getOne(req, res) { } // получение одного девайса по id 
}

module.exports = new DeviceController()