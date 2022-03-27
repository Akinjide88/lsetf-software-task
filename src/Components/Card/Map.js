import React from 'react';
import styled from 'styled-components';

function Map() {
  return (
  <Container>
    <Containerhold>
      <iframe width="100%" height="100%" id="gmap_canvas" src="https://maps.google.com/maps?q=adebola%20sewing%20machine&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
    </Containerhold>
  </Container>
  )
}

export default Map;

export const Container = styled.div`
width: 100%;
height: 500px;
background-color: whitesmoke;
display: flex;
justify-content: center;
align-items: center;
`
export const Containerhold = styled.div`
width: 80%;
height: 100%;
`
