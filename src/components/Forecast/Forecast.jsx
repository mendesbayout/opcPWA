import React, { Component } from "react";
import Select from "react-select";
import styled from "styled-components";
import axios from "axios";
import BeachInfo from "./BeachInfo";
import Spinner from "react-bootstrap/Spinner";

const Content = styled.div`
width: 100%; // make sure the parent is full screen 
height: 100%; // so that the content will center correctly
  height: auto;
  margin: auto;
   
  .card {
  
text-align: fixed;
justify-content: center;
padding: 15px;
margin: 10px;
padding-top: 5px;     
box-shadow: 1 1 5px 0 #000;
padding: 10px;  
  
}
@media screen and (min-width: 1800px) {
      
    
    .beach{
    max-height: 200px;
    padding-top: 10px;
height: 50%;
width: auto;
justify-content: center;
resize: auto;
text-align: center;
}
.card {
  text-align: center;
  padding-top: 10px;
  padding-left: 50%;
  resize:auto;
}@media screen and (min-width: 2000px) {
    text-align: center; 
    resize: auto;
      .card-img-top{
      max-height: 200px;
      padding: auto;
  height: 50%;
  width: auto;
  justify-content: center;
  resize: auto;
  }
  
  
   
    }
  
  
    
  
  label {
    size: 100%;
    font-size: 1.5em;
    color: #2fbc1a;
    justify-content: center;
    
  }.card {
  resize:auto;}
.flex-wrapper {justify-content: center;}
} 
`;

class Forecast extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //Dados sobre o pico (dummy data)
      Picos: [],
      opcaoSelecionada: "",
      Pico: [],
    };
  }

  // fetchData() {
  // Quando o usuário selecionar um pico no campo select, os dados desse pico devem ser passados para
  // o card de previsão, famoso atualizar o status do componente.
  preencherCard = (pico) => {
    console.log(pico);
    this.setState({
      //Criando uma cariavel para receber todo o Json,
      Pico: pico.value,
      opcaoSelecionada: pico,
    });
  };

  fetchData() {
    //Numero Fixo. Ao Renderizar o componente esse número deve ser recebido
    //Ex: fetchData(ID_Prev_OPC)
    axios
      .get("http://demo6039565.mockable.io/PrevisaoOPC")
      .then((res) => {
        // console.log(res.data);
        //Provavelmente é necessário fazer um map para percorrer todo o json e preencher uma lista
        //Ou talvez, apenas salvar uma variavel DATA = res.data
        this.setState({
          //Criando uma cariavel para receber todo o Json
          Picos: res.data,
        });
      })
      .catch((err) => console.log(err));
  }
  componentDidMount() {
    this.fetchData();
  }

  //change spot
  componentDidUpdate(prevProps) {
    this.fetchData();
  }
  render() {
    const {
      //Passando a variavel com  todo json
      Picos,
      Pico,
      opcaoSelecionada,
    } = this.state;
    return (
      <Content className="flex-container">
        <div className="row mb-3">
          <div className="form-group col-lg-4 col-sm-10 mt-3">
            <label htmlFor="exampleFormControlSelect1">
             <Spinner class="a" animation="grow" /> {"   "}Selecione o pico
            </label>
            <Select
              //Quando clicar na opção é necessário fazer o fetch novamente, pelo indice da opção que foi clicada
              onChange={this.preencherCard}
              value={opcaoSelecionada}
              options={Picos.map((pico, index) => {
                return {
                  value: pico,
                  label:
                    pico.Data +
                    " - " +
                    pico.Nome_Praia +
                    " - " +
                    pico.Nome_Pico,
                };
              })}
            ></Select>
          </div>
        </div>
        <div className="row flex-wrap">
          <div>
            <BeachInfo Pico={Pico} />
          </div>
        </div>
      </Content>
    );
  }
}

export default Forecast;