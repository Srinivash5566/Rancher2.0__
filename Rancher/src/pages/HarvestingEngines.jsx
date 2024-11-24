import { Link, useNavigate } from 'react-router-dom';
import component from './stylesheet/component.module.css'; // Import the CSS module
import { useState, useEffect } from 'react';
import { BiSolidPlusCircle } from "react-icons/bi";
import api from '../api';

const HarvestingEngines = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ownerName, setOwnerName] = useState('');
  const [engineName, setEngineName] = useState('');
  const [ownerMobile, setOwnerMobile] = useState('');
  const [place, setPlace] = useState('');
  const [priceDetails, setPriceDetails] = useState('');
  const [description, setDescription] = useState('');
  const [engines, setEngines] = useState([]);  // Initialize as an empty array
  const [showAddEngineForm, setShowAddEngineForm] = useState(false); // Add state to toggle form visibility

  useEffect(() => {
    async function getData() {
      try {
        const res = await api.get('/Engine/EngineGet');
        setEngines(res.data);
      } catch (error) {
        alert('Failed to fetch engines. Please try again later. ->',error);
      }
    }

    getData();
    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsLoggedIn(false);
  };

  const addEngineHandle = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      alert('You need to be logged in to add an engine');
      return;
    }

    const newEngineId = engines.length > 0 ? engines[engines.length - 1].engineId + 1 : 1;
    const EngineData = { engineId: newEngineId, ownerName, engineName, ownerMobile, place, priceDetails, description };

    try {
      const res = await api.post('/Engine/EngineSave', EngineData);
      setEngines([...engines, res.data]);
      setShowAddEngineForm(false); // Hide form after successful submission
    } catch (err) {
      alert('Failed to add engine. Please try again later. ->',err);
    }

    setOwnerName('');
    setEngineName('');
    setOwnerMobile('');
    setPlace('');
    setPriceDetails('');
    setDescription('');
  };

  const addEnginePopup = () => (
    <div className={component.Engine_form}>
      <form onSubmit={addEngineHandle}>
        <label>Name:
          <input type="text" id="name" name="name" value={ownerName} onChange={(e) => setOwnerName(e.target.value)} />
        </label>
        <label>Vehicle Type:
          <input type="text" id="engineName" name="engineName" value={engineName} onChange={(e) => setEngineName(e.target.value)} />
        </label>
        <label>Mobile Number:
          <input type="text" id="ownerMobile" name="ownerMobile" value={ownerMobile} onChange={(e) => setOwnerMobile(e.target.value)} />
        </label>
        <label>Place:
          <input type="text" id="place" name="place" value={place} onChange={(e) => setPlace(e.target.value)} />
        </label>
        <label>Price per hour:
          <input type="text" id="priceDetails" name="priceDetails" value={priceDetails} onChange={(e) => setPriceDetails(e.target.value)} />
        </label>
        <label>More About - description:
          <input type="text" id="description" name="description" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <button type="submit">Add Engine</button>
      </form>
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
            <button className="log-out" onClick={handleLogout}>Log Out</button>
          ) : (
            <>
              <button className="sign-in" onClick={() => navigate('/RegisterPage')}>Sign Up</button>
              <button className="log-in" onClick={() => navigate('/LoginPage')}>Log In</button>
            </>
          )}
        </div>
      </header>

      <nav className={component.nav_bar}>
        <Link to="/" className={component.nav_link}>Home</Link>
        <Link to="/HarvestingEngines" className={component.nav_link}>Harvesting Engines</Link>
        <Link to="/Community" className={component.nav_link}>Community</Link>
        <Link to="#" className={component.nav_link}>About</Link>
      </nav>

      <div className={component.engine_list}>
        {engines
          .filter((engine) => engine.engineName && engine.engineName.toLowerCase().includes(search.toLowerCase()))
          .map((engine) => (
            <div key={engine.engineId} className={component.engine_item}>
              <img src={'https://placehold.co/600x400'} alt={engine.engineName || 'Engine Image'} />
              <div className={component.engine_info}>
                <h3>{engine.engineName}</h3>
                <p>{engine.description || 'Description not available'}</p>
              </div>
            </div>
          ))}
      </div>

      <div className={component.Add_Engine_field}>
        {showAddEngineForm && addEnginePopup()}
        <BiSolidPlusCircle
          className={component.Add_Engine}
          onClick={() => setShowAddEngineForm((prev) => !prev)}
        />
      </div>
    </div>
  );
};

export default HarvestingEngines;
