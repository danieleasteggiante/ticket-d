import React, {Component} from 'react';
import { withRouter, useLocation, Link } from 'react-router-dom';
import { RELATORI_DB_STATIC } from '../../assets/shared/relatori_db_static';
import logo from '../../assets/images/logo-Dentaurum.png'

export function RelatoreComponent(){
    const search = useLocation().pathname.split('/')[2];
    var relatore = RELATORI_DB_STATIC[search]
    console.log(relatore)
    return( 


        <div key={relatore.id} className="container-fluid text-center container-background-admin mt-5 py-5 mb-5 pb-5">
            <div className="row bg-colorThree p-5">
                <div className="col-2">
                </div>
                <div className="col-8">
                    
                    <img  className="rounded pb-5"  style={{width:250,}} src={relatore.immagine} />

                        <h2 className="text-light">{relatore.nome_esteso}</h2>


                        <p className="text-light">{relatore.curriculum}</p>

                        <Link to={`/relatori`} >
                    <button className="btn btn-light">Ritorna a relatori</button>
                    </Link>

                    
                    </div>
               
                </div>
                <div className="col-2">
                </div>
            </div>


        )
}

export function RelatoriComponent(){
    
    return(

        <div className="container-fluid text-center bg-dark mb-5 pb-5">
        <header>
        <div className="row">
        <div className="col-sm-12 mt-2">
            <h3 className="text-light">Dentaurum Italia</h3>
         </div>
            </div>
            <div className="row">
                <div className="col-sm-12"><a href="/"><img className="logo-quality" src={logo} /></a>
            </div>         
        </div>     
        </header>
        <div className="row">


    {RELATORI_DB_STATIC.map((card) => {
        return (

            <div key={card.id} className="col-sm-12 col-md-3 mt-3">

            <div className="card bg-colorTwo h-100">
            <img className="card-img-top" src={card.immagine} alt="Card image cap"/>

                <div className="card-body">
                    <span ></span>

                    <h5 className="card-title">{card.nome_esteso}</h5>
                   
                    <Link to={`/cv/${card.id}`} >
                    <button className="btn btn-dark">Apri</button>
                    </Link>
                </div>
            </div>
        </div>
        );
    })}  
    </div></div>


    )

}



