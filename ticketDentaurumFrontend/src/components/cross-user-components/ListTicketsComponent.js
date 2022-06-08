import {React, Component } from 'react';
import {withRouter, Link} from 'react-router-dom';



export const PagBar = (props)=>{
    console.log(props);
    var index=[]
    for(var i = 0; i< props.pageTotal; i++){
        index.push(i);
    }
    

    return(
        <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
         
        <li  className="page-item"><a className="page-link" onClick={()=>props.setPage(0)}>Inizio</a></li>
        {
            index.map((i)=>{
                return <li key={i} className="page-item"><a className="page-link" onClick={()=>props.setPage(i)} >{i+ 1 } </a></li> 

            })
        }
        

        <li  className="page-item"><a className="page-link" onClick={()=>props.setPage(props.pageTotal - 1)}> Ultima pagina</a></li>

      
        </ul>
        </nav>)
    
}


class ListTickets extends Component {   
    constructor(props){
        super(props);

        this.state = {
            listAll : [],
            list: [],
            array: this.props.list.length,
            pageTotal: null, 
            current: 0,
            itemPerpage: 4,
        }
        this.createTicketsList = this.createTicketsList.bind(this);
        this.setPage = this.setPage.bind(this)

        
        } 

    async createTicketsList(){
        if (this.props.list.length > 0){
        var listAll = await this.props.list.sort(function(a,b){
            return new Date(b.createAtDate) - new Date(a.createAtDate);
          });

          this.setState({
            listAll : listAll,
            pageTotal : Math.ceil(listAll.length/4)
          })

          this.setPage(0)
        }

    }

    setPage(number){

        console.log("the number issss   " + number)


        this.setState({
            itemPerpage : 4,
            current : number * 4
        },()=>{

            var tmp = []

            
            for(var i = this.state.current; i  < this.state.itemPerpage + this.state.current; i++ ){
                if (this.state.listAll[i]){
                tmp.push(this.state.listAll[i])
                } else {
                    break;
                }
            }
            
            this.setState({
                list : tmp
            })

            console.log(this.state);

        })
    }

    componentDidMount(){
        
        this.createTicketsList();
        

    }

  
    render(){
    if (this.state.listAll.length > 0){


    return(
      
        <>
        <div className="container mb-5">
        <div className="row">
       
        <div className="col-12 mt-3">
           
       <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.push("/" +this.props.version +"/home")}>Torna alla pagina generale</button>
       </div>
       </div>
       <div className="row">

     {this.state.list.map((ticket) => {
            return (

                    <div key={ticket._id} className="col-12 mt-3">
                    <div className="card bg-colorThree text-light h-80">
                        <div className="card-body">
                            <h5>{ticket.title} - {new Intl.DateTimeFormat('it', {year:'numeric', month:'short', day:'2-digit'}).format(new Date(Date.parse(ticket.createAtDate)))}
                            {ticket.messages[ticket.messages.length - 1].author === "user" ? <span className="fa fa-exclamation fa-2x ml-3" style={{color:"red"}}> </span> : null}
                            </h5>
                            <p><small> id: {ticket._id}</small></p>
                            
                            <Link to={`/${this.props.version}/ticket?id=${ticket._id}`} >
                            <button className="btn btn-dark">Apri ticket</button>
                            </Link>
                            
                        </div>
                    </div>
                </div>
            );
        })}
        </div>
         <div className="row">
        <div className="col-12 mt-3">
        <PagBar setPage={this.setPage} pageTotal={this.state.pageTotal}/>
        </div>
        </div>
        </div>

      </>


        )} else {
            return (
                <>
                <div className="col-6 mt-3 offset-3">
           
                <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.push("/" +this.props.version +"/home")}>Torna alla pagina generale</button>
                
                <h2 className="text-light">Nessun Messaggio presente</h2>
                </div>
                </>
                )
        }
    }
}
   


export default withRouter(ListTickets);