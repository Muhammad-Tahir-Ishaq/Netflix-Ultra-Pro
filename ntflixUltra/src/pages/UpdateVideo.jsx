import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateVideo = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: '',
        description: '',
    });

    const fetchVideoDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/video/${id}`);
            if (response.data.success) {
                const videoData = response.data.video;
                setFormData({
                    title: videoData.title,
                    description: videoData.description,
                     // Convert to string for input type="number"
                });
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };
    useEffect(() => {
        fetchVideoDetails();
    }, [id]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const updateData = {
                title: formData.title,
                description: formData.description,
                // Convert back to number
            };

            const updateResponse = await axios.put(`http://localhost:3000/api/v1/update-product/${id}`, updateData);

            if (updateResponse.data.success) {
                alert('Video updated successfully:');
                navigate(`/video/${id}`);
            } else {
                console.error('Failed to update video:', updateResponse.data.error);
            }
        } catch (error) {
            console.error('Error updating video:', error);
        }
    };

    

    return (
        <>
            <div>Update Product</div>
            <form onSubmit={handleSubmit}>
                {/* title */}
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />
                {/* description */}
                <input
                    type="text"
                    name="description"
                    id="description"
                    placeholder="Description"
                    value={formData.description}
                    onChange={handleChange}
                    required
                />
                {/* price */}
                {/* submit */}
                <button type="submit">Update Video</button>
            </form>
        </>
    );
};

export default UpdateVideo;
