const express = require('express');
const router = express.Router();


// post for login

router.route('/login').post(controller)

// get for register
router.route('/register').post(controller)



// optional: delete / logout



module.exports = router;