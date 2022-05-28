import {Route, Routes, useNavigate} from "react-router-dom";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Home from "./home/Home";
import Images from "./images/Images";
import {useSelector} from "react-redux";
import {useEffect} from "react";

function AppRouter() {
    const name = useSelector(state => state.GetImages.data.name);
    const navigate = useNavigate()
    useEffect(() => {
        navigate('home')
    }, [])
    return(
        <div className='content__wrapper'>
            <Sidebar />
            <Routes>
                <Route index path='home' element={<Home/>}/>
                <Route path={`categories-${name}`} element={<Images/>}/>
                <Route path='*' element={<Home />}/>
            </Routes>
        </div>
    )
}

export default AppRouter
