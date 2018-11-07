const router = require("express").Router();
const articleController = require("../../controllers/articleController");
const verifyToken = require("../../public/js/verifyToken");

router
  .route("/usstates")
  .get(articleController.getStates);

router
  .route("/cities/:state")
  .get(articleController.getCities);

// Matches with "/api/articles"
router
  .get("/", function (req, res, next) {
    console.log("getting articles");
    articleController.findAll(req, res, next);
  });
 // .post(articleController.create);

// Matches with "/api/articles/:id"
router
  .route("/:id")
  .get(articleController.getSavedArticle)
  .put(articleController.saveArticle)
  .delete(articleController.deleteArticle);



module.exports = router;
