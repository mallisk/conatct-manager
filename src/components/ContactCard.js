import React from "react";
import mall from "./../images/mall.jpg"

const ContactCard = (props) =>{
    const {name,email} = props?.contact;
    return(
        <div className="item ">
            <img className="ui avatar image" src={mall} alt="mallik"/>
            <div className="content">
                <div className="header">{name}</div>
                <div className="header">{email}</div>
               
            </div>
            <i className="trash alternate outline right floated icon"
                 style={{color:"red",marginTop:"7px"}}></i>
            
        </div>
    )
}

export default ContactCard;