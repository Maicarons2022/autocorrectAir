import {Button, NavPageContainer} from "react-windows-ui";
import {useState} from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

const Textareapage = (pop) => {

    const [resultText, setResultText] = useState("text");
    const updateResultText = (result) => setResultText(result);
    return (
        <NavPageContainer
            hasPadding={true}
            animateTransition={true}>
            <h1>文本处理</h1>
            <h4>将文本输入或粘贴到这里.</h4>
            <textarea
                style={{
                    width:"80%",
                    height:"20%"
                }}
                id={"t1"}
                value={resultText}
                onChange={()=>{updateResultText(document.getElementById("t1").value)}}>
            </textarea>
            <div style={{
                margin: "auto",
            }}
            >
                <Button  icon={<i className="icons10-home"></i>} value={"格式化"} type={"primary"} onClick={()=>{}}/>
                <Button icon={<i className="icons10-home"></i>} value={"粘贴自剪切板"} type={"primary-outline"} onClick={()=>{
                }}/>

                <CopyToClipboard text={resultText}>
                    <Button
                            icon={<i className="icons10-home"></i>}
                            value={"复制到剪切板"}
                            type={"primary-outline"}
                            onClick={()=>{}}>
                    </Button>
                </CopyToClipboard>
                <Button icon={<i className="icons10-home"></i>} value={"清除"} type={"primary-outline"} onClick={()=>{
                    document.getElementById("t1").value="";
                    document.getElementById("t2").value="";
                }}/>
            </div>
            <div >
                <textarea disabled={true} value={resultText}  style={{
                    width:"80%",
                    height:"300px"
                }}  id={"t2"}>

                </textarea>
            </div>



        </NavPageContainer>
    )
}

export default Textareapage;