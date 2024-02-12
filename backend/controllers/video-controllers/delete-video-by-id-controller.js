const Video = require("../../models/video-model/video-model")

const deleteVideoByIdController = async (req, res) => {
    try {
        const videoId = req.params.id
        // Check if the note with the given ID exists
        const existingVideo = await Video.findById(videoId);

        if (!existingVideo) {
            return res.json({ error: "Video not found" });
        }

        // Find the product by ID and remove it
        
        const deletedVideo = await Video.findByIdAndDelete(videoId);

        

        return res.json({ 
            success: true,
            message: 'Video deleted successfully',
            deletedVideo: deletedVideo
        });
    } catch (error) {
        console.log(error)
    }
}
module.exports = deleteVideoByIdController