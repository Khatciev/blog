import { Suspense, useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Route, Routes } from "react-router-dom";

import "./styles/index.scss";

import { useTheme } from "./providers/ThemeProvider";
import { classNames } from "shared/lib/classNames/classNames";
import { AboutPage } from "pages/AboutPage";
import { MainPage } from "pages/MainPage";


const App = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Tooogle</button>
            <div>
                <Link to={'/'}>Main</Link>
                <Link to={'/about'}>About</Link>
            </div>


            <Suspense fallback={<div>Loading................</div>}>
                <Routes>
                    <Route path={'/'} element={<MainPage />} />
                    <Route path={'/about'} element={<AboutPage />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;

