const mongoose = require('mongoose');
const { Schema } = mongoose;

const videoSchema = new Schema({
    title: String,
    description: String,
     productImageLink: String,
    productVideoLink: String,
}, {
    timestamps: true,
});

const Video = mongoose.model('videos',videoSchema)

module.exports = Video