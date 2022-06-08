import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/redux_logic';

import Home from './HomeComponent';
import Footer from './FooterComponent';
import Dashboard from './user-components/DashboardUserComponent';
import Admin from './admin-components/DashboardAdminComponent';
import ThankYou from './cross-user-components/ThankYouComponent';
import Smistato from './admin-components/SmistatoComponent';
import {RelatoriComponent, RelatoreComponent} from './cross-user-components/RelatoriComponent';


import { connect } from 'react-redux';
import { CreateUser, FetchTicketsAction, FetchAllTicketsAction, FetchAdminList, CreateNewTicket, AddAdmin, CreateNewTicketImages, AddReply, AddSingleImages, ReopenTicket, SendMail } from '../redux/redux_logic';



const mapStateToProps = (state) => {
    return {
        stateAppProps : state.CreateUserReducer.stateApp,
        tokenProps : state.CreateUserReducer.token,
        contentProps : state.CreateUserReducer.content,
        ticketsProps : state.FetchTicketsReducer.tickets,
        createNewTicketStateProps : state.CreateTicketReducer
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        createUserProp : (iduser, password) => dispatch(CreateUser(iduser, password)),
        FetchTicketsProp : (CodCliente) => dispatch(FetchTicketsAction(CodCliente)),
        FetchAllTicketsProp : ()=> dispatch(FetchAllTicketsAction()),
        FetchAdminListProp : ()=> dispatch(FetchAdminList()),
        CreateNewTicketProp : (ticket)=>dispatch(CreateNewTicket(ticket)),
        AddAdminProp : (admin,ticketID)=>dispatch(AddAdmin(admin,ticketID)),
        CreateNewTicketImagesProp : (images, id)=>dispatch(CreateNewTicketImages(images, id)),
        AddReplyProp : (reply, ticketID)=>dispatch(AddReply(reply, ticketID)),
        AddSingleImagesProp : (image, ticketID) => dispatch(AddSingleImages(image, ticketID)),
        ReopenTicketProp : (ticketID) => dispatch(ReopenTicket(ticketID)),
        SendMailProp : (mail_body) =>dispatch(SendMail(mail_body))
    };
};


class Main extends Component { 



  render(){
      var isUser = this.props.stateAppProps === "user" ? true : false;
      var isAdmin = this.props.stateAppProps === "admin" ? true : false;
      var codCliente = this.props.contentProps.CodCliente !== null ? this.props.contentProps.CodCliente : "errore";
      var locationClick = this.props.stateAppProps !== "undefined" ? "/" + this.props.stateAppProps : "";
      
         
          return(
            <>
            <div className="background-color-black">
            <Router>
            <Switch>
            <Route exact path="/">  
             <Home login={this.props.createUserProp} user={this.props.stateAppProps} locationClick={locationClick}/>                     
            </Route>

             <Route path="/user/:action">  

             {isUser && codCliente && this.props.tokenProps? ( <Provider store={store}> 
             <Dashboard dataUser={this.props.contentProps} tickets={this.props.ticketsProps} 
             getTickets={this.props.FetchTicketsProp} 
             version={this.props.stateAppProps}
             createNewTicket={this.props.CreateNewTicketProp}
             newTicketState={this.props.createNewTicketStateProps}
             addImages={this.props.CreateNewTicketImagesProp}
             AddReplyMessage={this.props.AddReplyProp}
             AddSingleImages={this.props.AddSingleImagesProp}
             ReopenTicket={this.props.ReopenTicketProp}
             SendMail={this.props.SendMailProp}
             /> </Provider>
            ) : (
             <Home login={this.props.createUserProp}/>  
            )}            
            </Route>

            <Route path="/admin/:action">  

            {isAdmin && codCliente && this.props.tokenProps ? ( <Provider store={store}> 
            <Admin adminName={this.props.contentProps.RagioneSociale} dataUser={this.props.contentProps}
             newTicketState={this.props.createNewTicketStateProps}
             area={this.props.contentProps.userArea} getTickets={this.props.FetchAllTicketsProp} 
            ticketsList={this.props.ticketsProps} version={this.props.stateAppProps} adminList={this.props.FetchAdminListProp}
            addAdmin={this.props.AddAdminProp}
            AddReplyMessage={this.props.AddReplyProp}  
            AddSingleImages={this.props.AddSingleImagesProp}
            SendMail={this.props.SendMailProp}        
             /> </Provider>
            ) : (
            <Home login={this.props.createUserProp}/>
            )}
           
            </Route>
            <Route path="/thankYou/:action">  
             <ThankYou />                     
            </Route>
            <Route exact path="/smistato">  
             <Smistato />                     
            </Route>
            <Route exact path="/relatori">
            <RelatoriComponent />    
            </Route>
            <Route path="/cv/:relatore">
            <RelatoreComponent />    
            </Route> 
            </Switch>
          </Router>
        <Footer/>
        </div>
        </>
          )

     
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
