import { Col } from "react-bootstrap";
import { Route, Routes, Router } from 'react-router-dom';
import { Link } from "react-router-dom";
import Contact from "./Contact";
import img from "../assets/img/logobg.png";
import projImg1 from "../assets/img/logobg.png";
import projImg2 from "../assets/img/2.jpg";
import projImg3 from "../assets/img/3.jpg";
import { useState, useEffect } from "react";

export const ProjectCard = ({ index, title, description,isWinter, imgUrl}) => {
  let saveData = () =>{
    localStorage.setItem('indexy', JSON.stringify({index}));
    localStorage.setItem('namey', JSON.stringify({title}));
  }
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" >
      {isWinter==1 && (
          <div className="slanted-strip" style={{ position: 'relative' }}>
            <span style={{color:'red'}}>Winter Project</span>
          </div>
        )}
        <img src={img}
        style={{opacity:0.25}}
        alt="logo"/>
        <div className="proj-txtx" style={{padding:'10px'}}>
          <h4 style={{marginBottom:'50px'}}>{title}</h4>
          <span>{description}</span><br></br>
          <div className="link">
            <button onClick={()=>{saveData();}}>
              <Link to={{
                pathname: "/projects", state: [{ id: 19923 }]
              }}><span> Details</span></Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  )
}
