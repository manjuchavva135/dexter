const express = require('express');
const router = express.Router();
const {addstreamdetails, getallstreams,getbyname,getbystreamlink} = require('../controllers/livestream');
const { requireSignin, isAuth } = require('../controllers/auth');



router.post('/livestream',addstreamdetails);

router.get('/livestream/find',getallstreams);
router.get('/livestream/findname', getbyname);
router.delete('/livestream/findstreamlink', getbystreamlink);






module.exports = router;