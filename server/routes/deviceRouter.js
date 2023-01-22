const Router = require("express")
const router = new Router()
const deviceController = require("../controllers/deviceController")

router.post("/", deviceController.create) // метод пост чтобы   создавать 
router.get("/", deviceController.getAll) // метод get чтобы   получать 

router.get("/:id", deviceController.getOne) //для того что бы получить отдельно взятый девайс после того как мы перешли на страницу подробной информации 

module.exports = router