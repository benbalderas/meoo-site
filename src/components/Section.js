import React from 'react'
import styled from 'styled-components'
import Wave from './Wave';

const SectionGroup = styled.section`
    height: 720px;
    background: url(${props => props.image});
    background-size: cover;
    display: grid;
    grid-template-rows: 300px auto;
    grid-gap: 20px;
    position: relative;
`
const SectionWave = styled.div`
    position: absolute;
    width: 100%;
    top: -5px;
    transform: rotate(180deg);
`

const SectionLogo = styled.img`
    align-self: end;
    width: 115px;
    margin: 0 auto;
`
const SectionContent = styled.div`
    display: grid;
    grid-template-columns: 300px auto;
    grid-gap: 20px;
    max-width: 800px;
    margin: 0 auto;
    padding: 16px;
    align-items: top;

    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        grid-template-rows: auto 100%;
    }
`
const SectionTitle = styled.h3`
    color: white;
    margin: 0;
`
const SectionText = styled.p`
    color: rgba(255, 255, 255, 0.8);
`

const Section = props => (
    <SectionGroup image={props.image}>
        <SectionWave>
            <Wave />
        </SectionWave>

        <SectionLogo src={props.logo} />

        <SectionContent>
            <SectionTitle>{props.title}</SectionTitle>
            <SectionText>{props.text}</SectionText>
        </SectionContent>
    </SectionGroup>
)

export default Section