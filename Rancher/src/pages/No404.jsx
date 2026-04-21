import { useNavigate } from "react-router-dom";
import "./No404.css";

const No404 = () => {
  const navigate = useNavigate();

  return (
    <div className="n404">
      <div className="txts">
        <p id="no">404</p>
        <p id="msg">Page Not Found</p>
        <p id="we">We can't seem to find the resource you're looking for.</p>
        <button className="n404-btn" onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default No404;
