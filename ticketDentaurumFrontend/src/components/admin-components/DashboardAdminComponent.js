import React, {Component} from 'react';
import logo from '../../assets/images/logo-Dentaurum.png';
import DefaultAdmin from './DefaultAdminComponent';
import SearchTicket from './SearchComponent';
import SingleTicket from '../cross-user-components/SingleTicketOpenComponent';
import ListTicket from '../cross-user-components/ListTicketsComponent';
import ReportUser from './ReportUserComponent';
import Smistamento from './SmistamentoComponent';


import { BUTTON_DASHBOARD_ADMIN } from '../../assets/shared/buttonDashboardAdmin';

import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/redux_logic';


const mapStateToProps = (state) => {
    return {
        stateAppProps : state.stateApp,
        contentProps : state.content
    };
};


class Admin extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading : true,
            appstyle: null,
            list : [],
            adminList:[]
        }
        //this.adminList=[];
       // this.list=[];
        
        this.handleContentAdmin= this.handleContentAdmin.bind(this);
        this.getRealTicketList= this.getRealTicketList.bind(this);
        this.getOpenTicket= this.getOpenTicket.bind(this);
        this.getAdminList= this.getAdminList.bind(this);
        
    }

    

    async getAdminList(){
        var adminList = await this.props.adminList();
        this.setState({
            adminList : adminList
        })
       
    }


        


    async getRealTicketList(){
        await this.props.getTickets()
        .then(()=>{

            if(this.props.area !== "all"){
                var list = this.props.ticketsList.filter((item)=> item.area === this.props.area && item.Admin === this.props.adminName);
                this.setState({
                    list : list
                })

            } else if(this.props.area === "all"){
            var list2 = this.props.ticketsList;
            this.setState({
                list : list2
            })

        }})
        .then(()=>{
            this.getAdminList();
        }).then(()=>{
            this.setState({
                loading : false,
            appstyle: 'home',
            })
        })
    }

    getOpenTicket(){
        var openT = this.state.list.filter((ticket)=>ticket.status === "open");
        var incoming = openT.filter((openTickets)=>openTickets.messages[openTickets.messages.length - 1].author === "user");
        return incoming;

    }


    componentDidMount(){
        this.getRealTicketList()
        }


    handleContentAdmin(value){

        switch (value) {
            case value = 'home':
                return(<DefaultAdmin buttons={BUTTON_DASHBOARD_ADMIN} alert={this.getOpenTicket} smistamento={this.props.area === "all" ? true : false } />)
            case value = 'searchTicket':
                 return(<SearchTicket buttons={BUTTON_DASHBOARD_ADMIN} tickets={this.state.list} />)
            case value = 'openTicket':
                return(<ListTicket list={this.state.list.filter((ticket)=>ticket.status === "open")} version={this.props.version}/>)
            case value = 'setViewClosedTickets':
                return(<ListTicket list={this.state.list.filter((ticket)=>ticket.status === "closed")} version={this.props.version}/>)
            case value = 'reportUser':
                return(<ReportUser mail={this.props.SendMail} />)
            case value = 'ticket':
                return(<SingleTicket ticket={this.state.list.filter((ticket)=>ticket._id === this.props.location.search.substring(4))[0]} number={this.props.location.search.substring(4)} version={this.props.version} AddReply={this.props.AddReplyMessage} AddSingleImages={this.props.AddSingleImages} newTicketState={this.props.newTicketState}/>)
            case value = 'smistamento':
                return(<Smistamento addAdmin={this.props.addAdmin} list={this.state.list.filter((ticket)=>ticket.status === "open" && ticket.Admin==="")} version={this.props.version} adminList={this.state.adminList.data}/>)
            default:
                return(<DefaultAdmin buttons={BUTTON_DASHBOARD_ADMIN} alert={this.getOpenTicket} smistamento={this.props.area === "all" ? true : false }/>)
           
          }
    }


    render(){

        if(this.state.loading === true){
            return (
                <div className="spinner-border text-light" role="status">
                <span className="sr-only">Loading...</span>
                </div>
            )
        } else {

    return(
        <div className="container-background-admin">
        <div className="container-fluid text-center">

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

            {this.handleContentAdmin(this.props.match.params.action)}


            </div>
           
            </div>
        </div>
       
    ) } 
  }
}

export default withRouter(Admin);