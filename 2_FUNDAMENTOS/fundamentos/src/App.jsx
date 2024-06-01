import Events from "./components/Events";
import FirstComponent from "./components/FirstComponent";
import TemplateExpression from "./components/TemplateExpressions";

import "./App.css";
import Challenge from "./components/Challenge";

function App() {
  return (
    <div>
      <h1>Fundamentos React</h1>
      <FirstComponent></FirstComponent>
      <TemplateExpression></TemplateExpression>
      <Events />
      <Challenge />
    </div>
  );
}

export default App;
