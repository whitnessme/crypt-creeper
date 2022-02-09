import ImageSlide from './ImageSlide'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function HauntPage() {
    const dispatch = useDispatch();
    const { hauntId } = useParams();
    const haunt = useSelector(state => {
        
    })

    return (
        <div className="haunt-div">
            <ImageSlide />
            <div className='haunt-header'>
                <p className="location"></p>
            </div>
        </div>
    );
};

export default HauntPage;