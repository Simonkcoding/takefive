import {useState, useEffect} from "react";


export const useCustomHook = () => {
    const [breweries,setBreweries] = useState([]);
    const [loading,setLoading] = useState(false);
    const [url,setUrl] = useState("https://api.openbrewerydb.org/breweries");

    useEffect(()=>{
        const getBreweries = async()=>{
            setLoading(true);
            const breweries = await((await fetch(url)).json());
            setBreweries(breweries);
            setLoading(false);
        }

        getBreweries();
    },[url]);

    return [breweries,loading,setUrl];
}