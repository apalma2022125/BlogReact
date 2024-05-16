import { useState } from 'react';
import { usePublication } from '../../shared/hooks/usePublication';
import { useComments } from '../../shared/hooks/useComments';
import { Comments } from '../comments/Comments';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faComments } from '@fortawesome/free-solid-svg-icons';
import './PublicationsCard.css';

export const PublicationsCard = ({ publicaciones }) => {
    const { getPublication } = usePublication();
    const { getComments } = useComments();
    const [selectedId, setSelectedId] = useState(null);
    const [showComments, setShowComments] = useState(false);

    const handleCommentClick = async (id) => {
        const publication = await getPublication(id);
        setSelectedId(publication);
        getComments(id);
        setShowComments(true);
    };

    const handleCloseComments = () => {
        setShowComments(false);
        setSelectedId(null);
    };

    if (!Array.isArray(publicaciones)) {
        return <div>No hay publicaciones disponibles</div>;
    }

    const getImagePath = (publicacion) => {
        switch (publicacion.title) {
            case 'Kinepolis':
                return '../../../public/Kinepolis.jpg';
            case 'TonnysKinal':
                return '../../../public/TonnysKinal.png';
            case 'Api para Adopcion de mascotas':
                return '../../../public/mas.jpg';
            default:
                return '../../../public/notFound.jpg';
        }
    };

    const getGithubUrl = (title) => {
        switch (title) {
            case 'Kinepolis':
                return 'https://github.com/agonzalez2022198/KinePolis.git';
            case 'TonnysKinal':
                return 'https://cetkinal-my.sharepoint.com/:f:/g/personal/apalma-2022125_kinal_edu_gt/EmHoF_Ojm-FIjKsInxYInRUBw_4Cl9PoTQu0O-ctABHWPA?e=aI9IML';
            case 'Api para Adopcion de mascotas':
                return 'https://github.com/apalma2022125/API.git';
            default:
                return '#';
        }
    };

    return (
        <div className="container">
            {publicaciones.map((publicacion, index) => (
                <div className="card" key={index}>
                    <div className="card__header">
                        <img src={getImagePath(publicacion)} alt={publicacion.title} className="card__image" />
                    </div>
                    <div className="card__body">
                        <div className="info">
                            <h4>{publicacion.title}</h4>
                        </div>
                        <div className="text">
                            <p>{publicacion.descript}</p>
                        </div>
                        <div className="card__footer">
                            <a href={getGithubUrl(publicacion.title)} target="_blank" rel="noopener noreferrer" className="icon-button">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <button onClick={() => handleCommentClick(publicacion._id)} className="icon-button">
                                <FontAwesomeIcon icon={faComments} />
                            </button>                            
                        </div>
                    </div>
                </div>
            ))}
            {showComments && selectedId && (
                <div className="comments-modal">
                    <Comments publiUnica={selectedId} onClose={handleCloseComments} />
                </div>
            )}
        </div>
    );
};
