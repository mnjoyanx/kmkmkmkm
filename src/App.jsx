import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate, Navigate } from "react-router-dom";

import { WelcomePage, LoginPage, Table_2Page } from "./pages/index";

import Request from "./Requests";

const ProtectedRoute = ({ isAuthenticated, children }) => {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    return children;
};

import Root from "./layout/Root";

import "antd/dist/antd.css";

function App() {
    const token = localStorage.getItem("token");

    const navigate = useNavigate();

    useEffect(() => {
        Request.checkToken(token)
            .then((res) => {
                console.log(res);
            })
            .catch((err) => {
                localStorage.removeItem("token");
                navigate("/login");
            });
    }, []);

    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute isAuthenticated={token}>
                            <Root />
                        </ProtectedRoute>
                    }
                >
                    <Route path="/dashboard/table_2" element={<Table_2Page />} />
                </Route>
                <Route path="/login" element={<LoginPage />} />
            </Routes>
        </div>
    );
}

export default App;
