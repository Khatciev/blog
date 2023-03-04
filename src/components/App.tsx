import {Suspense, useContext, useState} from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import "../styles/index.scss";
import {Theme, ThemeContext} from "../theme/ThemeContext";
import {useTheme} from "../theme/useTheme";
import {classNames} from "../helpers/classNames/classNames";


const App = () => {
  const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Tooogle</button>
            <div>
                <Link to={'/'}>Main</Link>
                <Link to={'/about'}>About</Link>
            </div>


            <Suspense fallback={<div>Loading................</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPageAsync />} />
                    <Route path={'/about'} element={<AboutPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;

