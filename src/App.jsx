/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-anonymous-default-export */

import React, { Component } from "react";
import "./estilo.css"

class App extends Component {

    constructor(props) {

        super(props);
        this.state = {
            numero: 0,
            botao: 'Iniciar'
        }

        this.timer = null
        this.iniciar = this.iniciar.bind(this)
        this.limpar = this.limpar.bind(this)
    }


    iniciar() {
        let state = this.state

        if (this.timer !== null) {
           
            clearInterval(this.timer)
            this.timer = null
            state.botao = 'Iniciar'
          
        } else {
            this.timer = setInterval(() => {
                let state = this.state
                state.numero += 0.1
                this.setState(state)
            }, 100)
            state.botao = 'Pausar'
        }
        this.setState(state)

    }

    limpar() {
        if(this.timer !== null){
            clearInterval(this.timer)
            this.timer = null
        }

        let state = this.state
        state.numero = 0
        state.botao = 'Iniciar'
        this.setState(state)
    }

    render() {
        return (
            <div className="container">
                <img src={require('./imagens/cronometro.png')} alt="" className="img" />

                <p className="tempo">{this.state.numero.toFixed(1)}</p>

                <div className="areaBotoes">
                    <button className="botoes" onClick={this.iniciar}>{this.state.botao}</button>
                    <button className="botoes" onClick={this.limpar}>Limpar</button>
                </div>
            </div>

        )
    }
}
export default App;