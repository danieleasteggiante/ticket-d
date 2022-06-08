import React from 'react';
import {Link} from 'react-router-dom';

const DefaultUser = (props)=>{
    
    return(

    props.buttons.map((button) => {
        return (

            <div key={button.id} className="col-sm-12 col-md-6 mt-3">
            <div className="card bg-colorTwo h-100">
                <div className="card-body">
                    <span className={button.icon}></span>

                    <h5 className="card-title">{button.label}</h5>
                    <p className="card-text">{button.text}</p>
                    <Link to={`/user/${button.action}`} >
                    <button className="btn btn-dark">{button.button_text}</button>
                    </Link>
                </div>
            </div>
        </div>
        );
    })

    )

}

export default DefaultUser;