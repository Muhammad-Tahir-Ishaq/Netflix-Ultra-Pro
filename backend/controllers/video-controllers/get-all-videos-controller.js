const Video = require("../../models/video-model/video-model")

const getAllVideosController = async (req, res) => {
    try {
        const allVideos = await Video.find()
        res.json({
            success: true,
            videos: allVideos
        })
    } catch (error) {
        console.log(error)
    }
    
}
module.exports = getAllVideosController