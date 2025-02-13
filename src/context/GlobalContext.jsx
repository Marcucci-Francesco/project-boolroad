import { createContext, useContext, useState, useEffect } from "react";
import travelsData from "../data/travelData";

const GlobalContext = createContext()

const GlobalProvider = ({ children }) => {

    const [travels, setTravels] = useState(travelsData)
    const [partecipants, setPartecipants] = useState()

    function fetchTravels() {
        return (setTravels(travelsData))
    }

    function fetchPartecipants(travelId) {
        const travel = travels.find(item => item.ID === travelId);
        return (setPartecipants(travel.participants))

    }

    const value = {
        travels,
        setTravels,
        partecipants,
        setPartecipants,
        fetchTravels,
        fetchPartecipants,
    }


    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { useGlobalContext, GlobalProvider }