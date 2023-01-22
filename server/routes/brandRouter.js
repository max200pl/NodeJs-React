const Router = require("express")
const router = new Router()
const brandController = require("../controllers/brandController")

router.post("/", brandController.create) // метод пост чтобы   создавать 
router.get("/", brandController.getAll) // метод get чтобы   получать 

module.exports = router