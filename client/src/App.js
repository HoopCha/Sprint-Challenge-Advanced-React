import React from 'react';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

import PlayerCard from './components/PlayerCard';

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
`;

class App extends React.Component {
constructor() {
  super();
    this.state = {
      players: [],
  };
}

componentDidMount(){
  axios
    .get('http://localhost:5000/api/players')
    .then((response) => {
      console.log('data:', response.data)
      this.setState({
        players: response.data
      })
    })
    .catch(err => console.log('error'));
  }

render(){
  return (
  <Cards>
 {this.state.players.map(player =>{
      return (
             <PlayerCard
             key = {player.id}
             name = {player.name}
             country = {player.country}
             searches = {player.searches}
             />
      )
      })}
  </Cards>
  )
}}
export default App;