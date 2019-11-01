import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 300px;
height: 128px;;
padding: 2px 16px;
border: green solid 2px;
margin: 8px;
border-radius: 5px;
:hover{
    border-radius: 25px;
    background: #dce8da;
}
`;

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const PlayerCard = props => {
    return (
        <Card>
             <Title>{props.name}</Title>
             <p>Country: {props.country}</p>
             <p>Searches: {props.searches}</p>
        </Card>
    )
}

export default PlayerCard;