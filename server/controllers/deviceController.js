//* Создаем для каждого роутера соответствующий контроллер 
class DeviceController {
    async create(req, res) { } // создание типа 

    async getAll(req, res) { } // получение всех типов 

    async getOne(req, res) { } // получения одного девайса 
}

module.exports = new DeviceController()