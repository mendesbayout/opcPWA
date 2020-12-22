import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import styled from 'styled-components';
import Forecast from './components/Forecast/Forecast';



const Content = styled.div`
width: 100%; // make sure the parent is full screen 
height: 100%; // so that the content will center correctly

  padding: 20px;
  min-height: 50%;
  transition: all 0.3s;
  font-family: 'Raleway', sans-serif;
  
`;
// test

class App extends Component {
  
  constructor(props) {
  super(props);
  this.state = {
    Spot_Name: 'Cabo Frio',
    Beach_Name: 'Praia do Foguete',
     
  };}


  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="flex wrapper">
              <Content>         
                    <Switch>
                    <Forecast
                    />
              </Switch>
            </Content>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
