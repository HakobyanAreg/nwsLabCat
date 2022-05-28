import './Sidebar.scss'

function Sidebar() {
    return (
        <div className='sidebar__wrapper'>
            <div className='sidebar'>
                <div className='sidebar__list-wrapper'>
                    <ul className='sidebar__list'>
                        <li className='sidebar__list-item'>
                            <div className="sidebar__logo-wrapper">
                                <img src='../../../assets/img/favicon.png' className='sidebar__logo'/>
                            </div>
                        </li>
                        {
                            data.data.map(({name, id}) => (
                                <li className='sidebar__list-item' onClick={(e) => getImages(id, name)} key={name + id}>
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
