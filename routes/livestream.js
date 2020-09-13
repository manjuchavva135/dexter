const express = require('express');
const router = express.Router();
const {addstreamdetails, getallstreams,getbyname } = require('../controllers/livestream');
const { requireSignin, isAuth } = require('../controllers/auth');



router.post('/livestream',addstreamdetails);

router.get('/livestream/find', requireSignin, isAuth,getallstreams);
router.get('/livestream/findname', getbyname);






module.exports = router;