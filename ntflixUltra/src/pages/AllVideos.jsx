import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/videoDetails.css'
import '../styles/backgroundimage.css'
import { FaWhatsapp } from 'react-icons/fa';


const AllVideos = () => {
    const [videos, setVideos] = useState([]);

    const fetchAllVideos = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/all-videos`);
            if (response.data.success) {
                setVideos(response.data.videos);
            }
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        fetchAllVideos();
    }, []);

    const handleDeleteVideo = async (videoId) => {
        try {
            console.log(videoId)
            const response = await axios.delete(`http://localhost:3000/api/v1/delete-video/${videoId}`);

            if (response.data.success) {
                // If deletion is successful, fetch updated product list
                fetchAllVideos();
            } else {
                console.error('Error deleting product:', response.data.message);
            }
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    return (
        <>
         <div className="background-container">
            {/* Background image */}
            <div className="background-image"></div>
            <a
                href="https://wa.me/923099857198"
                role="button"
            >
                <button type="button" className='pos-bottom btn btn-success pointer'>
                    <FaWhatsapp />
                </button>
            </a>

            {/* riwayati html */}
            <div className='col'>All Videos</div>
            <div className="container">
                <div className="row">
                    {videos.map((video) => (
                        <div key={video._id} className="col-md-4 mb-4">
                            <Link className="nav-link" to={`/video/${video._id}`}>
                                <div>
                                    <img src={video.productImageLink} alt={video.title} width={400} className='img-fluid' />
                                </div>
                                <p className='d-inline-block mr-3'>Video Title: {video.title}</p>
                            </Link>
                            {/* Delete button outside the link */}
                            <button className='btn btn-danger mt-2' type="button" onClick={() => handleDeleteVideo(video._id)}>
                                Delete Video
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            </div>
        </>
    );
};

export default AllVideos;

