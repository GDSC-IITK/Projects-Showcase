import React from "react";

export const ProjectList=(props)=>{
    return(
        <div>
        <div className="proj-list-cell" >
            <p className="proj-list-cell-index">{props.title}</p>
            <p className="proj-list-cell-deadline">{props.deadline}</p>
            <p className="proj-list-cell-deadline">{props.number}</p>
        </div>

        </div>
    )
}