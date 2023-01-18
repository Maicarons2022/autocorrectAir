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


/*    const [resultText, setResultText] = useState("Please enter your name below 👇");
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
                            <span className="app-navbar-name">你把窗口调的有点小了</span>
                        </div>}
                >
                    {/* Optional component - emphasizes navbar Search funtionality */}
                    <NavBarSearchSuggestion
                        placeholder="搜索..."
                        tooltip="Search"
                        data={[
                            {label: 'home', link: '/', icon: <i className="icons10-home"></i>},
                            {label: 'about', link: '/about', icon: <i className="icons10-home"></i>},
                            {label: 'textarea', link: '/text', icon: <i className="icons10-home"></i>}
                        ]}
                    />
                    <NavBarThemeSwitch/>

                    <h1>开始创作!</h1>
                    <div className="app-hr"></div>
                    <NavBarLink
                        to="/"
                        exact={true}
                        text="主页"
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
                        text="文本处理"
                        icon={<i className="icons10-columns"></i>}
                    />
                    <NavBarSubMenu
                    title={"设置"}>
                        <NavBarLink
                            to="/"
                            text="Autocorrect 设置"
                            icon={<i className="icons10-columns"></i>}
                        />
                        <NavBarLink
                            to="/"
                            text="主题设置"
                            icon={<i className="icons10-columns"></i>}
                        />
                        <NavBarLink
                            to="/"
                            text="软件设置"
                            icon={<i className="icons10-columns"></i>}
                        />

                    </NavBarSubMenu>
                    <NavBarLink
                        to="/about"
                        text="关于"
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
