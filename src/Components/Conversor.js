import React, { Component } from 'react';
import './Conversor.css';



export default class Conversor extends Component{

    //Default
    constructor(props){
        super(props);

        this.state = {
            moedaA_value: "",
            moedaB_value: 0


        }

        //Possibilitando o acesso de 'converter' ao meu estado 'moedaA'
        //método 'bind' cria um objeto contendo as propriedas do meu 'state'
        this.converter = this.converter.bind(this)

    }

    //Criando um método de conversão:
    converter(){
        
        let from = `${this.props.moedaA}`;                                       
        let url = `http://economia.awesomeapi.com.br/json/all/${from}-${this.props.moedaB}`;
       

        fetch(url)
        .then(
            res => {return res.json()}
        )
        .then(
            json => {let cot = json[from].high;
                          let moedaB = (parseFloat(this.state.moedaA_value * cot).toFixed(2))
                          this.setState({moedaB_value:moedaB})

                          console.log('sucesso!')
            
            } 
        )
    }

    render(){
        return(
            <div className = 'conversor'>
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                
                
                <input type = 'text' onChange = {
                    //Atribuindo uma função para capturar o valor digitado pelo usuário
                    (e)=>
                     {this.setState({moedaA_value: e.target.value})}} />

                <input type = 'button' value = 'Converter' onClick = {this.converter}/>
                <h3>Valor convertido: R${this.state.moedaB_value}</h3>
            </div>
        )
    }
}