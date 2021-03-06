import React, {Component} from 'react';
import { withRouter, useHistory } from 'react-router-dom';

export const Message = (props)=>{//bg-colorThree text-light h-100
    var styleMessage="";
    var styleText=""
    if (props.version === "admin" && props.isAdmin === "admin"){ 
        styleMessage = "card bg-colorThree text-light h-100";
        styleText = "text-light";
    } else if (props.version === "admin" && props.isAdmin !== "admin"){
        styleMessage = "card bg-colorTwo h-100";
        styleText = "text-dark";
    } else if (props.version !== "admin" && props.isAdmin !== "admin"){
        styleMessage = "card bg-colorThree h-100";
        styleText = "text-light";
    } else if (props.version !== "admin" && props.isAdmin === "admin"){
        styleMessage = "card bg-colorTwo text-light h-100";
        styleText = "text-dark";
    }

    return(
 
            <div className="col-10 mt-2 offset-1 mb-2">        
            <div className={styleMessage}>
                <div className={"card-body " + styleText}>
                    <h5>{props.user} - {new Intl.DateTimeFormat('it', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(props.data)))}
                    </h5>

                    {props.message}
                    
                    
                </div>
            </div>
        </div>

        )
}

export const ReplyMessage = (props)=>{
    return(
        <div className="col-10 mt-2 offset-1 mb-2">
            <div className="card-body">
           {props.reply === "Rispondi" ? 
           <form>
               <div className="form-group text-light">
                <label htmlFor="exampleInputEmail1">Inserire qui la risposta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" onChange={props.onChange}></textarea>
                </div>
                <div className="form-group text-light">
                <label htmlFor="exampleInputEmail1">Caricare file se necessario</label>
                <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_singola" onChange={props.changeImage}/>
                </div>
                <button type="button" className="btn btn-primary" onClick={props.addReply} >Aggiungi messaggio</button>
            </form> :
                <button type="button" className="btn btn-primary" onClick={props.ReopenTicket} >{props.reply}</button>
            }
            </div>
        </div>
        )    
}

export const RenderImages= (props)=>{
    return(
        <>
         {props.images.map((image,i)=>{
             return(
              <div key={i} className="col-4">
                <a class="btn btn-info m-2" href={"https://care.dentaurum.it/" + image} target="_blank">Immagine {i+1}</a>
                </div>    

             )
         })}
         </>
    )
}

export const RenderProgressBar = (props)=>{
    return(
        <div className="row">
            <div className="col-12 m-3">
                <h4 className="text-light">Attendere la fine del caricamento</h4>

        <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: props.valueBar+"%"}} aria-valuenow={props.valueBar} aria-valuemin="0" aria-valuemax="100"></div>
        </div>  
        </div>
        </div>
    )}

class SingleTicket extends Component {
    constructor(props){
        super(props);    
        this.state={
            user: null,
            message : {
                author: this.props.version,
                content : null
            },
            image : null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleChangeImage = this.handleChangeImage.bind(this);
        this.ReopenTicketAction = this.ReopenTicketAction.bind(this)

    }

    handleChange(e){
        this.setState({
            message : {
                ...this.state.message,
                content : e.target.value,
            }
        })
    }

    handleChangeImage(e){
        this.setState({
            image : e.target.files[0]
        }, ()=>{
            console.log(this.state.image)
        })
    }

    handleSubmit(){
        if(this.state.image != null){
            const formData = new FormData();
            formData.append("imageSupplementare", this.state.image);
            this.props.AddSingleImages(formData, this.props.ticket._id);
            this.props.AddReply(this.state.message, this.props.ticket._id);
            alert ("Messaggio con immagine aggiunto")

        } else {
            this.props.AddReply(this.state.message, this.props.ticket._id);
            alert("Messaggio aggiunto");
            this.props.history.push('/thankYou/reply');
        }   
    }

    ReopenTicketAction (){
        this.props.ReopenTicket(this.props.ticket._id);
        this.props.history.push('/thankYou/reopened');
    }
    
    render(){
        if(this.props.newTicketState.upload === 100){
            setTimeout(()=>{
                this.props.history.push('/thankYou/newMessage');   
            }, 2000)
        }

    return(
            <div className="col-sm-12 col-md-8 offset-2 mt-3 mb-5">
                {this.props.ticket.images.length > 0 ? <div className="container">
                    <div className="row">
                        <RenderImages images={this.props.ticket.images}/>
                    </div>
                </div> : null}
            <div className="card bg-colorThree h-100">
                <div className="card-body">
                    <h3 className="text-light">{this.props.ticket.title}</h3>
                    <div className="text-light">
                        {this.props.ticket.title}
                    </div>
                    <div className="row">
                    
                    {this.props.ticket.messages.map((message, i)=>{
                            return(
                            <Message key={i} user={message.author === "admin" ? this.props.ticket.Admin : this.props.ticket.RagioneSociale} version={this.props.version} message={message.content} isAdmin={message.author} data={message.createdAt}/>
                        )
                    })
                    } 
                    </div>

                {this.props.ticket.status === "open" ? <ReplyMessage reply = "Rispondi" addReply={this.handleSubmit} onChange={this.handleChange} changeImage={this.handleChangeImage}/> : <ReplyMessage reply = "Riapri" ReopenTicket={this.ReopenTicketAction}/>}
                {this.props.newTicketState.upload !== null ? <RenderProgressBar valueBar={this.props.newTicketState.upload} /> : null}
                <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.goBack()}>Torna alla pagina generale</button>
                </div>

                </div>
                </div>
        );
            }

}

export default withRouter(SingleTicket);
