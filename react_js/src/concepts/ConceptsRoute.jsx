import { Route, Routes } from "react-router-dom";
// import BasicOfReactJs from "./01BasicsOfReactJs.jsx";
import ConceptsMenu from "./01ConceptsMenu.jsx";

// const HookExamplesRoute = {
//   path: "marimarji",
//   element: <ConceptsMenu />,

//   children: [
//     {
//       path: "basciofreactjs",
//       element: <>This will contain basic of ReactJs Data</>,
//     },
//     {
//       path: "component",
//       element: <>Components in ReactJs</>,
//     },
//     {
//       path: "jsx",
//       element: <>JSX Example</>,
//     },
//   ],
// };


// const HookExamplesRoute = {
//   path: "marimarji",
//   element: <ConceptsMenu />,
//   children: [
//     { path: "basciofreactjs", element: <>This will contain basic of ReactJs Data</> },
//     { path: "component", element: <>Components in ReactJs</> },
//     { path: "jsx", element: <>JSX Example</> },
//   ],
// };

const HookExamplesRoute = () => {
    return (
        <Routes>
            <Route path="/marimarji" element={<ConceptsMenu />}>
                <Route path="basciofreactjs" element={<>this will contain basic of reactJs Data  </>} />
                <Route path="component" element={<>components in reactjs  </>} />
                <Route path="jsx" element={<>JSX example</>} />
            </Route>
        </Routes>

    );
}

export default HookExamplesRoute;