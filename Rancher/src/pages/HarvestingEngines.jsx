import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css";
import { useState, useEffect } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import api from "../api";
import { CgClose } from "react-icons/cg";
import { useAuth } from "../AuthContext";
import Theme from "../multfun/Theme";

const HarvestingEngines = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [engineName, setEngineName] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [place, setPlace] = useState("");
  const [loading, setLoading] = useState(null);
  const [priceDetails, setPriceDetails] = useState("");
  const [description, setDescription] = useState("");
  const [engines, setEngines] = useState([]);
  const [showAddEngineForm, setShowAddEngineForm] = useState(false);
  const [selectedEngine, setSelectedEngine] = useState(null);
  const { isLoggedIn, logout } = useAuth();
  const [file, setFile] = useState();

  useEffect(() => {
    async function getData() {
      setLoading("Loading please be patient...");
      try {
        const res = await api.get("/Engine/EngineGet");
        setEngines(res.data);
        setLoading(null);
      } catch (error) {
        console.error("Failed to fetch engines:", error);
        setLoading(null);
        alert("Failed to fetch engines. Please try again later.");
      }
    }

    getData();
    setOwnerName(localStorage.getItem("userName"));
  }, []);

  const addEngineHandle = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert("You need to be logged in to add an engine.");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    formData.append(
      "engineId",
      engines.length > 0 ? engines[engines.length - 1].engineId + 1 : 1,
    );
    formData.append("engineName", engineName);
    formData.append("ownerName", ownerName);
    formData.append("ownerMobile", ownerMobile);
    formData.append("place", place);
    formData.append("priceDetails", priceDetails);
    formData.append("description", description);

    try {
      const res = await api.post("/Engine/EngineSave", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setEngines((prev) => [...prev, res.data]);
      setShowAddEngineForm(false);
    } catch (err) {
      console.error("Failed to add engine:", err);
      alert("Failed to add engine. Please try again later.");
    }
  };

  const deleteEngine = async (engineId) => {
    if (!isLoggedIn) {
      alert("You need to be logged in to delete an engine.");
      return;
    }
    try {
      const res = await api.delete("/Engine/EngineDelete", {
        data: { id: engineId },
      });
      alert(res.data);
      setEngines((prev) =>
        prev.filter((engine) => engine.engineId !== engineId),
      );
    } catch (error) {
      console.error("Failed to delete engine:", error);
      alert("Failed to delete engine. Please try again later.");
    }
  };

  const addEnginePopup = () => (
    <div className={component.model} role="dialog" aria-modal="true">
      <div
        className={component.overlayDiv}
        onClick={() => setShowAddEngineForm(!showAddEngineForm)}
      >
        <form
          onSubmit={addEngineHandle}
          className={component.EnginePopupForm}
          onClick={(e) => e.stopPropagation()}
        >
          <CgClose
            className={component.Add_Engine_close}
            onClick={() => setShowAddEngineForm((prev) => !prev)}
            aria-label="Close"
            role="button"
          />
          <fieldset style={{ border: "none", padding: 0, margin: 0 }}>
            <legend style={{ display: "none" }}>Add Engine Details</legend>
            <label>Vehicle Type</label>
            <input
              type="text"
              value={engineName}
              onChange={(e) => setEngineName(e.target.value)}
              placeholder="e.g. Tractor, Harvester"
            />
            <label>Mobile Number</label>
            <input
              type="text"
              value={ownerMobile}
              onChange={(e) => setOwnerMobile(e.target.value)}
              placeholder="+91 XXXXX XXXXX"
            />
            <label>Place</label>
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
              placeholder="City or village name"
            />
            <label>Price per hour</label>
            <input
              type="text"
              value={priceDetails}
              onChange={(e) => setPriceDetails(e.target.value)}
              placeholder="₹ amount"
            />
            <label>Description</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Brief description..."
            />
            <label>Vehicle Image</label>
            <input
              type="file"
              onChange={(e) => setFile(e.target.files[0])}
              accept="image/*"
            />
            <button type="submit">Add Engine</button>
          </fieldset>
        </form>
      </div>
    </div>
  );

  const showDetails = (engine) => (
    <div className={component.model} role="dialog" aria-modal="true">
      <div
        className={component.overlayDiv}
        onClick={() => setSelectedEngine(null)}
      >
        <div
          className={component.DetailContent}
          onClick={(e) => e.stopPropagation()}
        >
          <CgClose
            className={component.Add_Engine_close}
            onClick={() => setSelectedEngine(null)}
            aria-label="Close"
            role="button"
          />
          <img
            src={`data:${engine.image.contentType};base64,${engine.image.imgData}`}
            alt="Engine details"
            loading="lazy"
          />
          <table>
            <tbody>
              <tr>
                <th scope="row">Owner</th>
                <td>{engine.ownerName}</td>
              </tr>
              <tr>
                <th scope="row">Vehicle Type</th>
                <td>{engine.engineName}</td>
              </tr>
              <tr>
                <th scope="row">Mobile Number</th>
                <td>{engine.ownerMobile}</td>
              </tr>
              <tr>
                <th scope="row">Location</th>
                <td>{engine.place}</td>
              </tr>
              <tr>
                <th scope="row">Price per hour</th>
                <td>{engine.priceDetails}</td>
              </tr>
              <tr>
                <th scope="row">Description</th>
                <td>{engine.description}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  return (
    <div className={component.harvesting_engines}>
      <header className="header">
        <div className="logo">Rancher</div>
        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search engines or places..."
            className="search-bar"
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search engines"
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
        <Link to="/RancherBuySeeds" className={component.nav_link}>
          AgriKart
        </Link>
        <Link to="/HarvestingEngines" className={component.nav_link_in}>
          Harvesting Engines
        </Link>
      </nav>

      <main>
        {loading && (
          <div className={component.model} role="alert" aria-busy="true">
            <div className={component.overlayDiv}>
              <h1 className={component.loading}>{loading}</h1>
            </div>
          </div>
        )}

        <section className={component.engine_list} aria-label="Engine Listings">
          {engines
            .filter(
              (engine) =>
                engine.engineName
                  .toLowerCase()
                  .includes(search.toLowerCase()) ||
                engine.place.toLowerCase().includes(search.toLowerCase()),
            )
            .map((engine) => (
              <article
                key={engine.engineId}
                className={component.engine_item}
                style={
                  engine.ownerName === localStorage.getItem("userName")
                    ? {
                        backgroundColor: "rgba(127, 185, 110, 0.06)",
                        borderColor: "rgba(127, 185, 110, 0.28)",
                      }
                    : {}
                }
                onClick={() => setSelectedEngine(engine)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter") setSelectedEngine(engine);
                }}
              >
                <figure style={{ margin: 0, flexShrink: 0 }}>
                  <img
                    src={`data:${engine.image.contentType};base64,${engine.image.imgData}`}
                    alt={engine.engineName || "Engine Image"}
                    loading="lazy"
                  />
                </figure>
                <div className={component.engine_info}>
                  <header
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <h3>~ {engine.ownerName}</h3>
                    {engine.ownerName === localStorage.getItem("userName") && (
                      <MdDelete
                        className={component.Engine_del}
                        onClick={() => deleteEngine(engine.engineId)}
                        aria-label="Delete your engine"
                        role="button"
                      />
                    )}
                  </header>
                  <hr />
                  <p>
                    <strong>Type:</strong> {engine.engineName}
                  </p>
                  <p>
                    <strong>Location:</strong> {engine.place}
                  </p>
                </div>
              </article>
            ))}
        </section>
      </main>

      <aside>
        {selectedEngine && showDetails(selectedEngine)}
        {!selectedEngine && (
          <div className={component.Add_Engine_field}>
            <BiSolidPlusCircle
              className={component.Add_Engine}
              onClick={() => setShowAddEngineForm((prev) => !prev)}
              aria-label="Add a new engine"
              role="button"
            />
          </div>
        )}
        {showAddEngineForm && addEnginePopup()}
      </aside>

      <div className={component.placeholdDiv}></div>
    </div>
  );
};

export default HarvestingEngines;
