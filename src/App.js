import React, { useState, useEffect } from "react";
import "./App.css";
import StackedBarChart from "./components/StackedBarChart/StackedBarChartComponent";
import BarChart from './components/BarChart/BarChart2';
import StackedBarChartComponent from "./components/StackedBarChart/StackedBarChartComponent";
import MainComponent from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
import PieChart from "./components/PieChart/PieChart";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MainComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;