import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class CallRequest extends Component{

    constructor(props){
        super(props);

        this.state={
            userCode: undefined,
            tel: undefined,
            message : undefined
        }

        this.send_mail = this.send_mail.bind(this);
        this.set_content = this.set_content.bind(this);

    }

    set_content(e){
        this.setState({
            [e.target.name]: [e.target.value],
        })
    }

    send_mail(e){
        e.preventDefault();
        let bodymail={
            userCode: this.state.userCode,
            message: "Richiamare al: " + this.state.tel + " fascia oraria: " + this.state.message, 
        }
        this.props.mail(bodymail)
        alert("Messaggio inviato")
    }
    
    
    render(){
        return(

        <div className="col-sm-12 col-md-6 offset-3 mt-3">
        <div className="card bg-colorTwo h-100">
            <div className="card-body">


            <form>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{this.props.name} inserisca il prorpio codice cliente</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="userCode" aria-describedby="emailHelp" onChange={this.set_content}/>
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{this.props.name} inserisca il numero sul quale vuole essere chiamato</label>
                <input type="text" className="form-control" id="exampleInputEmail1" name="tel" aria-describedby="emailHelp" onChange={this.set_content}/>
            </div>

            <div className="col-12 mb-5">
                <p>Scelga la fascia oraria che preferisce</p>

            
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="message" id="inlineRadio1" value="option1" onChange={this.set_content}/>
            <label className="form-check-label" for="inlineRadio1">h 10.00 - 13.00</label>
            </div>
            <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="message" id="inlineRadio2" value="option2" onChange={this.set_content}/>
            <label className="form-check-label" for="inlineRadio2">h 14.00 - 18.00</label>
            </div>
            </div>

           
            

         
        
            
            <button type="submit" className="btn btn-primary mr-2" onClick={this.send_mail}>Invia Richiesta</button>
            <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.push('/user/home')}>Torna alla pagina generale</button>
            </form>
            </div>
            </div>
            </div>
        );


    

}
}

export default withRouter(CallRequest);

