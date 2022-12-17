import {Button, NavPageContainer} from "react-windows-ui";
import {Test} from "../../wailsjs/go/main/App";
import {useState} from "react";

const Aboutpage = (pop) => {
    const [resultText, setResultText] = useState("");
    const updateResultText = (result) => setResultText(result);

    return (
        <NavPageContainer
            hasPadding={true}
            animateTransition={true}>
            <h1>关于</h1>
            <h1>Autocorrect Air</h1>
            <h3>开发者: Maicarons</h3>
            <h3>项目地址: <a style={{color: "skyblue"}} href='https://github.com/Maicarons2022/autocorrectAir'>Maicarons2022/autocorrectAir</a></h3><wbr/>
            <h3>鸣谢</h3>
            <p>字体: 阿里普惠体</p>
            <p>UI:  react-windows-ui</p>

        </NavPageContainer>
    )
}

export default Aboutpage;