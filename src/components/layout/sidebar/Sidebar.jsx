import './Sidebar.scss'
import {useDispatch, useSelector} from "react-redux";
import {useMemo} from "react";
import getCategoriesAction from "../../../store/actions/categories/getCategories";
import logo from '../../../assets/img/favicon.png'
import {Link, Navigate, useNavigate} from "react-router-dom";
import getImagesAction from "../../../store/actions/images/getImages";

function Sidebar() {
    const dispatch = useDispatch()
    useMemo(() => {
        dispatch(getCategoriesAction())
    }, [])

    const data = useSelector(state => state.GetCategories)
    const navigate = useNavigate()
    const getImages = (id, name) => {
        dispatch(getImagesAction(id, name, 10))
        navigate(`categories-${name}`)
    }

    return (
        <div className='sidebar__wrapper'>
            <div className='sidebar'>
                <div className='sidebar__list-wrapper'>
                    <ul className='sidebar__list'>
                        <li className='sidebar__list-item'>
                            <div className="sidebar__logo-wrapper">
                                <Link to={'home'}>
                                    <img src={logo} className='sidebar__logo'/>
                                </Link>
                            </div>
                        </li>
                        {
                            data.data.map(({name, id}) => (
                                <li className='sidebar__list-item' key={id + '' + name} onClick={() => getImages(id, name)}>
                                    <span className='sidebar__list-item-btn'>
                                        {name}
                                    </span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
