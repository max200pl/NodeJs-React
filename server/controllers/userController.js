//* Создаем для каждого роутера соответствующий контроллер 
class UserController {
    async registration(req, res) { }

    async login(req, res) { }

    async check(req, res) {  // авторизован пользователь или нет 
        const { id } = req.query // получаем параметры строки запроса  http://localhost:5001/api/user/auth?id=5&message=adsdadas
        res.json(id)
    }
}

module.exports = new UserController()