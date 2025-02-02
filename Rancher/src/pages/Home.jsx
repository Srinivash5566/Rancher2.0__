// src/pages/Home.jsx
import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css";
import { useState, useEffect } from "react";
import { useAuth } from "../AuthContext"; // Import the useAuth hook
import Theme from "../multfun/Theme";

const Home = () => {
  const cropData = null;
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth(); // Access isLoggedIn and logout from context
  const [search, setSearch] = useState("");
  const [filteredCrops, setFilteredCrops] = useState(cropData);

  // Use useEffect to filter crops whenever search term changes
  useEffect(() => {
    if (search === "") {
      setFilteredCrops(cropData); // If search is empty, show all crops
    } else {
      const results = cropData.filter((crop) =>
        crop.cropName.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredCrops(results); // Update the filtered crops
    }
  }, [search]);

  const defaultImage = "https://placehold.co/600x400";
  function getImageUrl(img) {
    return img ? img : defaultImage;
  }

  return (
    <div className="app">
      <div className="headDiv">
        <header className="header">
          <div className="logo">Rancher</div>
          <input
            type="text"
            placeholder="Type to Search..."
            className="search-bar"
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
          <Link to="/" className={component.nav_link_in}>
            Home
          </Link>
          <Link to="/HarvestingEngines" className={component.nav_link}>
            Harvesting Engines
          </Link>
          <Link to="/Community" className={component.nav_link}>
            Community
          </Link>
          {/* <Link to="#" className={component.nav_link}>
            About
          </Link> */}
        </nav>
      </div>
      <main className={component.home_grid}>
        {filteredCrops.map((crop, index) => (
          <div
            key={index}
            className={component.home_card}
            onClick={() => navigate(`/${crop.cropName}`)}
          >
            <img src={getImageUrl(crop.cropImg)} alt="placeholder" />
            <div className={component.home_card_content}>
              <h3>{crop.cropName}</h3>
              <h6></h6>
              {/*_______________________________new__________crop.Price                */}
            </div>
          </div>
        ))}
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
