import './Images.scss';
import {useDispatch, useSelector} from "react-redux";
import getImagesAction from "../../store/actions/images/getImages";
import {useState} from "react";

function Images() {
    const data = useSelector(state => state.GetImages.data)
    const dispatch = useDispatch()
    let [limit, setLimit] = useState(10)

    const showMore = (e) => {
        e.preventDefault()
        setLimit(limit += 10)
        dispatch(getImagesAction(data.id, data.name, limit))
    }

    return (
        <div className='categories__images-wrapper'>
            <h1 className='categories__images-title'>
                {data.name}
            </h1>
            <div className='categories__images'>
                {data.data?.length && data.data.map((item, index) => (
                    <div className='images__wrapper' key={item.id}>
                        <img src={item.url} alt={`cat image ${item.id}`} className='image'/>
                    </div>
                ))
                }
            </div>
            {data.data?.length &&
            <div className='categories__btn-wrapper'>
                <button className='categories__btn' onClick={(e) => showMore(e)}>
                    Show More
                </button>
            </div>
            }
        </div>
    )
}

export default Images
