import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./_Welcome.scss";
import logo from "../../assets/images/logo.png";

export default function WelcomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/dashboard/table_2");
        }, 2000);
    }, []);

    return (
        <div className="welcome-page">
            <img src={logo} />
        </div>
    );
}
