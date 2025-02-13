import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css";
import { useState, useMemo } from "react";
import { useAuth } from "../AuthContext";
import { useCrop } from "../CropContext"; // Import the Crop Context
import Theme from "../multfun/Theme";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const { CropData } = useCrop(); // Get CropData from context
  const [search, setSearch] = useState("");

  // Memoized filtered crops to optimize performance
  const filteredCrops = useMemo(() => {
    if (!search) return CropData;
    return CropData.filter((crop) =>
      crop.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, CropData]);

  return (
    <div className="app">
      <div className="headDiv">
        <header className="header">
          <div className="logo">Rancher</div>
          <input
            type="text"
            placeholder="Type to Search..."
            className="search-bar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="icbtmBox">
            <Theme />
            <div className="auth-buttons">
              {isLoggedIn ? (
                <button className="log-out" onClick={logout}>
                  Log Out
                </button>
              ) : (
                <>
                  <button
                    className="sign-in"
                    onClick={() => navigate("/RegisterPage")}
                  >
                    Sign Up
                  </button>
                  <button
                    className="log-in"
                    onClick={() => navigate("/LoginPage")}
                  >
                    Log In
                  </button>
                </>
              )}
            </div>
          </div>
        </header>

        <nav className={component.nav_bar}>
          <Link to="/" className={component.nav_link_in}>Home</Link>
          <Link to="/HarvestingEngines" className={component.nav_link}>Harvesting Engines</Link>
          <Link to="/Community" className={component.nav_link}>Community</Link>
        </nav>
      </div>

      <main className={component.home_grid}>
        {filteredCrops.map((crop, index) => (
          <div
            key={index}
            className={component.home_card}
            onClick={() => navigate(`/${encodeURIComponent(crop.name)}`)}
          >
            <img src={crop.images.length > 0 ? crop.images[0] : "fallback_image_url"} alt={crop.name} />
            <div className={component.home_card_content}>
              <h3>{crop.name}</h3>
              <div className={component.home_card_price}>
              <h4 className={component.disc}>-{crop.discount}%</h4>
              <h4 className={component.DINR}>₹{(crop.price * (1 - crop.discount / 100)).toFixed(2)}</h4>
              </div>
              <h5>₹{crop.price.toFixed(2)}</h5>
            </div>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
