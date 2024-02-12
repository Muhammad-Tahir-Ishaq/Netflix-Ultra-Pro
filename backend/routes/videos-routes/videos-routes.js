const express = require('express');
const addVideoController = require('../../controllers/video-controllers/add-video-controller');
const getAllVideosController = require('../../controllers/video-controllers/get-all-videos-controller');
const deleteVideoByIdController = require('../../controllers/video-controllers/delete-video-by-id-controller');
const getVideoByIdController = require('../../controllers/video-controllers/getVideoByIdController');
const updateVideoByIdController = require('../../controllers/video-controllers/updateVideoByIdController');
const multipartyMiddleware = require('../../middlewares/fileUploadMiddleware');
const videoRouter = express.Router();


videoRouter.post('/add-video', multipartyMiddleware ,addVideoController)
videoRouter.get('/all-videos', getAllVideosController)
videoRouter.get('/video/:id', getVideoByIdController)
videoRouter.put('/update-video/:id', updateVideoByIdController)
videoRouter.delete('/delete-video/:id', deleteVideoByIdController)

module.exports = videoRouter;