import Graphs from "./graphs";

function Middle() {
    const chartdata1 ={
        labels:["55%"],
       
        datasets:[{
          data:[55,65],
          backgroundColor:["black","#FFEEE2"],
          borderWidth:1,
          borderColor:"black",
          barThickness:2,
          indexLabelPlacement: "outside",
          radius:  "90%", 
          innerRadius: "9%"
  

        }]
    }
    const chartdata2 ={
        labels:["30%"],
       
        datasets:[{
          data:[30,70],
          backgroundColor:["black","#FFEEE2"],
          borderWidth:1,
          borderColor:"black",
          barThickness:2,
          indexLabelPlacement: "outside",
          radius:  "90%", 
          innerRadius: "9%"
  

        }]
    }
    const chartdata3 ={
        labels:["80%"],
       
        datasets:[{
          data:[80,20],
          backgroundColor:["black","#FFEEE2"],
          borderWidth:1,
          borderColor:"black",
          barThickness:2,
          indexLabelPlacement: "outside",
          radius:  "90%", 
          innerRadius: "9%"
  

        }]
    }
    const chartdata4 ={
        labels:["70%"],
       
        datasets:[{
          data:[70,30],
          backgroundColor:["black","#FFEEE2"],
          borderWidth:1,
          borderColor:"black",
          barThickness:2,
          indexLabelPlacement: "outside",
          radius:  "90%", 
          innerRadius: "9%"
  

        }]
    }
    return (  
        <div >
                
                <span class="fa fa-search fa-1x "></span>
                <input placeholder="Search for sats"/>
                
                <div className="users">
                          <h4>Hello david</h4>
                         <div class="border-secondary text-center">filters <i style={{marginLeft:"10px" }} class="fa fa-filter fa-1x "></i></div>
                </div>
                <div style={{fontSize:"14px",color:"#525659" }}>Welcome Back</div>
                <div className="dollar">
                       <div>
                           <div><i class="fa fa-eye" aria-hidden="true"></i></div>
                           <article style={{color:" #525659"}}>views</article>
                           <h4 style={{fontSize:"30px",fontWeight:"bold" }}>500</h4>
                           <article>Per Day</article>
                       </div>
                       <div>
                           <div><i class="fa fa-bug" aria-hidden="true"></i></div>
                           <article style={{color:" #525659"}}>visits</article>
                           <h4 style={{fontSize:"30px",fontWeight:"bold" }}>2000</h4>
                           <article>Per Minute</article>
                       </div>
                       <div>
                           <div><i class="fa fa-bell" aria-hidden="true"></i></div>
                           <article style={{color:" #525659"}}>Order</article>
                           <h4 style={{fontSize:"30px",fontWeight:"bold" }}>5100</h4>
                           <article>Per Day</article>
                       </div>
                      
                       
                </div>
                <div className="sales">
                           <div className="sales1">
                                   <article>
                                         <h5>Sales</h5>
                                         <p>today sales</p>
                                         <h3>$400</h3>
                                    </article>
                                    <div style={{height:"150px" ,width:"100px"}}>
                                        <Graphs user={chartdata1}/>
                                        </div> 
                           </div>
                           <div className="sales1" style={{ backgroundColor: "#EEFCEF " }}>
                           <article>
                                         <h5>Sales</h5>
                                         <p>today sales</p>
                                         <h3>$400</h3>
                                    </article> 
                                    <div style={{height:"150px" ,width:"100px"}}>
                                        <Graphs user={chartdata2}/>
                                        </div> 
                           </div>
                </div>
                <div className="sales">
                           <div className="sales1">
                                   <article>
                                         <h5>Order </h5>
                                         <p>today order today</p>
                                         <h3>400</h3>
                                    </article> 
                                    <div style={{height:"150px" ,width:"100px"}}>
                                        <Graphs user={chartdata3}/>
                                        </div> 
                           </div>
                           <div className="sales1" style={{ backgroundColor: "#EEFCEF " }}>
                           <article>
                                         <h5>Visits</h5>
                                         <p>today visits</p>
                                         <h3>400</h3>
                                    </article> 
                                    <div style={{height:"150px" ,width:"100px"}}>
                                        <Graphs user={chartdata4}/>
                                        </div> 
                           </div>
                </div>
        </div>
    );
}

export default Middle;