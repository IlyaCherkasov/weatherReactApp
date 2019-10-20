import React from 'react';
import styled from 'styled-components';

const AddInfoBox = styled.div`
  width: 97.5%;
  background: #A7AFB1;
  margin-top: 10px;
  padding: 10px;
  color: #FFFFFF;
  display: flex;
  justify-content: space-between;
  
  div:first-child {
    font-size: 14pt;
    font-weight: 700;
  }
  
  div:last-child {
    font-weight: 500;
    font-size: 14pt;
  }
`;


function CurWeather() {
  return (
    <>
      <AddInfoBox>
        <div>Ветер</div>
        <div>This is value</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Облачность</div>
        <div>This is value</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Давление</div>
        <div>This is value</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Влажность</div>
        <div>This is value</div>
      </AddInfoBox>
      <AddInfoBox>
        <div>Координаты</div>
        <div>This is value</div>
      </AddInfoBox>
    </>
  );
}

export default CurWeather;
