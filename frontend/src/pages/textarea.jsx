import {Button, NavPageContainer} from "react-windows-ui";
import {Test} from "../../wailsjs/go/main/App";
import {useState} from "react";

const Textareapage = (pop) => {
    const [resultText, setResultText] = useState("");
    const updateResultText = (result) => setResultText(result);

    return (
        <NavPageContainer
            hasPadding={true}
            animateTransition={true}>
            <h1>{pop.first.toString()}</h1>

            <p>{resultText}</p>

            <Button onClick={() => {Test().then(updateResultText)} } value="time"></Button>
        </NavPageContainer>
    )
}

export default Textareapage;