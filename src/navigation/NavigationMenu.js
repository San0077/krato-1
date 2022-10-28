import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { MyContext } from "../context.js";
import "./app.css";
import { useContext } from "react";

const NavigationMenu = () => {
  const [mobile, setmobile] = useState(false);

  const navigate = useNavigate();
  const { user, setUser } = useContext(MyContext);

  return (
    <nav className="menu-links">
      <h3 className="logo " onClick={() => navigate("/")}>
       
      </h3>
      <ul
        className={mobile ? "mobile-links" : "nav-links"}
        onClick={() => setmobile(false)}
      >
        <NavLink
          to="/inpiration"
          className={({ isActive }) => "home" + (isActive ? " active" : "")}
        >
          <li> <i class="fa fa-home" aria-hidden="true"></i>Inpiration</li>
        </NavLink>

        <NavLink
          to="/jobs"
          className={({ isActive }) => "home" + (isActive ? " active" : "")}
        >
          <li> <i class="fa fa-trophy" aria-hidden="true"></i>Find Work</li>
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) => "home" + (isActive ? " active" : "")}
        >
          <li> <i class="fa fa-address-book-o" aria-hidden="true"></i>Learn Design</li>
        </NavLink>

        <NavLink
          to="/determine"
          className={({ isActive }) => "home" + (isActive ? " active" : "")}
        >
          <li> <i class="fa fa-steam" aria-hidden="true"></i>Go pro</li>
        </NavLink>

        <NavLink
          to="/preview"
          className={({ isActive }) => "home" + (isActive ? " active" : "")}
        >
          <li> <i class="fa fa-cog" aria-hidden="true"></i>Design </li>
        </NavLink>
      </ul>

      <ul className={mobile ? "mobile-links2" : "nav2-links"}>
        <NavLink to="/signin" className="sign">
          <li
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
              setUser(!true);
            }}
          >
            <div className="profile border border-secondary"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8Y28rQu6Xb7Y8nBRqlxlJmoJR0v5_TBmeg&usqp=CAU"
              style={{ width:"60px",height:"60px",borderRadius:"10px"}}></img></div>
             <div class="font-weight-bolder" style={{ color:"black" }}>David Milan</div>
          </li>
        </NavLink>
        
      </ul>

      <button className="mobile-icons" onClick={() => setmobile(!mobile)}>
        {mobile ? (
          <i class="fa fa-bars" aria-hidden="true"></i>
        ) : (
          <i class="fa fa-bars" aria-hidden="true"></i>
        )}
      </button>
    </nav>
  );
};

export default NavigationMenu;
