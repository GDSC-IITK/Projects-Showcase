import React from "react";
import { Link } from "react-router-dom";

export const ProjectList=(props)=>{
  
    return(
        <div style={{marginBottom:50}}>
        <div className="proj-list-cell"  >
            <p className="proj-list-cell-index">{props.title}</p>
            <p className="proj-list-cell-deadline">{props.deadline}</p>
            <p className="proj-list-cell-deadline">{props.number}</p>
        </div>
        </div>
    )
}