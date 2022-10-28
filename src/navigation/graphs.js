import React, { memo } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
  } from 'chart.js';
  import { Bar, Doughnut, } from 'react-chartjs-2';
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
  );
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    
}
  
function Graphs({user}){
    

      
    return (
    <div >
        <Doughnut data={user} options={options} />
    </div>
     
    
           
        
    );
}



export default Graphs;