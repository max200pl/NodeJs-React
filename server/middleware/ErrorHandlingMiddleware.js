const ApiError = require("../error/ApiError")

module.exports = function (err, req, res, next) { // функция в данном случае есть middleware 
    if (err instanceof ApiError) { // если класс ошибки ApiError
        return res.status(err.status).json({ message: err.message })
    }

    return res.status(500).json({ message: "Непредвиденная ошибка!" })
}