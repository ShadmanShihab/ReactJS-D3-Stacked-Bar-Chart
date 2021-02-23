import React, { useState } from "react";
import AnimatedBarChart from "./AnimatedBarChart";
import "./App.css";
import StackedBarChart from "./StackedBarChart";

const data = [
  {
    year: 1980,
    "avocado": 10,
    "banana": 20,
    "mango": 30,
    "grape": 80
  },
  {
    year: 1990,
    "avocado": 20,
    "banana": 40,
    "mango": 60,
    "grape": 80
  },
  {
    year: 2000,
    "avocado": 30,
    "banana": 45,
    "mango": 80,
    "grape": 80
  },
  {
    year: 2010,
    "avocado": 40,
    "banana": 60,
    "mango": 100,
    "grape": 80
  },
  {
    year: 2020,
    "avocado": 50,
    "banana": 80,
    "mango": 120,
    "grape": 50
  }
];

const allKeys = ["avocado", "banana", "mango", "grape"];

const colors = {
  "avocado": "green",
  "banana": "yellow",
  "mango": "red",
  "grape": "black"
};

function App() {
  const [keys, setKeys] = useState(allKeys);
  return (
    <React.Fragment>
      <h2>Stacked Bar Chart with D3 </h2>
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

export default App;