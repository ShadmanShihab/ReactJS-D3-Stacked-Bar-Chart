import React from 'react';
import BarChart from '../BarChart/BarChart2';
import StackedBarChart from '../StackedBarChart/StackedBarChartComponent';
import { Route, Redirect } from 'react-router-dom';
import PieChart from '../PieChart/PieChart';

const BodyComponent = () => {
    return(
        <div>
            <Route path="/barChart" exact component={BarChart}></Route>
            <Route path="/stackedBarChart" exact component={StackedBarChart}></Route>
            <Route path="/pieChart" exact component={PieChart}></Route>
        </div>
    );
}

export default BodyComponent;