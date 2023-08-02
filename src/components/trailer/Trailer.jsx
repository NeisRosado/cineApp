import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getVideoAndSynopsis } from '../../services/getApi';
import './trailer.scss';

const Trailer = () => {
    const { idMovie } = useParams();
    const [video, setVideo] = useState(null);
    const [synopsis, setSynopsis] = useState(null);

    useEffect(() => {
        const fetchVideoAndSynopsis = async () => {
            const { video, synopsis } = await getVideoAndSynopsis(idMovie);
            setVideo(video);
            setSynopsis(synopsis);
        };

        fetchVideoAndSynopsis();
    }, [idMovie]);

    if (!video || !synopsis) {
        return <div>Loading...</div>;
    }

    return (
        <div className="trailer">
            <div className="trailer__video">
                <h3>Trailer</h3>
                <iframe
                    src={`https://www.youtube.com/embed/${video.key}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                ></iframe>
            </div>
            <div className="trailer__synopsis">
                <h2>Sinopsis</h2>
                <p>{synopsis}</p>
            </div>
        </div>
    );
};

export default Trailer;

