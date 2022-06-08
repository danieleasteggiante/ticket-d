import React, { Component } from 'react';
import Login from './LoginComponent';
import logo from '../assets/images/logo-Dentaurum.png'
import { withRouter } from "react-router-dom";



class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            formData: null
        }

        this.toggleModal = this.toggleModal.bind(this);
    }

    componentDidMount() {
        if (this.props.user === undefined) {
            this.props.history.push('/');
        }
    }


    componentDidUpdate() {
        if (this.props.user === "user") {
            this.props.history.push('/user/home');
        } else if (this.props.user === "admin") {
            this.props.history.push('/admin/home');
        }
    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }


    render() {


        return ( <
            > {
                this.state.isModalOpen ? < Login isOpen = { this.state.isModalOpen }
                login = { this.props.login }
                toggle = {
                    () => this.toggleModal }
                /> : null}

                <
                div className = "container-background" > < /div>

                <
                div className = "container-fluid text-center pb-5" >
                <
                header >
                <
                div className = "row" >
                <
                div className = "col-sm-12 mt-2" >
                <
                h3 className = "text-light" > Dentaurum Italia < /h3> <
                /div> <
                /div> <
                div className = "row" >
                <
                div className = "col-sm-12" > { this.props.user !== 'default' ? < a href = { this.props.locationClick + "/home" } > < img className = "logo-quality"
                    src = { logo } /></a > : < a href = "#" > < img className = "logo-quality"
                    src = { logo } /></a > } <
                /div>          <
                /div>      <
                /header>


                <
                div className = "row d-none d-md-block d-lg-block d-xl-block" >
                <
                div className = "overBlack" >
                <
                div className = "col-sm-12 mt-5 mb-5 p-3" >
                <
                h1 className = "cover-heading text-light" > Dentaurum We Care < /h1> <
                p className = "lead text-light" > Sei un medico ? Sei cliente Dentaurum Italia ? < br / > Hai bisogno di assistenza sui nostri prodotti di ortodonzia ? < br / > Apri un ticket e un nostro consulente ti aiuterà a risolvere il tuo problema. < /p> <
                p className = "lead" >
                <
                button type = "button"
                className = "btn btn-lg btn-light pr-4 pl-4 mr-2"
                onClick = { this.toggleModal } > Accedi < /button> <
                a className = "btn btn-lg btn-light pr-4 pl-4"
                href = "/relatori" > I nostri Relatori < /a>

                <
                /p> <
                /div> <
                /div> <
                /div>


                <
                div className = "row d-block d-md-none" >
                <
                div className = "col-sm-12 mt-5 mb-5" >
                <
                h1 className = "cover-heading text-light" > Ticket center < /h1> <
                p className = "lead text-light" > Sei un medico ? Sei cliente Dentaurum Italia ? Hai bisogno di assistenza sui nostri prodotti di ortodonzia ? Apri un ticket e un nostro dentista ti aiuterà a risolvere il tuo caso. < /p> <
                p className = "lead" >
                <
                a href = "#"
                className = "btn btn-lg btn-light"
                className = "btn btn-lg btn-light pr-4 pl-4"
                onClick = { this.toggleModal } > Accedi < /a> <
                a className = "btn btn-lg btn-light pr-4 pl-4"
                href = "/relatori" > I nostri Relatori < /a> <
                /p>

                <
                /div>

                <
                /div>


                <
                /div>     <
                />
            )
        }

    }

    export default withRouter(Home);