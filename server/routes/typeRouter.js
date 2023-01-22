const Router = require("express")
const router = new Router()
const typeController = require("../controllers/typeController")

router.post("/", typeController.create) // метод пост чтобы   создавать 
router.get("/", typeController.getAll) // метод get чтобы   получать 

module.exports = router