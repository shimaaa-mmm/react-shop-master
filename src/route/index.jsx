import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {WebLayout} from "../layout/web/WebLayout.jsx";
import webRoutes from "./webRoutes.jsx";

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<WebLayout/>}>
                    {webRoutes?.map((route, index) => (
                        <Route key={index} path={route.path} element={route.element}></Route>
                    ))}
                </Route>
            </Routes>
        </Router>
    )
}