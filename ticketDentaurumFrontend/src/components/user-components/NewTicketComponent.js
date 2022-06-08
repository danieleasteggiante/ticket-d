import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
//const axios = require('axios');


export const RenderAreaDefault = (props)=>{
    return(
        <>
        <div className="form-group-v2">
            <label htmlFor="exampleFormControlTextarea1"> Seleziona l'area di interesse</label>
        </div>

        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="ortodonzia" onChange={props.selectArea} />
        <label className="form-check-label" htmlFor="inlineRadio1">Ortodonzia</label>
        </div>
  
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="implantologia" onChange={props.selectArea}/>
        <label className="form-check-label" htmlFor="inlineRadio3">Implantologia</label>
        </div>

        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="ceramica" onChange={props.selectArea}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Ceramica</label>
        </div>
        
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="protesi" onChange={props.selectArea}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Protesi</label>
        </div>

        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="gnatologia" onChange={props.selectArea}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Gnatologia</label>
        </div>

        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="digitale" onChange={props.selectArea}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Digitale</label>
        </div>
        </>

    )

}

export const RenderScelta = (props)=>{

    return(
        <>
        <div className="form-group-v2">
            <label htmlFor="exampleFormControlTextarea1"> Seleziona l'area di interesse</label>
        </div>

        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="ortodonzia-clinica" onChange={props.selectArea} />
        <label className="form-check-label" htmlFor="inlineRadio1">Ortodonzia clinica</label>
        </div>
        <div className="form-check form-check-inline">
        <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="ortodonzia-tecnica" onChange={props.selectArea}/>
        <label className="form-check-label" htmlFor="inlineRadio2">Ortodonzia tecnica</label>
        </div>
        </>

    )

}

export const RenderAreaOrtoCL = (props)=>{    
    return(
    <>
        <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>


    <div className="form-group">
        <label htmlFor="exampleFormControlTextarea1">Richiesta (descrivi il problema)</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" name="message" rows="3" onChange={props.handleChangeForm}></textarea>
    </div>

    <div className="row">
        <div className="col-12">
        Se la domanda è riferita ad un caso è necessario inserire le seguenti immagini: <br/>
       <strong>N.B. ATTENZIONE! Non inserire in alcun modo informazioni riconducibili a persona fisica, tutto il materiale uploadato dovrà essere rigorosamente anonimo.
        Nel caso specifico del caricamento di foto si raccomanda di rendere irriconoscibile il volto del soggetto offuscando i tratti somatici non necessari alla valutazione clinica.
        <span/></strong> </div>
    </div>

    

    <div className="form-group mt-5 ml-5">
    <label htmlFor="exampleFormControlFile1">Fotografia frontale</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_frontale" onChange={props.onFileChange}/>
    </div>
    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Fotografia laterale-destra</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_laterale_dx" onChange={props.onFileChange}/>
    </div>
    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Fotografia laterale-sinistra</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_laterale_sx" onChange={props.onFileChange}/>
    </div>
    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Panoramica</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_panoramica" onChange={props.onFileChange}/>
    </div>
    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Fotografia latero-laterale</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    </>
)

}


export const RenderAreaOrtoTC = (props)=>{
    return(
    <>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>

    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Immagine</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    
    <div className="form-group">
                <label htmlFor="exampleInputEmail1">Richiesta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={props.handleChangeForm}></textarea>
        </div>
        
    </>
)

}


export const RenderAreaImpl = (props)=>{
    return(
    <>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>

    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Immagine</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    
    <div className="form-group">
                <label htmlFor="exampleInputEmail1">Richiesta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={props.handleChangeForm}></textarea>
        </div>
        
    </>
)

}

export const RenderAreaProt = (props)=>{
    return(
    <>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>

    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Immagine</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    
    <div className="form-group">
                <label htmlFor="exampleInputEmail1">Richiesta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={props.handleChangeForm}></textarea>
        </div>
        
    </>
)

}

export const RenderAreaCera = (props)=>{
    return(
    <>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>

    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Immagine</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    
    <div className="form-group">
                <label htmlFor="exampleInputEmail1">Richiesta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={props.handleChangeForm}></textarea>
        </div>
        
    </>
)

}

export const RenderAreaGnat = (props)=>{
    return(
    <>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>

    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Immagine</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    
    <div className="form-group">
                <label htmlFor="exampleInputEmail1">Richiesta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={props.handleChangeForm}></textarea>
        </div>
        
    </>
)

}

export const RenderAreaDigi = (props)=>{
    return(
    <>
    <div className="form-group">
        <label htmlFor="exampleInputEmail1">Titolo richiesta</label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="title" onChange={props.handleChangeForm}/>
    </div>

    <div className="form-group ml-5">
    <label htmlFor="exampleFormControlFile1">Immagine</label>
    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="foto_latero_laterale" onChange={props.onFileChange}/>
    </div>
    
    <div className="form-group">
                <label htmlFor="exampleInputEmail1">Richiesta</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="message" onChange={props.handleChangeForm}></textarea>
        </div>
        
    </>
)

}

export const RenderButtonSend= (props)=>{
    console.log(props)
    return(
    <div className="row">
        <div className="col-10 offset-1">
        <button type="submit" className="btn btn-primary mr-2" onClick={props.send}>Invia Richiesta</button>
        <button type="button" className="btn btn-secondary" onClick={()=>props.return('/user/home')}>Torna alla pagina generale</button>
        </div>
    </div>
     )
}

