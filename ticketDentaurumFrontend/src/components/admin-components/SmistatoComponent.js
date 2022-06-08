import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const Smistato = (props)=>{

    return(
    <div className="row">
        <div className="">
        <h1>Smistamento effettuato</h1>
        <Link to="/admin/smistamento" >Return</Link>
        </div>
    </div>
    )
}

export default withRouter(Smistato);