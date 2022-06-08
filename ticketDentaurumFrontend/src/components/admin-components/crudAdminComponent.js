import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import { BASE_URL } from '../../assets/shared/baseUrl';

const axios = require('axios');


export const RenderFormCreateUser = (props)=>{
    return(
        <div className="form-group">
            <label className="text-light" htmlFor="exampleFormControlInput1">Compila il form</label>
            <input className="form-control mt-1 form-control-sm" type="text" name="CodCliente" placeholder="Codice cliente" onChange={props.fulfillUser}required/>
            <input className="form-control mt-1 form-control-sm" type="text" name="password" placeholder="password" onChange={props.fulfillUser} required/>
            <input className="form-control mt-1 form-control-sm" type="text" name="RagioneSociale" placeholder="Ragione Sociale" onChange={props.fulfillUser} required/>
            <input className="form-control mt-1 form-control-sm" type="text" name="userType" placeholder="Admin/User" onChange={props.fulfillUser} required/>
            <input className="form-control mt-1 form-control-sm" type="text" name="userArea" placeholder="Area utente" onChange={props.fulfillUser} required/>
            <input className="form-control mt-1 form-control-sm" type="text" name="username" placeholder="username" onChange={props.fulfillUser} required/>
            <input className="form-control mt-1 form-control-sm" type="text" name="mail" placeholder="email" onChange={props.fulfillUser} required/>

        </div>
        )
    }

export const RenderFormDeleteUser = (props)=>{
    return(
        <div className="form-group">
            <label className="text-light" htmlFor="exampleFormControlInput1">Inserisci Codice Cliente</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={props.fulfillId} placeholder="codice"/>
        </div>
        )
    }

export const RenderFormDeleteTicket = (props)=>{
    return(
        <div className="form-group">
            <label className="text-light" htmlFor="exampleFormControlInput1">Inserisci ticket ID</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" onChange={props.fulfillId} placeholder="ticket ID"/>
        </div>
        )
    }

class CrudAdmin extends Component {
    constructor(props){
        super(props);
        this.state = {
            action: null,
            id: null,
            user : {
                CodCliente: null,
                password: null,
                RagioneSociale:null ,
                userType: null,
                userArea: null,
                username: null,
                mail: null
            }          
        }
        this.handleChange=this.handleChange.bind(this);
        this.RenderContent=this.RenderContent.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        this.fulfillUser=this.fulfillUser.bind(this);
        this.fulfillId=this.fulfillId.bind(this)
    }

    handleChange(e){
        this.setState(
            {
                action : e.target.value
            }, 
        );

    }

    fulfillId(e){
        this.setState({
            id :  e.target.value
            
        }, ()=>{
            console.log(this.state.id)
        })
    }

    fulfillUser(e){
        this.setState({
            user : {
                ...this.state.user,
                [e.target.name] : e.target.value
            }
        }, ()=>{
            console.log(this.state.user)
        })
    }


    async createUser() {
        return await axios({
            method: "POST",
            url: BASE_URL + "/api/users/from-admin",
            data: this.state.user,
        })
        .then(res => {
            console.log("user creater : ", res.data);
            alert("creato User: " + res.data.CodCliente);
            this.props.history.push('/thankYou/user_created');   
        })
        .catch(err => {
            console.log("error in request", err);
        })
    }

    async deleteUser(ID) {
        return await axios({
            method: "DELETE",
            url: BASE_URL + "/api/users/"+ID,
        })
        .then(res => {
            alert("user deleted: " + res.data);
            this.props.history.push('/thankYou/user_deleted');   

        })
        .catch(err => {
            alert("error in request", err);
        })
    }

    async deleteTicket(ID) {
        return await axios({
            method: "DELETE",
            url: BASE_URL + "/api/tickets/"+ID,
        })
        .then(res => {
            alert("Ticket Eliminato :" + res.data);
            this.props.history.push('/thankYou/ticket_deleted');   


        })
        .catch(err => {
            alert("error in request", err);
        })
    }

    handleSubmit(e){
        e.preventDefault();
        switch (this.state.action) {
            case "creaUser":
                return this.createUser();
            case "deleteUser":
                return this.deleteUser(this.state.id);
            case "deleteTicket":
                return this.deleteTicket(this.state.id);
            default:
                return null;
            }  
    }

    RenderContent(area){
        switch (area) {
            case "creaUser":
                return <RenderFormCreateUser fulfillUser={this.fulfillUser}/>;
            case "deleteUser":
                return <RenderFormDeleteUser fulfillId={this.fulfillId}/>;
            case "deleteTicket":
                return <RenderFormDeleteTicket fulfillId={this.fulfillId} />;
            default:
                return <h3 className="text-light mt-4"> Waiting...</h3>;
            }   
    }


    render(){
        return(
            <div className="col-sm-12">
                <div className="row">
                <div className="col-3">
                </div>

                <div className="form-group col-3">
                <label className="text-light" htmlFor="exampleFormControlSelect1">Seleziona cosa vuoi fare</label>
                <select className="form-control" id="exampleFormControlSelect1" name="selezionaAzione" onChange={this.handleChange}>
                <option >Scorri menu</option>
                <option value="creaUser">Creare utente</option>
                <option value="deleteUser">Cancellare utente</option>
                <option value="deleteTicket">Cancellare ticket</option>
                </select>
                
                </div>         

                <div className="form-group col-4">

                {this.RenderContent(this.state.action)}

                </div>

                <div className="form-group col-2">
                <button type="submit" className="btn btn-outline-primary mt-4" onClick={this.handleSubmit} >Invia Richiesta</button>
                </div>
                </div>
                </div>
        
        )
    }

}


export default withRouter(CrudAdmin);
