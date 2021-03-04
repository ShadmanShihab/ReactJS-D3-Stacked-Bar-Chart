import React, { useState, useEffect } from "react";
import StackedBarChart from "./StackedBarChart";

const allKeys = ["one", "two", "three"];

const colors = {
  "one": "blue",
  "two": "green",
  "three": "red"
};

function StackedBarChartComponent() {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);
   const [keys, setKeys] = useState(allKeys);

  useEffect(() => {
    fetch("http://localhost:8087/stackedBarChart")
        .then(res => res.json())
        .then(
            (result) => {
                setIsLoaded(true);
                setData(result);
            },
            (error) => {
                setIsLoaded(false);
                setError(error);
            }
        )
}, [])

  return (
    <React.Fragment>
      <h2 style={{marginBottom: '50px'}}>Stacked Bar Chart with D3 </h2>
      <StackedBarChart data={data} keys={keys} colors={colors} />

      <div>
        <div className="fields">
          {allKeys.map(key => (
            <div key={key} className="field">
              <input
                id={key}
                type="checkbox"
                checked={keys.includes(key)}
                onChange={e => {
                  if (e.target.checked) {
                    setKeys(Array.from(new Set([...keys, key])));
                  } else {
                    setKeys(keys.filter(_key => _key !== key));
                  }
                }}
              />
              <label htmlFor={key} style={{ color: colors[key] }}>
                {key}
              </label>
            </div>
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default StackedBarChartComponent;