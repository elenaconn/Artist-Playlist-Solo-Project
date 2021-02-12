import React from 'react';
import styled from 'styled-components';

export const NameButtons = styled.button`
  text-align: center;
`;

function Artist({name}){
  return (
    <div>
      <NameButtons>
        {name}
      </NameButtons>
    </div>
  )
};


export default Artist;