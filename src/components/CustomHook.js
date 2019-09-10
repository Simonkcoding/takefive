import React from 'react';
import { useCustomHook } from '../useCustomHook';

const CustomHook = () => {
    const [breweries, loading, setUrl] = useCustomHook();

    return (
        <div className="custom-hook">
            {loading ? (
                <div>Loading ...</div>
            ) : (
                    <>
                        <h1>Breweries</h1>
                        <h2>Fetched from the openbrewerydb.org</h2>
                    </>
                )}
            {breweries.map(brewery => (
                <div key={brewery.id}>{brewery.name}</div>
            ))}
            <button
                style={{ marginTop: "20px" }}
                onClick={() =>
                    setUrl("https://api.openbrewerydb.org/breweries?by_state=arizona")
                }
            >
                Show Breweries from state of Arizona
          </button>
        </div>
    );
};

export default CustomHook;