import React from "react";

export const ProjectList=(props)=>{
    return(
        <div>
        <div className="proj-list-cell" >
            <p className="proj-list-cell-index">{props.index+1}</p>
            <p className="proj-list-cell-title">{props.title}</p>
            <p className="proj-list-cell-deadline">{props.deadline.toDateString()}</p>
        </div>

        </div>
    )
}