import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import {
    AppTheme,
    NavBar,
    NavBarLink,
    NavBarSearchSuggestion,
    NavBarSubMenu,
    NavBarThemeSwitch,
    SplashScreen
} from "react-windows-ui";
import Aboutpage from "./pages/about";
import Textareapage from "./pages/textarea";
import Mainpage from './pages/index';

const App = () => {


/*    const [resultText, setResultText] = useState("Please enter your name below π");
    const [name, setName] = useState('');
    const updateName = (e) => setName(e.target.value);
    const updateResultText = (result) => setResultText(result);

    function greet() {
        Greet(name).then(updateResultText);
    }*/
    const [splash, setSplash] = useState(true);

    useEffect(() => {
        setSplash(false);
    }, [])


    return (

            <Router basename={"/"}>
                <SplashScreen
                    duration={3000} /* Add additional delay before page loads */
                    isVisible={splash}
                    title={"AutocorrectAir"}
                />

                <AppTheme // To make app reactive with theme
                    scheme="system" // Available props - 'light', 'dark' or 'system'
                />

                <NavBar
                    title="AutocorrectAir"
                    shadowOnScroll={true}
                    titleBarMobile={
                        <div style={{display: "flex", justifyContent: "space-between", width: "calc(100% - 60px)"}}>
                            <span className="app-navbar-name">AutocorrectAir</span>
                            <span className="app-navbar-name">δ½ ζηͺε£θ°ηζηΉε°δΊ</span>
                        </div>}
                >
                    {/* Optional component - emphasizes navbar Search funtionality */}
                    <NavBarSearchSuggestion
                        placeholder="ζη΄’..."
                        tooltip="Search"
                        data={[
                            {label: 'home', link: '/', icon: <i className="icons10-home"></i>},
                            {label: 'about', link: '/about', icon: <i className="icons10-home"></i>},
                            {label: 'textarea', link: '/text', icon: <i className="icons10-home"></i>}
                        ]}
                    />
                    <NavBarThemeSwitch/>

                    <h1>εΌε§εδ½!</h1>
                    <div className="app-hr"></div>
                    <NavBarLink
                        to="/"
                        exact={true}
                        text="δΈ»ι‘΅"
                        icon={<i className="icons10-home"></i>}
                    />
                    {/*<NavBarLink
                        to="/page1"
                        text="Page1"
                        icon={<i className="icons10-grid-2"></i>}
                    />

                    <NavBarLink
                        to="/page2"
                        text="Page2"
                        icon={<i className="icons10-columns"></i>}
                    />*/}
                    <NavBarLink
                        to="/text"
                        text="ζζ¬ε€η"
                        icon={<i className="icons10-columns"></i>}
                    />
                    <NavBarSubMenu
                    title={"θ?Ύη½?"}>
                        <NavBarLink
                            to="/"
                            text="Autocorrect θ?Ύη½?"
                            icon={<i className="icons10-columns"></i>}
                        />
                        <NavBarLink
                            to="/"
                            text="δΈ»ι’θ?Ύη½?"
                            icon={<i className="icons10-columns"></i>}
                        />
                        <NavBarLink
                            to="/"
                            text="θ½―δ»Άθ?Ύη½?"
                            icon={<i className="icons10-columns"></i>}
                        />

                    </NavBarSubMenu>
                    <NavBarLink
                        to="/about"
                        text="ε³δΊ"
                        icon={<i className="icons10-columns"></i>}
                    />

                </NavBar>
                <Routes>
                    <Route path="/" element={<Mainpage first={false} />} exact />
                    <Route path="/about" element={<Aboutpage first={false} />} />
                    <Route path="/text" element={<Textareapage first={false} />} />
{/*                    <Route path="/page1" element={} />
                    <Route path="/page2" element={} />*/}
                </Routes>
            </Router>
    )
}

export default App
