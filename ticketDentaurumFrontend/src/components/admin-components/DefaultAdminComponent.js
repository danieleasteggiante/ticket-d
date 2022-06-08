import React from 'react';
import {Link} from 'react-router-dom';
import CrudAdmin from './crudAdminComponent'

const AlertNumber = (props)=>{
    return(
        <p style={{width:"25px", height:"25px", borderRadius:"50px", backgroundColor:"red", marginLeft:"50"}}>{props.number}</p>
    )
}

const RenderSmistamento = ()=>{
    return(
        <div className="col-sm-12">
    <Link to={`/admin/smistamento`} >
    <button className="btn btn-warning"> <span className="fa fa-envelope-o fa-2x"></span > Smistamento</button>
    </Link>
    </div>
    )

}

const DefaultAdmin = (props)=>{

    var incoming = props.alert()

    if (incoming != null){
    
    return(
        <>

        {props.smistamento && <RenderSmistamento />}
        {props.smistamento && <CrudAdmin />}


    

    {props.buttons.map((button, i) => {
            return (

                <div key={button.id} className="col-sm-12 col-md-6 mt-3">
                <div className="card bg-colorThree text-light h-100">
                    <div className="card-body">
                        <div className="row">
                    {i===0 && incoming.length > 0 ?
                         <><div className="col-1 offset-5 pl-4"><span className={button.icon}></span></div><div className="col-1"><AlertNumber number={incoming.length}/></div> </>:  <div className="col-6 offset-3"><span className={button.icon}></span></div>
                    }
                    </div>

                        <h5 className="card-title">{button.label}</h5>
                        <p className="card-text">{button.text}</p>
                        
                        <Link to={`/admin/${button.action}`} >
                        <button className="btn btn-dark">{button.button_text}</button>
                        </Link>
                        
                    </div>
                </div>
            </div>
            );
        })}


      </>

        )
    } else {
       return  <h3 style={{color:"white"}}>Loading...</h3>
    }

}

export default DefaultAdmin;