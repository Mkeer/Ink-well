const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')


// Register User
router.post('/register', userCtrl.registerUser)
// Login User
router.post('/login', userCtrl.loginUser)

// // Send verification email
// router.post('/send-verification-email', userCtrl.sendVerificationEmail)

// // Verify Token
// router.get('/verify/:token', userCtrl.verifyToken)

// verify Token
router.get('/verify', userCtrl.verifiedToken)

module.exports = router