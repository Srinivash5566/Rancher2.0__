import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css";
import { useState, useMemo } from "react";
import { useAuth } from "../AuthContext";
import { useCrop } from "../CropContext";
import Theme from "../multfun/Theme";

const Home = () => {
  const navigate = useNavigate();
  const { isLoggedIn, logout } = useAuth();
  const { CropData } = useCrop();
  const [search, setSearch] = useState("");

  const filteredCrops = useMemo(() => {
    if (!search) return CropData;
    return CropData.filter((crop) =>
      crop.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search, CropData]);

  return (
    <div className="app">
      <div className="headDiv">
        <header className="header">
          <div className="logo">Rancher</div>
          <div className="search-wrapper">
            <input
              type="text"
              placeholder="Search crops..."
              className="search-bar"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Search crops"
            />
          </div>
          <div className="icbtmBox">
            <Theme />
            <nav className="auth-buttons" aria-label="Authentication">
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
            </nav>
          </div>
        </header>

        <nav className={component.nav_bar} aria-label="Main Navigation">
          <Link to="/" className={component.nav_link}>
            RancherAI
          </Link>
          <Link to="/RancherBuySeeds" className={component.nav_link_in}>
            AgriKart
          </Link>
          <Link to="/HarvestingEngines" className={component.nav_link}>
            Harvesting Engines
          </Link>
        </nav>
      </div>

      <main className={component.shopMain}>
        {/* Hero Banner */}
        <section className={component.shopBanner}>
          <div className={component.shopBannerContent}>
            <span className={component.shopTag}>🌿 AgriKart</span>
            <h1 className={component.shopBannerTitle}>
              Farm Fresh,
              <br />
              <span className={component.shopBannerAccent}>
                Delivered Direct
              </span>
            </h1>
            <p className={component.shopBannerDesc}>
              Premium seeds &amp; organic crops from verified local farmers.
            </p>
          </div>
          <div className={component.shopBannerStats}>
            <div className={component.shopStat}>
              <span className={component.shopStatNum}>500+</span>
              <span className={component.shopStatLabel}>Products</span>
            </div>
            <div className={component.shopStatDivider} />
            <div className={component.shopStat}>
              <span className={component.shopStatNum}>100%</span>
              <span className={component.shopStatLabel}>Organic</span>
            </div>
            <div className={component.shopStatDivider} />
            <div className={component.shopStat}>
              <span className={component.shopStatNum}>24hr</span>
              <span className={component.shopStatLabel}>Delivery</span>
            </div>
          </div>
        </section>

        {/* Results Info */}
        <div className={component.shopResultsBar}>
          <h2 className={component.shopResultsTitle}>
            {search ? `Results for "${search}"` : "All Crops"}
          </h2>
          <span className={component.shopResultsCount}>
            {filteredCrops.length} items
          </span>
        </div>

        {/* Product Grid */}
        <section className={component.shopGrid} aria-label="Available Crops">
          {filteredCrops.map((crop, index) => (
            <article
              key={index}
              className={component.shopCard}
              onClick={() => navigate(`/${encodeURIComponent(crop.name)}`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter")
                  navigate(`/${encodeURIComponent(crop.name)}`);
              }}
            >
              <div className={component.shopCardImgWrap}>
                <img
                  src={
                    crop.images.length > 0
                      ? crop.images[0]
                      : "fallback_image_url"
                  }
                  alt={crop.name}
                  loading="lazy"
                  className={component.shopCardImg}
                />
                {crop.discount > 0 && (
                  <span className={component.shopCardBadge}>
                    -{crop.discount}%
                  </span>
                )}
              </div>
              <div className={component.shopCardBody}>
                <h3 className={component.shopCardName}>{crop.name}</h3>
                <div className={component.shopCardPriceRow}>
                  <span className={component.shopCardPrice}>
                    ₹{(crop.price * (1 - crop.discount / 100)).toFixed(0)}
                  </span>
                  {crop.discount > 0 && (
                    <span className={component.shopCardOldPrice}>
                      ₹{crop.price.toFixed(0)}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </section>

        {filteredCrops.length === 0 && (
          <div className={component.shopEmpty}>
            <p>No crops found matching &ldquo;{search}&rdquo;</p>
          </div>
        )}
      </main>

      <footer />
    </div>
  );
};

export default Home;
