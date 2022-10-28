import './App.css';
import { Routes,Route,useNavigate } from 'react-router';
import React, { useEffect, useState, useContext,} from 'react';
import NavigationMenu from './navigation/NavigationMenu.js'
import Middle from './navigation/middle';
import Graphs from './navigation/graphs';

function App() {
  
  const obj=[
    {
    awe:"envelope-open",
    rate:"2.330k",
    type:"sales"
  },
  {
    awe:"envelope-open",
    rate:"8.546k",
    type:"customer"
  },
  {
    awe:"envelope-open",
    rate:"1.433k",
    type:"Products"
  },
  {
    awe:"envelope-open",
    rate:"$9754k",
    type:"Revenue"
  },
  
  ]
  const chartdata4 ={
    labels:false,
   
    datasets:[{
      data:[70,30,40,20],
      backgroundColor:["red","blue","pink","brown"],
      borderWidth:1,
      borderColor:"black",
      barThickness:2,
      indexLabelPlacement: "outside",
      radius:  "100%", 
      innerRadius: "9%"


    }]
}
  return (
  <div className="app">
          <NavigationMenu/>
          <div className="line" style={{borderLeft:"1px solid whitesmoke",height:"100vh"}}></div>
          <div className="middle">
                <Middle/>
          </div>
          <div className ="final">
                 <h6>Sales Revenue</h6>

              {obj.map(d=>  
                 <div className="rate">
                    <div><i className={`fa fa-${d.awe}`} aria-hidden="true"></i></div>
         
                    <div>
                       <div>{d.rate}</div>
                       <div style={{color:"grey"}}>{d.type}</div>
                    </div>
                 </div>
                 )}
                 <h5>Statitics</h5>
                 <div>
                 <Graphs user={chartdata4}/>
                 </div>
          </div>
  </div>
    
    

  );
}
   
export default App;
