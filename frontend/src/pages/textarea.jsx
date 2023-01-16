import {Button, NavPageContainer, TextArea} from "react-windows-ui";
import {useState} from "react";

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
                alignItems:"center",
                flex:"auto",
                right:"auto"
            }}
            >
                <Button icon={<i></i>} value={"格式化"} type={"primary"} onClick={()=>{}}/>
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