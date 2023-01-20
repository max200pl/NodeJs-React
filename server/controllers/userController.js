//* Создаем для каждого роутера соответствующий контроллер 
const ApiError = require("../error/ApiError");
class UserController {
    async registration(req, res) { }

    async login(req, res) { }

    async check(req, res, next) {  // авторизован пользователь или нет 
        const { id } = req.query // получаем параметры строки запроса  http://localhost:5001/api/user/auth?id=5&message=adsdadas
        if (!id) {
            return next(ApiError.brandRequest('Не задан ID'))
        }

        res.json(id)
    }
}

module.exports = new UserController() // создаем новый объект созданный с этого класса 