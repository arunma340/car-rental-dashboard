import React from "react";

import trackingData from "../assets/dummy-data/trackingData";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  // Tooltip,
  CartesianGrid,
} from "recharts";

const TrackingChart = () => {
  return (
    <ResponsiveContainer width="100%">
      <LineChart 
       margin={{
        top:5,
        right:30,
        left:20,
        bottom:5,
      }}
      >
       <CartesianGrid strokeDasharray='0' stroke="#b7ffe913"/>
       <XAxis dataKey='name' fill='#ddd'/>
       <YAxis datakey='mt'   fill="#ddd"/>
       <Line type='monotone' datakey='km' data={trackingData} stroke="#e14246"/>
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TrackingChart;
