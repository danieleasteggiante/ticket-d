import React, {Component} from 'react';
import { withRouter, Link } from 'react-router-dom';

const ListTitle = (props)=>{
    return(
        
        <div className="alert alert-light mb-1 p-2" role="alert">
              <Link to={"/admin/ticket?id=" + props.id}> {props.title} </Link>
        </div>
 
    );
}


class SearchTicket extends Component {
    constructor(props){
        super(props);

        this.state={
            searchValue : undefined,
            valueOpen : false
        }
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        console.log(this.props.tickets);
    }
    
    handleChange = (arrayTickets, toSearch)=>{
        let valueInput = arrayTickets.filter(element => element.title.toLowerCase().includes(toSearch));

        this.setState({
            searchValue : valueInput
       });

       if((valueInput.searchValue !== undefined) || (valueInput.length !== 0 )){
           this.setState({
               valueOpen: true
           })
       }
       if ((valueInput.length === 0) || (toSearch.length < 2)){
           this.setState({
               valueOpen : false
           })
       }        
       
    }
    
    render(){
            const listRender = this.state.searchValue !== undefined ? this.state.searchValue.map((e,i)=><ListTitle key={i} id={e._id} title={e.title} />) : null;
            return(

                <div className="col-sm-12 col-md-6 offset-3 mt-3">
                <div className="card bg-colorThree text-light">
                    <div className="card-body">


                    <form>

                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1"> Cercare la conversazione</label>
                        <input type="text" className="form-control mb-1" id="search" aria-describedby="emailHelp" onChange={e => this.handleChange(this.props.tickets, e.target.value)}/>
                        {this.state.valueOpen === true ? listRender : <div>inizia a scrivere</div>}
                    </div>
                    
                    {/* <button type="submit" className="btn btn-primary mr-2">Invia Richiesta</button> */}
                    <button type="button" className="btn btn-secondary" onClick={()=> this.props.history.push('/admin/home')}>Torna alla pagina generale</button>
                    </form>
                    </div>
                    </div>
                    </div>
                );
        
    }


    

}

export default withRouter(SearchTicket);