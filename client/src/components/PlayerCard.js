import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
transition: 0.3s;
width: 350px;
height: auto;
padding: 2px 16px;
border: green solid 2px;
margin: 8px;
border-radius: 5px;
:hover{
    color: black;
    border-radius: 25px;
    background: #dce8da;
}
`;

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Details = styled.p`
font-size: 1.8em;
`

const PlayerCard = props => {
    return (
        <Card>
             <Title>{props.name}</Title>
             <Details>Country: {props.country}</Details>
             <Details>Search Interest: {props.searches}</Details>
        </Card>
    )
}

export default PlayerCard;