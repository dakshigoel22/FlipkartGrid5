import { useSelector } from "react-redux";
import "./LLMOutput.css";

import llama from '../assets/images/logo/llama.jpg';

function LLMOutput({ expand, responses }) {
  const username = useSelector(store => store.user.name);

  return <div className={"llm-output-content" + (expand ? ' expanded' : '')}>
    { responses && <div className="regenerate-button">
      <ion-icon name="refresh-circle-outline"></ion-icon>
      Regenerate
    </div> }
    <div className="llm-output-text">
      { responses.map((response) => <div className="llm-response">
        <div className="llm-prompt">
          <div className="user-avatar"> { username[0].toUpperCase() } </div>
          <div className="llm-prompt-output">{ response.prompt }</div>
        </div>

        <div className="llm-output-response">
          <img src={llama} alt="llama-logo" />
          <div className="llm-response-output">{ response.text }</div>
        </div>
      </div> ) }
    </div>
  </div>;
}

export default LLMOutput;
