import React, { useState, useEffect } from "react";
import { render } from 'react-dom';
import { scaleBand, scaleLinear } from 'd3-scale';
import XYAxis from './axis/xy-axis.js';
import Grid from './grid/grid.js';
import Bar from './bar/bar.js';
import { transition } from 'd3-transition';



const BarChart = () => {

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8087/barChart")
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
console.log("data", data)
  const parentWidth = 500;
  const margin = {
    top: 10,
    right: 10,
    bottom: 20,
    left: 40,
  };
  const ticks = 6;
  const t = transition().duration(1000);

  const width = parentWidth - margin.left - margin.right;
  const height = parentWidth * 0.5 - margin.top - margin.bottom;

  const xScale = scaleBand()
    .domain(data.map(d => d.name))
    .range([0, width])
    .padding(0.26);


  const yScale = scaleLinear()
    .domain([0, Math.max(...data.map(d => d.value))])
    .range([height, 0])
    .nice();


    console.log(data)
  return (
    <div>

        <svg width={width + margin.left + margin.right} height={height + margin.top + margin.bottom}>
          <g transform={`translate(${margin.left}, ${margin.top})`}>
            <XYAxis {...{ xScale, yScale, height, ticks, t }} />
            <Grid {...{ xScale, yScale, width, ticks, t }} />
            <Bar
              {...{
                xScale,
                yScale,
                data,
                height,
                t,
              }}
            />
          </g>
        </svg>
      </div>
  );
}

export default BarChart;

