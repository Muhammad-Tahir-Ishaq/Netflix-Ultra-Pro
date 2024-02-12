import axios from 'axios';
import  { useState } from 'react';


const AddVideo = () => {
    const [formdata, setFormdata] = useState({
        title: '',
        description: '',
        productFile: null, // For storing the selected image file
        videoFile: null,   // For storing the selected video file
    });

    // Input changing function
    const handleChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.value,
        });
    };

    // File input change function
    const handleFileChange = (e) => {
        setFormdata({
            ...formdata,
            [e.target.name]: e.target.files[0], // Store the selected file using the input name
        });
    };

    // Submit function
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Create a FormData object to send both text and file data
            const formData = new FormData();
            formData.append('title', formdata.title);
            formData.append('description', formdata.description);
            // formData.append('price', formdata.price);
            formData.append('productFile', formdata.productFile);
            formData.append('videoFile', formdata.videoFile);

            // Send the FormData to the server using axios, api calling
            const response = await axios.post('http://localhost:3000/api/v1/add-video', formData);

            if (response.data.success) {
                alert('Video added successfully');
            } else {
                console.error('Failed to add video:', response.data.error);
            }
        } catch (error) {
            console.error('Error adding Video:', error);
        }
    };

    return (
        <>
            <div className="container mt-3">
                <h2>Add Video</h2>
                <form onSubmit={handleSubmit}>
                    {/* title */}
                    <div className="mb-3">
                        <label htmlFor="title" className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-control"
                            id="title"
                            name="title"
                            placeholder="Title"
                            value={formdata.title}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* description */}
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Description"
                            value={formdata.description}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* image file input */}
                    <div className="mb-3">
                        <label htmlFor="productFile" className="form-label">Image File</label>
                        <input
                            type="file"
                            className="form-control"
                            id="productFile"
                            name="productFile"
                            accept="image/*"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    {/* video file input */}
                    <div className="mb-3">
                        <label htmlFor="videoFile" className="form-label">Video File</label>
                        <input
                            type="file"
                            className="form-control"
                            id="videoFile"
                            name="videoFile"
                            accept="video/*"
                            onChange={handleFileChange}
                            required
                        />
                    </div>

                    {/* submit */}
                    <button type="submit" className="btn btn-primary">Add video</button>
                </form>
            </div>
        </>
    );
};

export default AddVideo;
