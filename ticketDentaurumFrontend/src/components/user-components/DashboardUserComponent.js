import React, {Component} from 'react';
import logo from '../../assets/images/logo-Dentaurum.png';
import DefaultUser from './DefaultUserComponent';
import NewTicket from './NewTicketComponent';
import CallRequest from './CallRequestComponent';
import ListTickets from '../cross-user-components/ListTicketsComponent';
import SingleTicket from '../cross-user-components/SingleTicketOpenComponent';
import { BUTTON_DASHBOARD_USER } from '../../assets/shared/buttonDashboardUser';

import { withRouter, Link, Redirect} from 'react-router-dom';
import { useHistory } from "react-router-dom";


class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            appstyle: null,
            openTickets : []
        }
        this.handleContent= this.handleContent.bind(this);
        this.getTickets = this.getTickets.bind(this); 
        this.setStateView = this.setStateView.bind(this);       
    }

    componentDidMount(){
        this.getTickets(this.props.dataUser.CodCliente);
        
    }

    setStateView(stateView){
        this.setState({
            loading : false,
            appstyle : stateView
        })

    }

    async getTickets(codCliente){
       await this.props.getTickets(codCliente);
       if(this.props.tickets.length !== undefined){
        this.setState({
            openTickets : this.props.tickets,
            loading : false,
            appStyle : 'home'
        })
    }

       }
        

    handleContent(value){

        switch (value) {
            case value = 'home':
                return(<DefaultUser buttons={BUTTON_DASHBOARD_USER} />)
            case value = 'setNewTicket':
                return(<NewTicket setStateView={this.setStateView} dataUser={this.props.dataUser} newTicket={this.props.createNewTicket} addImages={this.props.addImages} newTicketState={this.props.newTicketState} AddSingleImages={this.props.AddSingleImages} />)
            case value = 'setTelephonCall':
                 return <Redirect to="/relatori" />
            case value = "setViewOpenTickets":
                return(<ListTickets list={this.props.tickets.filter((ticket)=>ticket.status === "open")} version={this.props.version} />)
             case value = "setViewClosedTickets":
                return(<ListTickets list={this.props.tickets.filter((ticket)=>ticket.status === "closed")} version={this.props.version} />)
            case value = 'ticket':
                return(<SingleTicket ReopenTicket={this.props.ReopenTicket} ticket={this.props.tickets.filter((ticket)=>ticket._id === this.props.location.search.substring(4))[0]} number={this.props.location.search.substring(4)} version={this.props.version} AddReply={this.props.AddReplyMessage} AddSingleImages={this.props.AddSingleImages} newTicketState={this.props.newTicketState}/>)
            default:
                return(<DefaultUser buttons={BUTTON_DASHBOARD_USER} />)
          }
    }


    render(){
        if (this.state.loading === true){
            return (
                <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            )
        }else {

    return(
        <div className="container-background-user">
        <div className="container-fluid text-center ">

            <header>
                <div className="row">
                    <div className="col-sm-12 mt-2">
                        <h3 className="text-light">Dentaurum Italia</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                    <Link to={"/" + this.props.dataUser.userType + "/home"}><img className="logo-quality" src={logo} /></Link>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <p className="lead text-light text-center">
                        Clicca sul pulsante e segui la procedura guidata
                        
                        </p>
                    </div>
                </div>
            </header>
            <div className="row mb-5 pb-5">
                                {this.handleContent(this.props.match.params.action)}
            </div>
           
            </div>
        </div>
       
    )
}
}
  }


export default withRouter(Dashboard);