export const GoBackButtonSend= (props)=>{
    console.log(props)
    return(
    <div className="row">
        <div className="col-10 offset-1 mt-3 mb-3">
        <button type="button" className="btn btn-info" onClick={()=>props.goBack(props.location)}>Torna alla pagina precedente</button>
        </div>
    </div>    
    )
}

export const RenderProgressBar = (props)=>{
    return(
        <div className="row">
            <div className="col-12">
                <h4>Attendere la fine del caricamento</h4>

        <div className="progress">
    <div className="progress-bar" role="progressbar" style={{width: props.valueBar+"%"}} aria-valuenow={props.valueBar} aria-valuemin="0" aria-valuemax="100"></div>
        </div>  
        </div>
        </div>
    )
}

class NewTicket extends Component {

    constructor(props){
        super(props);

        this.state = {

            area: [],
            form: {
                area: '',
                CodCliente: this.props.dataUser.CodCliente,
                RagioneSociale:this.props.dataUser.RagioneSociale,
                Admin: '',
                title: '',
                status: 'open',
                messages:[{author:'user', content:''}]
            },
            images: [],
            upload: this.props.upload
        }
        this.handleChange = this.handleChange.bind(this);
        this.RenderContent = this.RenderContent.bind(this);
        this.goBack = this.goBack.bind(this);
        this.handleChangeForm = this.handleChangeForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.addImagesToForm = this.addImagesToForm.bind(this);
        this.addSingleImage = this.addSingleImage.bind(this)          
    }

    onFileChange (e) {
        this.setState({ 
            images:[...this.state.images, e.target.files[0]]
        }, ()=>{console.log(this.state.images)}); 
      };

    handleSubmit(e){ 

        e.preventDefault();
        const formData = new FormData();
        

          this.setState({
            form: {
                ...this.state.form,
                area : this.state.area[this.state.area.length-1]
            }
        },
        () =>{ 
            console.log(this.state.form);
            if (this.state.images.length > 0){
                if(this.state.images.length > 3){

                    this.state.images.forEach((element,i) => {
                        formData.append("images", element, "foto" + i);
                      });
                       
                    this.addImagesToForm(formData);
                    alert("messaggio inoltrato con immagini")
                } else if (this.state.images.length === 1){

                    console.log(this.state.images);
                    
                    formData.append("imageSupplementare", this.state.images[0]);
                       
                    this.addSingleImage(formData);
                    alert("messaggio inoltrato immagine allegata")
                }
               

            } else {
            this.props.newTicket(this.state.form);
            alert("messaggio inoltrato");
            this.props.history.push('/thankYou/newMessage');
            }
        })         
    }

    async addSingleImage(formData){
        var id = await  this.props.newTicket(this.state.form);
        if (id !== undefined){
            this.props.AddSingleImages(formData, id);
        }
    }

    async addImagesToForm(formData){
        var id = await this.props.newTicket(this.state.form);
        if(id !== undefined){
            this.props.addImages(formData, id);
        }
    }

    handleChange(event){
        this.setState({
            area: [...this.state.area, event.target.value],
        },()=>console.log(this.state.area[this.state.area.length-1]))
    }

    handleChangeForm(event){
        if (event.target.name === "message"){
            this.setState({           
                form: {
                    ...this.state.form,
                    messages : [{author:'user', content: event.target.value}]
                }
            })
            console.log(this.state.form.messages);
        } else {
            this.setState({           
                    form: {
                        ...this.state.form,
                        [event.target.name] : event.target.value
                    }
                })
        }
    }
    

    goBack(value){
        this.setState({
            area: [...this.state.area, value]
        })
    }

    RenderContent(area){
        switch (area) {
            case "ortodonzia":
                return <RenderScelta sceltaTra={["ortodonzia-clinica", "ortodonzia-tecnica"]} selectArea={this.handleChange} />;
            case "ortodonzia-clinica":
                return <RenderAreaOrtoCL handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
            case "ortodonzia-tecnica":
                return <RenderAreaOrtoTC  handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
            case "implantologia":
                return <RenderAreaImpl  handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
            case "protesi":
                return <RenderAreaProt  handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
            case "ceramica":
                return <RenderAreaCera  handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
            case "gnatologia":
                return <RenderAreaGnat  handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
            case "digitale":
                return <RenderAreaDigi  handleChangeForm={this.handleChangeForm} onFileChange={this.onFileChange}/>;
                
            default:
                return <RenderAreaDefault selectArea={this.handleChange}/>;
            }   
    }


    render(){
        if(this.props.newTicketState.upload === 100){
            setTimeout(()=>{
                this.props.history.push('/thankYou/newMessage');   
            }, 2000)
        }
           
  
        return(
            <div className="col-sm-12 col-md-6 offset-3 mt-3 mb-5">
            <div className="card bg-colorTwo h-100 mb-3">
            <div className="card-body">
           

            <form onSubmit={this.submitHandler}>
            {this.RenderContent(this.state.area[this.state.area.length-1])}
            {this.props.newTicketState.upload !== null ? <RenderProgressBar valueBar={this.props.newTicketState.upload} /> : null}

            {this.state.area[this.state.area.length-1] !== undefined ? 
            <><GoBackButtonSend goBack={this.goBack} location={this.state.area[this.state.area.length-2]}/> <RenderButtonSend return={this.props.history.push} send={this.handleSubmit}/></> 
            : null}
            </form>

            </div>
            </div>
            </div>
            )
    } 
}

export default withRouter(NewTicket);



