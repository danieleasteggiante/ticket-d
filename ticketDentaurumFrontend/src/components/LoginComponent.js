import React, {Component} from 'react';



class Login extends Component {

    constructor(props){
        super(props);

        this.state = {
            username:null,
            password:null
        }

        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        //console.log(event, this.state);
        this.props.login(this.state.username, this.state.password, true);
        this.props.toggle()()
      }


    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
      }
  

    render(){


        return(
    <>
    <div className="modal-background" onClick={this.props.toggle()}>

        <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
       
            <div className="header-modal ml-4 mr-4">
                <h5 className="title-modal">Login</h5>
                <button type="button" className="close" onClick={this.props.toggle()}>
                <span >&times;</span>
                </button>
            </div>
            <div >
                <p>Se vuoi accedere compila il form, se non si possiedono le credenziali registrarsi al nostro online shop cliccando qui  <a href="https://shop.dentaurum.it" target="blank"><span className="fa fa-cart-plus fa-2x"></span></a><br/> Vi verranno inviati username e password nell'arco di 24/48 ore. 
                    Per qualsiasi altro problema contattare Dentaurum Italia al numero 051 862580.</p>
                    <div className="row">
                        <div className="col-8 offset-2">

                    <form>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Username</label>
                        <input type="text" onChange={this.handleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Inserisci codice cliente" name="username"/>
                        <small id="emailHelp" className="form-text text-muted">Inserisci il tuo nome utente/codice cliente</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" onChange={this.handleChange} className="form-control" id="exampleInputPassword1" placeholder="Password" autoComplete="on" name="password"/>
                        <small id="emailHelp" className="form-text text-muted">Inserisci la password che ti è stata assegnata via email</small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mr-2" onClick={this.handleSubmit} >Accedi</button>
                    <button type="button" className="btn btn-secondary" onClick={this.props.toggle()}>Chiudi</button>
                </form>
                </div>
                </div>
            </div>
     
        </div>

        </div>
    
           </>    )
           
        } 
                
     

    
}

export default Login;
