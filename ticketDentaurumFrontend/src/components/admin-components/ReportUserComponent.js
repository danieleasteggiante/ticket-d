import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';

class ReportUser extends Component {
    
    constructor(props){
        super(props);

        this.state={
            userCode :undefined,
            segnaledCode :undefined,
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
            message: "utente segnalato: " + this.state.segnaledCode + " motivazione: " + this.state.message, 
        }
        this.props.mail(bodymail)
        alert("Messaggio inviato")
    }
    
    render(){
        return(

        <div className="col-sm-12 col-md-6 offset-3 mt-3">
        <div className="card bg-colorThree h-100 text-light">
            <div className="card-body">


            <form>

            <div className="form-group ">
                <label htmlFor="exampleInputEmail1">{this.props.name} Inserire il codice cliente</label>
                <input type="text" className="form-control" name="segnaledCode" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.set_content} />
            </div>

            <div className="form-group ">
                <label htmlFor="exampleInputEmail1">{this.props.name} Inserire il proprio codice cliente</label>
                <input type="text" className="form-control" name="userCode" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={this.set_content} />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">{this.props.name} Inserire la motivazione della segnalazione</label>
                <textarea className="form-control" name="message" id="exampleFormControlTextarea1" rows="3" onChange={this.set_content}></textarea>
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

export default withRouter(ReportUser);