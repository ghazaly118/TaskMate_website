import React from "react";
import logo from "./download.png";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function MyHeader({theme,settheme}) {

  return (
    <header className="d-flex justify-content-between align-items-center p-3 bg-dark text-white rounded shadow">
      <div className="d-flex align-items-center gap-4">
        <img src={logo} alt="logo" className="rounded" style={{ height: "40px", width: "40px" }} />
        <span className="fw-bold fs-4">Task mate</span>
      </div>

      <div className="themeselector d-flex gap-2">
        <span className="light" onClick={()=>settheme("light")}></span>
        <span className="meduim" onClick={()=>settheme("meduim")}></span>
        <span className="dark"onClick={()=>settheme("dark")}></span>
        <span className="g1"onClick={()=>settheme("g1")}></span>
        <span className="g2"onClick={()=>settheme("g2")}></span>
        <span className="g3"onClick={()=>settheme("g3")}></span>
      </div>
    </header>
  );
}
