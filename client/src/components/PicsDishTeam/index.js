import React from "react";
import "./style.css";

function Cards(props) {
    return (

        <div className="teamDiv">
            <div  >
                <img className="teamImage" alt={props.name} src={props.image} />
            </div>
            <div className="content">
                <ul>
                    <li>
                        <strong >{props.name}</strong> 
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Cards;