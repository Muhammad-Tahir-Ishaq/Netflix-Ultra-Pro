const express = require('express');
const videoRouter = require('./videos-routes/videos-routes');
const router = express.Router();

router.use('/api/v1', videoRouter)

module.exports = router