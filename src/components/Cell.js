import React from 'react';
import styled from 'styled-components';

const CellGroup = styled.div`
    display: grid;
    grid-template-columns: 60px auto;
    grid-gap: 25px;
    align-items: center;
`

const CellImage = styled.div`
    width: 60px;
    height: 60px;
    background-image: url(${props => props.image});
    background-size: 60px;
    border-radius: 10px;
    border: solid 1px rgba(0,0,0,0.1);
`

const CellTitle = styled.h4`
    border-bottom: solid 1px rgba(0,0,0,0.1);
    padding: 24px 0;
`

const Cell = props => (
    <CellGroup>
        <CellImage image={props.image}></CellImage>
        <CellTitle>{props.title}</CellTitle>
    </CellGroup>
)

export default Cell;