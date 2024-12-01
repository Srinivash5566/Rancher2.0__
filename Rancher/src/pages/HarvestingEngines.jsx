import { Link, useNavigate } from "react-router-dom";
import component from "./stylesheet/component.module.css"; // Import the CSS module
import { useState, useEffect } from "react";
import { BiSolidPlusCircle } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import api from "../api";
import { CgClose } from "react-icons/cg";
import { useAuth } from "../AuthContext";

const HarvestingEngines = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [engineName, setEngineName] = useState("");
  const [ownerMobile, setOwnerMobile] = useState("");
  const [place, setPlace] = useState("");
  const [priceDetails, setPriceDetails] = useState("");
  const [description, setDescription] = useState("");
  const [engines, setEngines] = useState([]); // Initialize as an empty array
  const [showAddEngineForm, setShowAddEngineForm] = useState(false); // Add state to toggle form visibility
  const [selectedEngine, setSelectedEngine] = useState(null); // Track the selected engine
  const { isLoggedIn, logout } = useAuth();
  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get("/Engine/EngineGet");
        setEngines(res.data);
      } catch (error) {
        console.error("Failed to fetch engines:", error);
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

    const newEngine = {
      engineId:
        engines.length > 0 ? engines[engines.length - 1].engineId + 1 : 1,
      ownerName,
      engineName,
      ownerMobile,
      place,
      priceDetails,
      description,
    };

    try {
      const res = await api.post("/Engine/EngineSave", newEngine);
      setEngines((prev) => [...prev, res.data]);
      setShowAddEngineForm(false);
      // Clear form fields
      setEngineName("");
      setOwnerMobile("");
      setPlace("");
      setPriceDetails("");
      setDescription("");
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
        prev.filter((engine) => engine.engineId !== engineId)
      );
    } catch (error) {
      console.error("Failed to delete engine:", error);
      alert("Failed to delete engine. Please try again later.");
    }
  };
  // ----------------------FORM---------------------------------
  const addEnginePopup = () => (
    <div className={component.model}>
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
          />
          <label>
            Vehicle Type:
            <input
              type="text"
              value={engineName}
              onChange={(e) => setEngineName(e.target.value)}
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="text"
              value={ownerMobile}
              onChange={(e) => setOwnerMobile(e.target.value)}
            />
          </label>
          <label>
            Place:
            <input
              type="text"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
            />
          </label>
          <label>
            Price per hour:
            <input
              type="text"
              value={priceDetails}
              onChange={(e) => setPriceDetails(e.target.value)}
            />
          </label>
          <label>
            Description:
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <button type="submit">Add Engine</button>
        </form>
      </div>
    </div>
  );
  // -------------------------------- ADD ENGINE FORM --------------------------------
  const showDetails = (engine) => (
    <div className={component.model}>
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
          />
          <img src="https://placehold.co/600x400" alt="Image" />
          <table>
            <tbody>
              <tr>
                <th>Name</th>
                <td>{engine.ownerName}</td>
              </tr>
              <tr>
                <th>Vehicle Type</th>
                <td>{engine.engineName}</td>
              </tr>
              <tr>
                <th>Mobile Number</th>
                <td>{engine.ownerMobile}</td>
              </tr>
              <tr>
                <th>Place</th>
                <td>{engine.place}</td>
              </tr>
              <tr>
                <th>Price per hour</th>
                <td>{engine.priceDetails}</td>
              </tr>
              <tr>
                <th>Description</th>
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
        <input
          type="text"
          placeholder="Type to Search..."
          className="search-bar"
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="auth-buttons">
          {isLoggedIn ? (
            <button className="log-out" onClick={logout}>
              Log Out
            </button>
          ) : (
            <>
              <button onClick={() => navigate("/RegisterPage")}>Sign Up</button>
              <button onClick={() => navigate("/LoginPage")}>Log In</button>
            </>
          )}
        </div>
      </header>

      <nav className={component.nav_bar}>
        <Link to="/" className={component.nav_link}>
          Home
        </Link>
        <Link to="/HarvestingEngines" className={component.nav_link_in}>
          Harvesting Engines
        </Link>
        <Link to="/Community" className={component.nav_link}>
          Community
        </Link>
        <Link to="#" className={component.nav_link}>
          About
        </Link>
      </nav>

      <div className={component.engine_list}>
        {engines
          .filter(
            (engine) =>
              engine.engineName.toLowerCase().includes(search.toLowerCase()) ||
              engine.place.toLowerCase().includes(search.toLowerCase())
          )
          .map((engine) => (
            <div
              key={engine.engineId}
              className={component.engine_item}
              style={
                engine.ownerName === localStorage.getItem("userName")
                  ? { backgroundColor: "#d0ffcd" }
                  : {}
              }
              onClick={() => {
                setSelectedEngine(engine);
              }}
            >
              <img
                src="https://placehold.co/600x400"
                alt={engine.engineName || "Engine Image"}
              />
              <div className={component.engine_info}>
                <div
                  style={{ display: "flex" }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <h3> ~ {engine.ownerName}</h3>
                  {engine.ownerName === localStorage.getItem("userName") && (
                    <MdDelete
                      className={component.Engine_del}
                      onClick={() => deleteEngine(engine.engineId)}
                    />
                  )}
                </div>
                <hr />
                <p>Vehicle Type: {engine.engineName}</p>
                <p>Place: {engine.place}</p>
              </div>
            </div>
          ))}
      </div>

      {/* -------------------------------- add vehicle -------------------------------- */}
      {selectedEngine && showDetails(selectedEngine)}
      {!selectedEngine && (
        <div className={component.Add_Engine_field}>
          <BiSolidPlusCircle
            className={component.Add_Engine}
            onClick={() => setShowAddEngineForm((prev) => !prev)}
          />
        </div>
      )}
      {showAddEngineForm && addEnginePopup()}
      <div className={component.placeholdDiv}></div>
      <div className={component.placeholdDiv}></div>
    </div>
  );
};

export default HarvestingEngines;
