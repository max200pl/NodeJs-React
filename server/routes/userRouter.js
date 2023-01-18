const Router = require('express')
const router = new Router()

router.post('/registration',) // регистрация 
router.post('/login',) // авторизация 
router.get('/auth', (req, res) => {
    res.json({ message: 'WORKING' })
})  // проверка авторизован пользователь или нет (будет делаться по JVT токену )

module.exports = router