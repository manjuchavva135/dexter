const express = require('express');
const router = express.Router();
const {addstreamdetails, getallstreams,getbyname } = require('../controllers/livestream');




router.post('/livestream',addstreamdetails);

router.get('/livestream/find', getallstreams);
router.get('/livestream/findname', getbyname);






module.exports = router;