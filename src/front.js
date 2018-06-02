import React, { Component } from 'react';
import './front.css';
import './App.css';

class front extends Component {

    constructor(){
        super();
        this.state = {
            number: "",
            checkNumber: "",
            changeNumber: ""
        }
        this.handleSubmitChange = this.handleSubmitChange.bind(this);
        this.handleSubmitCheck = this.handleSubmitCheck.bind(this);
        this.submitChange = this.submitChange.bind(this);
        this.submitCheck = this.submitCheck.bind(this);
    }

    submitChange(event){
        this.setState({
            changeNumber: event.target.value
        }) 
    }

    submitCheck(event){
        this.setState({
            checkNumber: event.target.value
        })       
    }

    handleSubmitChange(event) {        
        //consumir el web service
        var num = this.state.changeNumber;
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var url = 'https://code-breaker-scala.herokuapp.com/changeSecret/'+num;
        
        fetch(proxyUrl+url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            numero: data.message
          });        
          
        })
        .catch(error => console.log(error));
    }

    handleSubmitCheck(event) {        
        var num = this.state.checkNumber;
        var proxyUrl = 'https://cors-anywhere.herokuapp.com/';
        var url = 'https://code-breaker-scala.herokuapp.com/codebreaker/'+num;
        console.log(url);
        fetch(proxyUrl+url)
        .then(response => response.json())
        .then(data => {
          this.setState({
            numero: data.message
          });        
          
        })
        .catch(error => console.log(error));
    }

    render() {
        return (
        <div className="front">            
            <br></br>
            <div className="palabra">
                <div>
                    <label>
                        Cambiar secret  
                    </label>
                </div>
                <div>  
                    <input className="numero" type="text" onChange={this.submitChange}/>                
                </div>
                <br></br>
                <div>   
                    <button type="submit" className="btn" onClick={this.handleSubmitChange}>Cambiar</button>                
                </div>                
            </div>
            <div className = "palabra">
                <br></br>
                <div>
                    <label>
                        Número 
                    </label>
                </div>
                <div>  
                    <input className="numero" type="text" onChange={this.submitCheck}/>               
                </div>
                <br></br>
                <div>   
                    <button type="submit" className="btn" onClick={this.handleSubmitCheck}>Verificar</button>
                </div>
                                
            </div>
            <br></br>
            <div className = "palabra">
                <label className="resultado" id="resultado" type="text">
                    {this.state.numero}
                </label>
            </div>
        </div>
        );
    }
}

export default front;
