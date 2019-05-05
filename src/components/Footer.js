import React from 'react';
import styled from 'styled-components';

const FooterGroup = styled.footer`
    background: #eff3f5;
    padding: 80px 0;
    display: grid;
    grid-gap: 24px;
`

const Text = styled.p`
    max-width: 500px;
    margin: 0 auto;
`

const Button = styled.button`
    font-size: 16px;
    color: black;
    border: none;
    padding: 16px 60px;
    font-weight: 600;
    background: linear-gradient(102.24deg, #FFDF4D 0%, #fec816 100%);
    box-shadow: 0px 10px 20px rgba(101, 41, 255, 0.15);
    border-radius: 30px;
    justify-self: center;
    transition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);
`

const LinkList = styled.div`
    width: 500px;
    margin: 40px auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 16px;
`

const Copywrite = styled.div`
    color: rgba(0,0,0,0.75);
    max-width: 500px;
    margin: 0 auto;
    padding: 0 24px;
`

const Footer = ({data, children}) => (
    <FooterGroup>
        <Text>Tweet "MeooApp makes by museum visit a better experience @meooapp"</Text>
        <Button>Tweet</Button>
        <LinkList>
            {data.allContentfulLink.edges.map(edge => (
                <a href={edge.node.url}>{edge.node.title}</a>
            ))}
        </LinkList>
        
        <Copywrite>{children}</Copywrite>
    </FooterGroup>
)

export default Footer;