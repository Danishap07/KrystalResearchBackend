const express = require('express');
const contactUs = require('../controllers/contactusController');
const router = express.Router()

router.route('/').get((req, res) => {
    res.status(200).json({ status: true, message: "API is Awesome."})
})

router.route('/contact-us').post(contactUs);

module.exports = router