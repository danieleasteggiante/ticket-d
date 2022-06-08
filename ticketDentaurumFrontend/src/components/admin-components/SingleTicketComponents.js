import React from 'react';
import { withRouter, useHistory } from 'react-router-dom';

const SingleTicket = (props)=>{
    console.log(props);
    const history = useHistory();

    
    return(

        <div className="col-sm-12 col-md-6 offset-3 mt-3">
        <div className="card bg-colorTwo h-100">
            <div className="card-body">
                <h3>{props.ticket.title}</h3>
                <div>
                    {props.ticket.title}
                </div>


            
        
            
            <button type="button" className="btn btn-secondary" onClick={()=> history.goBack()}>Torna alla pagina generale</button>
            </div>
            </div>
            </div>
        );

}

export default withRouter(SingleTicket);