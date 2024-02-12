import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';


const VideoDetails = () => {
    const [Video, setVideos] = useState(null);
    const { id } = useParams();

    const fetchVideoDetails = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/api/v1/video/${id}`);
            console.log(response.data);
            console.log(response.data.video);

            if (response.data.success) {
                setVideos(response.data.video);
            }
        } catch (error) {
            console.error('Error fetching product details:', error);
        }
    };

    useEffect(() => {
        fetchVideoDetails();
    }, []);

    return (
        <div>
            <h2>Video Details</h2>
            {Video ? (
                <div>
                    <div>
                        {/* Video controls */}
                        {Video.productVideoLink && (
                            <div className='container'>
                                <video width={800} controls autoPlay>
                                    <source src={Video.productVideoLink} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            </div>
                        )}
                    </div>
                    {/* Display product details */}
                    <div>
                        <img src={Video.productImageLink} alt={Video.title} width={400} />
                    </div>
                    <p>Title: {Video.title}</p>
                    <p>Description: {Video.description}</p>
                   

                    
                </div>
            ) : (
                <p>No Video available</p>
            )}

            {/* Update button */}
            <Link className="nav-link" to={`/update-product/${id}`}>
                <button type="button">Update</button>
            </Link>
        </div>
    );
};

export default VideoDetails;
