import { ComponentComposition } from "../routes/ComponentComposition/ComponentComposition";
import { RenderFunctions } from "../routes/RenderFunctions/RenderFunctions";
import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<p>Home!</p>} />
        <Route
          path="/component-composition"
          element={<ComponentComposition />}
        />
        <Route path="/render-functions" element={<RenderFunctions />} />
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
