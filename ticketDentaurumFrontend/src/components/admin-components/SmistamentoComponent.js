import React, {Component} from 'react';
import {withRouter, Link} from 'react-router-dom';

class Smistamento extends Component {
    constructor(props){
        super(props);
        this.state= {
            admin : '',
        }  
        this.handleSubmit= this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({admin: event.target.value});
      }

    handleSubmit(e, ticketId){
        if(this.state.admin !== ''){
        this.props.addAdmin({Admin : this.state.admin} , ticketId );
        }

        alert("Assegnato");
        this.props.history.push('/thankYou/ticket_smisted');   

        e.preventDefault();
    }

    render(){


    if (this.props.list.length !== 0){
        var list = this.props.list.sort((a,b)=>parseInt(b.id)-parseInt(a.id));

    return(
        <>
        <div className="col-6 mt-3 offset-3">
       <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.push("/" + this.props.version +"/home")}>Torna alla pagina generale</button>
       </div>

     {list.map((ticket,i) => {
            return (
                <div key={i}className="container">
                    <div  className="col-6 mt-3 offset-3">
                    <div className="card bg-colorThree text-light h-100">
                        <div className="card-body">
                            <h5>{ticket.title}
                            </h5>
                            
                            <Link to={`/${this.props.version}/ticket?id=${ticket._id}`} >
                            <button className="btn btn-dark">Apri ticket</button>
                            </Link>
    
                        </div>
                    </div>
                    </div>

                    <div  className="col-6 mt-3 offset-3">

                    <form>
                    <div className="form-group">
                        <label className="text-light" htmlFor="exampleInputEmail1">Seleziona il consulente</label>
                        <select className="form-control" name="administrator" onChange={this.handleChange} >
                        <option value="default">Scegli consulente</option>
                        {this.props.adminList.map((admin,i)=>{
                            if(admin.userArea === ticket.area){
                            return(
                                <option key={i} value={admin.RagioneSociale}>{admin.RagioneSociale}</option>
                            )
                        } else {
                            return null
                        }
                        })}
                        </select>
                    </div>
                    <button className="btn btn-dark" onClick={(e)=>this.handleSubmit(e, ticket._id)}>Smista</button>
                    </form>
                    </div>
                    </div>
            );
        })}



        </>)}
        else{
            return(
                <>
                <div className="col-6 mt-3 offset-3">
               <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.push("/" + this.props.version +"/home")}>Torna alla pagina generale</button>
               </div>
               </>
            )
        }
    }
}
   


export default withRouter(Smistamento);