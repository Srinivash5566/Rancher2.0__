import { createContext, useContext, useState, useEffect } from "react";
import api from "./api"; // Adjust path based on your project structure
import { sampleCrops } from "./SampleCropData__";

const CropContext = createContext();

export const CropProvider = ({ children }) => {
  const [CropData, setCropData] = useState([]);

  useEffect(() => {
    const getCrop = async () => {
      try {
        const { data } = await api.get("crop/getSeed");
        setCropData(data.length != 0? data : sampleCrops);
        
      } catch (err) {
        console.error("Failed to fetch crop data:", err);
      }
    };

    getCrop();
  }, []);

  return (
    <CropContext.Provider value={{ CropData }}>
      {children}
    </CropContext.Provider>
  );
};

// Custom hook for using CropContext
export const useCrop = () => useContext(CropContext);
