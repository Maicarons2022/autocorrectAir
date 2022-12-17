import './App.css';
import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from './pages/index';
import {SplashScreen,AppTheme, NavBar, NavBarLink, NavSearchSuggestion, NavThemeSwitcher} from "react-windows-ui";
import Aboutpage from "./pages/about";
import Textareapage from "./pages/textarea";


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
                            <span className="app-navbar-name">中文格式化</span>
                        </div>}
                >
                    {/* Optional component - emphasizes navbar Search funtionality */}
                    <NavSearchSuggestion
                        placeholder="搜索..."
                        tooltip="Search Tooltip"
                        data={[
                            {label: 'home', link: '/', icon: <i className="icons10-home"></i>},
                            {label: 'about', link: '/about', icon: <i className="icons10-home"></i>},
                            {label: 'textarea', link: '/text', icon: <i className="icons10-home"></i>}
                        ]}
                    />
                    <NavThemeSwitcher/>

                    <h1>Pages</h1>
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
