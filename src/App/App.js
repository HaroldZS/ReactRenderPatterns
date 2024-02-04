import { ChildrenCloneElement } from "../routes/ChildrenCloneElement/ChildrenCloneElement";
import { ComponentComposition } from "../routes/ComponentComposition/ComponentComposition";
import { BooksExercise } from "../routes/RenderFunctions/BooksExercise/BooksExercise";
import { RenderFunctions } from "../routes/RenderFunctions/RenderFunctions";
import { RenderProps } from "../routes/RenderProps/RenderProps";
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
        <Route
          path="/render-functions/books-exercise"
          element={<BooksExercise />}
        />
        <Route path="/render-props" element={<RenderProps />} />
        <Route
          path="/children-clone-element"
          element={<ChildrenCloneElement />}
        />
        <Route path="*" element={<p>Not found!</p>} />
      </Routes>
    </HashRouter>
  );
}

export default App;
