import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import StorePage from "./StorePage";

const RouteSwitch = () => {
    return (
        <BrowserRouter basename={process.env.PUBLIC_URL}>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/storepage" element={<StorePage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;