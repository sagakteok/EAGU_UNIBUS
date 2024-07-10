const router = require("express").Router();
const renderController = require('../controllers/renderController');
 router.get('*',renderController);
module.exports = router;