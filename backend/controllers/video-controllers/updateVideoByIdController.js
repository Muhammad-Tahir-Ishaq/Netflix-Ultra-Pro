const Video = require("../../models/video-model/video-model")

const updateVideoByIdController = async (req, res) => {
    try {
        const videoId = req.params.id
        // Check if the note with the given ID exists
        const existingVideo = await Video.findById(videoId);

        if (!existingVideo) {
            return res.json({ error: "Video not found" });
        }

        // write logic to update the product
        // Assuming you have an object containing the updated fields in the request body
        const updatedVidoData = req.body;

        // Update the existing product
        const updatedVideo = await Video.findByIdAndUpdate(
            videoId,
            updatedVidoData,
            { new: true } // This option ensures that the updated product is returned
        );

        if (updatedVideo) {
            return res.json({ success: true, video: updatedVideo });
        } else {
            return res.json({ error: "Failed to update video" });
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = updateVideoByIdController