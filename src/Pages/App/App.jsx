import Home from "../Home";
import { BWMcontextProvider } from "../../Context";

import { useRoutes, BrowserRouter } from "react-router-dom";
import NotFound from "../NotFound";
import Navbar from "../../Components/Navbar/index.jsx";
import "./App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return routes;
};

const App = () => {
  return (

    <BWMcontextProvider>
      <BrowserRouter>
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </BWMcontextProvider>
  );
};

export default App;

