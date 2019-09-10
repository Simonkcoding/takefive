import {useState, useEffect} from "react";


export const useCustomHook = () => {
    const [breweries,setBreweries] = useState([]);
    const [loading,setLoading] = useState(false);
    const [url,setUrl] = useState("https://api.openbrewerydb.org/breweries");

    useEffect(()=>{ // useEffect will fire off when state is changed
        const getBreweries = async()=>{
            setLoading(true);
            const breweries = await((await fetch(url)).json());
            setBreweries(breweries);
            setLoading(false);
        }

        getBreweries();
    },[url]); // this says only when the state, url, is changed

    return [breweries,loading,setUrl];
}