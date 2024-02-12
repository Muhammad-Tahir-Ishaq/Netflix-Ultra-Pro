const Video = require("../../models/video-model/video-model")

const getVideoByIdController = async (req, res) => {
    try {
        const videoId = req.params.id
        // Check if the note with the given ID exists
        const existingVideo = await Video.findById(videoId);

        if (!existingVideo) {
            return res.json({ error: "Video not found" });
        }
        res.json({
            success: true,
            video: existingVideo
        })
    } catch (error) {
        console.log(error)
    }
}

module.exports = getVideoByIdController