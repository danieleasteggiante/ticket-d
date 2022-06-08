import React from 'react';
import {withRouter, Link} from 'react-router-dom';

const ThankYou = (props)=>{
 var action = props.match.params.action;
 var result= null;
 switch (action){
    case "reply":
        result = "Risposta aggiunta";
        break;
    case "newMessage":
        result = "Nuovo messaggio creato";
        break;
    case "smistamento":
        result = "Messaggio smistato";
        break;
     case "reopened":
        result = "Ticket riaperto";
        break;
     case "ticket_deleted":
        result = "Ticket Cancellato";
        break;
     case "ticket_smisted":
        result = "Ticket Smistato";
        break;
     case "user_created":
        result = "User creato";
        break;
     case "user_deleted":
        result = "User rimosso";
        break;
    case "default":
        result = "Grazie mille del contributo!";
 }  
    return(
    <div className="container">

        <div className="jumbotron">
        <h1 className="display-4">{result}</h1>
        <p className="lead"><Link to="/user/home" >Ritorna alla pagina precedente </Link></p>
        <hr className="my-4"/>
        <p>Grazie per aver contribuito, per qualsiasi problema contatti pure il numero 051 86 25 80. 
            Per consultare il catalogo prodotti Dentaurum Italia clicchi pure sul bottone qui sotto.
        </p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="https://shop.dentaurum.it" role="button">Shop online</a>
        </p>
        </div>
    </div>

    )
}

export default withRouter(ThankYou);