import { useContext, createContext, useState, useEffect } from "react";
import {
  IVehicleContext,
  ListVehicleProviderProps,
} from "../../interface/vehicle/index";
import axios from "axios";

export const VehicleContext = createContext({} as IVehicleContext);

export const VehicleProvider = ({ children }: ListVehicleProviderProps) => {
  const [id, setId]: any = useState("");
  const [newComment, setNewComment]: any = useState("");
  const [vehicle, setVehicle]: any = useState({});
  const [newVehicle, setNewVehicle] = useState({});
  const [listVehicles, setListVehicles] = useState([]);
  const [listCars, setListCars] = useState([]);
  const [listMotorcycles, setListMotorcycles] = useState([]);
  const [newOffer, setNewOffer] = useState(0);


  useEffect(() => {
    if (sessionStorage.getItem("user")) {
      const token = JSON.parse(sessionStorage.getItem("user") || "");
      axios.post("http://localhost:3000/vehicle", newVehicle, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      
      axios
        .post(
          `http://localhost:3000/comment/${id}`, { comment: newComment },
          { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => setNewComment(""));


      axios
      .post(
        `http://localhost:3000/offers/${id}`, { offer: Number(newOffer) },
        { headers: { Authorization: `Bearer ${token}` } })
      .then((response) => setNewOffer(0));

        
    }

    axios
      .get(`http://localhost:3000/vehicle/${id}`)
      .then((res) => setVehicle(res.data[0]));

    axios
      .get("http://localhost:3000/vehicle")
      .then((response) => setListVehicles(response.data));

    axios
      .get("http://localhost:3000/categorie/car")
      .then((response) => setListCars(response.data.vehicles));

    axios
      .get("http://localhost:3000/categorie/motorCycle")
      .then((response) => setListMotorcycles(response.data.vehicles));
  }, [id, newComment, newVehicle, newOffer]);

  return (
    <VehicleContext.Provider
      value={{
        listVehicles,
        listCars,
        listMotorcycles,
        vehicle,
        setId,
        newVehicle,
        setNewVehicle,
        setNewComment, 
        setNewOffer
      }}
    >
      {children}
    </VehicleContext.Provider>
  );
};

export const useVehicle = () => useContext(VehicleContext);